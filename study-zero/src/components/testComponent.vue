<script>
import { ref } from 'vue';

export default {
    data() {
        return {
            message: 'Hello Vue!',
            // countTimes 移到 setup 中或者使用组合式 API 定义
        };
    },
    methods: {
        changeMessage() {
            this.message = 'Goodbye Vue!';
        },
    },
    setup() {
        const countTimes = ref(0);

        const addCountTimes = () => {
            countTimes.value++;
        };

        return {
            countTimes,
            addCountTimes,
        };
    }
};
</script>

<template>
    <div class="test-component">
        <h1 class="h1-style">测试组件</h1>
        <p class="p-style">Test</p>
    </div>
</template>

<style scoped>
.test-component {
    /* background-color: #ffffff; */
    background-image: url('https://haowallpaper.com/link/common/file/previewFileImg/16144648753630592');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
	height: 500px;
    margin: 30px auto;
    padding: 20px;
    border: #cf372b 1px solid;
    border-radius: 30%;
    text-align: center;
    /* font-size: 24px; */
}

.h1-style {
    /* font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; */
    color: #cf372b;
    text-align: center;
    font-size: 30px;
    border: black 0px solid;
    border-radius: 50%;
}

.p-style {
    color: aqua;
}
</style>