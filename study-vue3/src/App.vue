<script>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    components: {
        RouterLink,
        RouterView,
        HelloWorld,
    },
    setup() {

        const msg = ref('Hello Vue 3!')

        const object_data_1 = reactive({
            fruitsList: ["apple", "banana", "orange"]
        })

        const dataFromParent = provide('dataFromParent', "I am data from parent")

        return {
            msg,
            object_data_1,
            dataFromParent,
        }
    },
}
</script>

<template>
    <div class="App">
        <h1>Hello World</h1>
        <h3>{{ msg }}</h3>
        <HelloWorld msg="I from the App component!" />
        <RouterView />
    </div>
</template>

<style scoped>
.App {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}
</style>
