<template>
    <div>
        <h1>组件传递数据</h1>
        <h3>{{ message }}</h3>
        <childDemo title="parent data" :demo="data1" />
    </div>
</template>

<script>
import childDemo from './childDemo.vue'
export default {
    name: 'ParentDemo',
    data() {
        return {
            message: 'Hello from the parent component',
            data1: 'parent data2',
        }
    },
    components: {
        childDemo
    }
}
</script>