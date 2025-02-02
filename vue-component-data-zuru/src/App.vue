<template>
    <div id="app">
        <h3>{{ msg }}</h3>
        <p>{{ title1 }}</p>
        <p>全局数据展示:{{ golbalData }}</p>
    </div>
    <d1 :money="money"></d1>
    <!-- <d2></d2>
    <d3></d3> -->
</template>
<script>
import d1 from './components/d1.vue'
// import d2 from './components/d2.vue'
// import d3 from './components/d3.vue'


export default {
    inject: ['golbalData'],
    data() {
        return {
            msg: '依赖注入',
            money: 10000,
            title1: '这是app组件',
            houserBig: '这是房子',
            houserSmall: '这是小房子',
            golbalData: this.golbalData,
        }
    },

    provide() {
        return {
            moneyCount: "财产",
            houserBig1: this.houserBig,
            houserSmall1: this.houserSmall,
        }
    },
    name: 'App',

    components: {
        d1,
        // d2,
        // d3,
    }
}   
</script>

<style>
#app,
.d1s,
.d2s {
    border: 1px solid red;
}
</style>