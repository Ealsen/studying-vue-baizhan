<template>
    <div class="axios-requesting">
        <h1 class="title">axiosRequesting</h1>
        <p class="content" v-if="chengpin.title">{{ chengpin.title }}</p>
        <p class="content" v-if="blueberrypaiIsLogin">blueberrypaiIsLogin</p>
    </div>
</template>

<script>
// // 已经全局引入了 axios
// import axios from 'axios';
import querystring from 'querystring';
export default {
    name: 'axiosRequesting',
    data() {
        return {
            chengpin: {
            },
            blueberrypaiIsLogin: false,
        }
    },
    methods: {
    },
    mounted() {
        // 第一次请求 写法
        this.$axios(
            {
                method: 'get', // get请求方式
                url: "http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php"
            }
        ).then(res => {
            console.log("first get requsting: ")
            console.log(res.data)
            this.chengpin = res.data.chengpinDetails[0]
        }
        )

        this.$axios({
            method: 'post', // post请求方式
            url: "http://iwenwiki.com/api/blueberrypai/login.php",
            data: querystring.stringify({
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            })
        }).then(res => {
            console.log("first post requsting: ")
            console.log(res.data);
            if (res.data.success === true) {
                this.blueberrypaiIsLogin = true;
            }
        })

        // 第二次请求 写法

        this.$axios.get("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(res => {
            console.log("second get requsting: ")
            console.log(res.data)
        })

        this.$axios.post("http://iwenwiki.com/api/blueberrypai/login.php", querystring.stringify({
            user_id: "iwen@qq.com",
            password: "iwen123",
            verification_code: "crfvw"
        })).then(res => {
            console.log("second post requsting: ")
            console.log(res.data)
        })

        // 注意 post请求参数是需要额外处理的
    },

}
</script>

<style scoped>
.axios-requesting {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}
</style>