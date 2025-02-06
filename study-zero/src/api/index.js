// index.js
import path from "./path";
import axios from "../utils/request";

export default {
    getChengpin() {
        return axios.get(path.baseUrl + path.chengpin);
    },

    getBlueberryPaiLogin() {
        return axios.post(path.baseUrl + path.blueberrypai, {
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        });
    }
}
