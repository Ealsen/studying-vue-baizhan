<template>
    <MyComponent />
    <headDemo />
    <mainDemo />
    <asideDemo />
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
        asideDemo
    }
}
</script>

<style scoped></style>
