<template>
    <div>
        <h1>组件传递数据</h1>
        <h3>{{ message }}</h3>
        <childDemo title="parent data" :demo="data1" :agedemo1="age1" :arrayNum1="arrayNum1"
            :objectData1="objectData1" />
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
            age1: 25,
            arrayNum1: [1, 2, 3, 4, 5],
            objectData1: {
                name: 'John',
                age: 30
            },
        }
    },
    components: {
        childDemo
    }
}
</script>