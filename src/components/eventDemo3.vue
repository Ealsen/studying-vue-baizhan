<script>
    export default {
        data() {
            return {
                count : 0,
            }
        },
        methods: {
            countUp(e) {
                e.target.innerHTML = "Add: " + this.count;
                this.count++;
            },
            countDown() {
                this.count--;
            },
            makeInfo(msg) {
                console.log(msg);
            }
        }
    }
</script>

<template>
    <h3>event3</h3>
    <div>    
    <button v-on:click="countUp">count++</button>
    <button @click="countDown">count--</button>
    <p>Count: {{ count }}</p>
    </div>
    <div>
    <button @click="makeInfo('User clicked!')">Make Info</button>
    </div>
</template>