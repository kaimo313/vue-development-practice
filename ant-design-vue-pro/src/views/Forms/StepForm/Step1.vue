<template>
    <div>
        <a-form layout="horizontal" :form="form">
            <a-form-item
                label="付款账号"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
            >
                <a-input v-decorator="[
                    'payAccount',
                    {
                        initialValue: step.payAccount,
                        rules: [
                            {
                                required: true,
                                message: '请输入付款账号'
                            }
                        ]
                    },
                ]" placeholder="请输入付款账号" />
            </a-form-item>
            <a-form-item
                label="收款账号"
                :label-col="formItemLayout.labelCol"
                :wrapper-col="formItemLayout.wrapperCol"
            >
                <ReceiverAccount v-decorator="[
                    'receiverAccount',
                    {
                        initialValue: step.receiverAccount,
                        rules: [
                            {
                                required: true,
                                message: '请输入收款账号',
                                validator: (rule, value, callback) => {
                                    if(value && value.number) {
                                        callback();
                                    }else{
                                        callback('收款账号没有填写');
                                    }
                                }
                            },
                        ]
                    },
                ]"/>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" @click="handleSubmit">下一步</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import ReceiverAccount from "@/components/ReceiverAccount.vue";
export default {
    data() {
        this.form = this.$form.createForm(this);
        return {
            formItemLayout:{
                labelCol: { span: 4 },
                wrapperCol: { span: 14 },
            }
        };
    },
    components: { ReceiverAccount },
    computed: {
        step() {
            return this.$store.state.form.step
        }
    },
    created() {
        console.log("this.$store---->", this.$store)
    },
    methods: {
        handleSubmit() {
            const { form, $router, $store} = this;
            form.validateFields((err, values) => {
                console.log(err, values)
                if(!err) {
                    console.log(values);
                    $store.commit({
                        type: "form/saveStepFormData",
                        payload: values
                    });
                    $router.push("/form/step-form/confirm");
                }
            })
        }
    },
};
</script>

<style></style>