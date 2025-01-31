<template>
    <div>
        <h3>{{ message }}</h3>
        <p>{{ title }}</p>
        <p>{{ demo }}</p>
        <p>{{ agedemo1 }}</p>
        <p v-for="(item, index) in arrayNum1" :key="index">{{ item }}</p>
        <p v-for="(value, key) in objectData1" :key="key">{{ key }}: {{ value }}</p>
    </div>
</template>

<script>
export default {
    name: 'ChildDemo',
    data() {
        return {
            message: 'Hello from the child component'
        }
    },
    props: ['title', 'demo', 'agedemo1', 'arrayNum1', 'objectData1'],
}
</script>