<script>
    export default {
        print() {
            alert(this.message);
        },
        data() {
            return {
                count : 0,
            }
        }
    }
</script>

<template>
    <h3>内联事件处理器</h3>
    <button v-on:click="count++">count++</button>
    <button @click="count--">count--</button>
    <p>Count: {{ count }}</p>
</template>