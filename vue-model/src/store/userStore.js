import {defineStore} from "pinia";
import requests from "../util/request.js";

export const useUerStore = defineStore("user", {
    state: () => ({
        name: "Evan",
        age: 18
    }),
    actions: {
        async getBaidu() {
            requests.get("https://www.baidu.com").then(res => {
                console.log(res);
            }).catch(err => {
                console.log(err);
            })
        }
    }
})