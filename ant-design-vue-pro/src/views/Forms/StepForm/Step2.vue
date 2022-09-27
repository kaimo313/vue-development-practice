<template>
    <div>
        <a-form layout="horizontal" :form="form">
            <a-form-item
                label="付款账号"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
            >
                {{step.payAccount}}
            </a-form-item>
            <a-form-item
                label="账号密码"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
            >
                <a-input v-decorator="[
                    'password',
                    {
                        initialValue: password,
                        rules: [
                            {
                                required: true,
                                message: '请输入账号密码'
                            }
                        ]
                    },
                ]"
                type="password"
                placeholder="请输入账号密码" />
            </a-form-item>
            <a-form-item>
                <a-button @click="goPrev" style="margin-right: 10px;">上一步</a-button>
                <a-button type="primary" @click="handleSubmit">提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
export default {
    data() {
        this.form = this.$form.createForm(this);
        return {
            password: "",
            formItemLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
        };
    },
    computed: {
        step() {
            return this.$store.state.form.step
        }
    },
    created() {
        console.log("this.$store---->", this.$store)
    },
    methods: {
        goPrev() {
            this.$router.push("/form/step-form/info");
        },
        handleSubmit() {
            const { form, $store, step } = this;
            form.validateFields((err, values) => {
                console.log(err, values)
                if(!err) {
                    console.log(values);
                    // 以载荷形式分发
                    $store.dispatch("form/submitStepForm", {
                        payload: { ...step, ...values }
                    });
                    // 以对象形式分发
                    // $store.dispatch({
                    //     type: "form/submitStepForm",
                    //     payload: { ...step, ...values }
                    // });
                }
            })
        }
    },
};
</script>

<style></style>