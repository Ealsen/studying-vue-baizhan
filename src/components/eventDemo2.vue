<script>
    export default {
        data() {
            return {
                count : 0,
            }
        },
        methods: {
            countUp() {
                this.count++;
            },
            countDown() {
                this.count--;
            }
        }
    }
</script>

<template>
    <h3>方法事件处理器</h3>
    <button v-on:click="countUp">count++</button>
    <button @click="countDown">count--</button>
    <p>Count: {{ count }}</p>
</template>