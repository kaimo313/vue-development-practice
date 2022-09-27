import router from "@/router";
import request from "@/utils/request"
import { message } from "ant-design-vue";

const state = {
    step: {
        payAccount: "kaimo313",
        receiverAccount: {
            type: "alipay",
            number: ""
        }
    }
}

const actions = {
    async submitStepForm({ commit }, { payload }) {
        console.log("submitStepForm--->", ...arguments)
        let res = await request({
            url: "/api/form",
            method: "post",
            data: payload
        });
        if(res.data && res.data.message === "OK") {
            console.log("res--->", res)
            commit("saveStepFormData", payload);
            router.push("/form/step-form/result");
            message.success({
                content: "提交成功"
            });
        }
    }
}

const mutations = {
    saveStepFormData(state, { payload }) {
        state.step = {
            ...state.step,
            ...payload
        }
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}