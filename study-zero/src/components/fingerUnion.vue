<template>
    <div class="fingerUnion">
        <h1>网络跨域请求解决方案</h1>
        <p>请求结果看控制台。</p>
        <p>跨域请求是指不同域名的两个页面之间进行通信，</p>
        <p>由于同源策略的限制，不同域名的页面之间无法进行通信。</p>
        <p>因此，需要通过一些特殊的手段来实现跨域请求。</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'fingerUnion',
    data() {
        return {
            message: 'Hello Vue!'
        };
    },
    methods: {},
    mounted() {
        // 网络跨域请求解决方案 http://iwenwiki.com/api/FingerUnion/list.php
        // 使用代理路径
        axios.get('/api/FingerUnion/list.php').then(res => {
            console.log("网络跨域请求解决方案请求成功: ", res);
            console.log(res.data);
        }).catch(err => {
            console.error("网络跨域请求解决方案请求出错: ", err);
        });
    }
}
</script>

<style>
.fingerUnion {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}
</style>
