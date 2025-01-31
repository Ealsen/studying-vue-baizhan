<template>
    <div class="asideDemo">
        <h1>asideDemo</h1>
        <itemDemo />
        <itemDemo />
        <itemDemo />
    </div>
</template>

<script>
import itemDemo from './itemDemo.vue';
export default {
    name: "asideDemo",
    data() {
        return {};
    },
    methods: {},
    components: {
        itemDemo
    }
};
</script>

<style scoped>
.asideDemo {
    float: right;
    width: 30%;
    height: 600px;
    border: 5px solid #999;
    box-sizing: border-box;
}
</style>