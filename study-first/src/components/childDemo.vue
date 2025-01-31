<template>
    <div>
        <h3>{{ message }}</h3>
        <p>{{ title }}</p>
        <p>{{ demo }}</p>
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
    props: ['title', 'demo'],
}
</script>