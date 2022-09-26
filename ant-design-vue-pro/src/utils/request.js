import axios from "axios";
import { notification } from "ant-design-vue";

function request(options) {
    return axios(options).then(res => {
        return res;
    }).catch((error) => {
        const { response: { status, statusText }} = error;
        notification.error({
            // message: h => {
            //     <div>
            //         请求错误 <span style="color: red">{status}</span>：{options.url}
            //     </div>
            // },
            message: status,
            description: statusText
        });
        return Promise.reject(error);
    })
}

export default request;