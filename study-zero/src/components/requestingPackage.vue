<script>
import api from '../api/index';

export default {
    data() {
        return {

        };
    },
    mounted() {
        api.getChengpin().then(res => {
            console.log("请求封装logGetData:");
            console.log(res.data);
        });

        api.getBlueberryPaiLogin().then(res => {
            console.log("请求封装logPostData:");
            console.log(res.data);
        });
    }
}
</script>

<template>
    <div class="requestingPackage">
        <h1>请求封装</h1>
        <p>请求封装LogData请看控制台</p>
    </div>
</template>

<style scoped>
.requestingPackage {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}
</style>