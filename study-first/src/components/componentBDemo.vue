<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ data1 }}</p>
        <h3>组件事件</h3>
        <button @click="handleClick1">$emit传递数据给componentA</button>
        <h3>B组件事件配合v-model</h3>
        搜索:<input type="text" v-model="searchData" />
        <p>搜索结果: {{ searchData }}</p>
        <p>{{ onEvent('event from componentB') }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello from the componentB',
            dataMsg: "data from componentB",
            searchData: "",
        }
    },
    props: { 'data1': { type: String }, onEvent: { type: Function } },
    methods: {
        handleClick1() {
            this.$emit('someEvent', this.dataMsg);
        }
    },
    watch: {
        searchData(newVal, oldVal) {
            console.log(`Message changed: ${oldVal} => ${newVal}`);
            this.$emit('searchDataEvent', newVal);
        }
    }
}   
</script>