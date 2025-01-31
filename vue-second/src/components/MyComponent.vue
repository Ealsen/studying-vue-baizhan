<template>
    <p class="pFirstClass">{{ string1 }}</p>
</template>

<script >
export default {
    data() {
        return {
            string1: "Vue组件基础组成"
        }
    },
    methods: {

    },
}
</script>

<style scoped>
/* 让当前样式只在当前组件内有效，可以用scoped属性来实现*/
.pFirstClass {
    color: red;
    font-size: 25px;
}
</style>