<template>
    <div class="secondVueComponent">
        <h1>{{ h1_msg }}</h1>
        <p class="ptextToSecond">从父组件传递的消息：{{ messToSecond }}</p>
        <p class="ptextToSecond">从父组件传递的年龄：{{ ageToSecond }}</p>
        <ul class="ptextToSecond">
            <li v-for="(item, index) in arrayToSecond" :key="index">从父组件传递的数组元素：{{ item }}</li>
        </ul>
        <ul class="ptextToSecond">
            <li v-for="(value, key) in objectToSecond" :key="key">从父组件传递的对象属性：{{ key }}: {{ value }}</li>
        </ul>

        <h1>{{ h2_msg }}</h1>
        <button @click="defEventSendDataFromSecond">点击触发自定义事件</button>
    </div>
</template>

<script>
export default {
    props: {
        messToSecond: {
            type: String,
            default: '',
        },
        ageToSecond: {
            type: Number,
            default: 0,
        },
        arrayToSecond: {
            type: Array,
            default: () => [],
        },
        objectToSecond: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            h1_msg: '组件交互',
            h2_msg: '自定义事件传输数据',
            dataFromSecond: '我是子组件的数据',
        }
    },
    methods: {
        defEventSendDataFromSecond() {
            console.log('自定义事件触发，子组件传递数据：', this.dataFromSecond);
            this.$emit('dataFromSecond', this.dataFromSecond);
        },
    },
    mounted() {
        console.log('组件myComponent挂载完成，打印Vuex数据counter：', this.$store.state.counter);
    },
}
</script>

<style scoped>
.secondVueComponent {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}

.ptextToSecond {
    font-size: 1.2em;
    line-height: 1.5;
    color: #04f800;
}
</style>