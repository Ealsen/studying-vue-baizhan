<template>
    <span style="color: brown;">动态组件1</span>
    <p>动态组件1的数据：{{ msg }}</p>
    <button @click="changeMsg">点击更新数据</button>
</template>

<script>
export default {
    data() {
        return {
            msg: '老数据',
        }
    },
    beforeUnmount() {
        console.log("动态组件1卸载前")
    },
    unmounted() {
        console.log("动态组件1卸载后")
    },
    methods: {
        changeMsg() {
            if (this.msg === '老数据') {
                this.msg = '新数据'
            } else {
                this.msg = '老数据'
            }
        }
    }
}
</script>