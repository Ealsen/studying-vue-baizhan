<template>
    <MyComponent />

    <!-- 组件的嵌套关系 -->
    <h1 class="zhujiantitle1">组件的嵌套关系</h1>
    <headDemo />
    <mainDemo />
    <asideDemo />
    <!-- 组件的嵌套关系 -->

</template>

<script>
import MyComponent from './components/MyComponent.vue';
import headDemo from './pages/headDemo.vue';
import mainDemo from './pages/mainDemo.vue';
import asideDemo from './pages/asideDemo.vue';

export default {
    components: {
        MyComponent,
        headDemo,
        mainDemo,
        asideDemo,
    }
}
</script>

<style scoped>
.zhujiantitle1 {
    color: red;
}
</style>