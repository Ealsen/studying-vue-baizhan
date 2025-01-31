<template>
    <div class="mainDemo">
        <h1>{{ message }}</h1>
        <articleDemo />
        <articleDemo />
    </div>

</template>

<script>
import articleDemo from './articleDemo.vue';
export default {
    name: "mainDemo",
    data() {
        return {
            message: "mainDemo"
        };
    },
    components: {
        articleDemo
    },
};
</script>

<style scoped>
.mainDemo {
    float: left;
    width: 70%;
    height: 600px;
    border: 5px solid #999;
    box-sizing: border-box;
    border-top: 0px;
}
</style>