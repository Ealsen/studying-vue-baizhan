<template>
    <div>
        <h3>侦听器</h3>
        <p>{{ message }}</p>
        <button @click="changeMessage">Change Message</button>
        <button @click="message = 'Hello Vue.js!'">Reset Message></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        changeMessage() {
            this.message = 'Goodbye Vue.js!'
        }
    },
    watch: {
        message(newVal, oldVal) {
            console.log(`Message changed: ${oldVal} => ${newVal}`)
        }
    }
}
</script>