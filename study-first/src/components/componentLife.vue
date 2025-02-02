<template>
    <div>
        <h3>组件的生命周期</h3>
        <p>{{ msg1 }}</p>
        <button @click="updataMsg">更新msg1</button>
        <button @click="updataMsg2">更新2msg1</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg1: '组件的生命周期1'
        }
    },
    methods: {
        updataMsg() {
            this.msg1 = '组件的生命周期1更新'
        },
        updataMsg2() {
            this.msg1 = '组件的生命周期1'
        }
    },
    // 组件的生命周期钩子八个函数
    beforeCreate() {
        console.log('组件创建前')
    },
    created() {
        console.log('组件创建')
    },
    beforeMount() {
        console.log('组件挂载前')
    },
    mounted() {
        console.log('组件挂载')
    },
    beforeUpdate() {
        console.log('组件更新前')
    },
    updated() {
        console.log('组件更新')
    },
    beforeDestroy() {
        console.log('组件销毁前')
    },
    destroyed() {
        console.log('组件销毁')
    }
}

</script>