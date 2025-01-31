<template>
    <div>
        <p>{{ message }}</p>
        <p>{{ data1 }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: 'Hello from the componentB'
        }
    },
    props: { 'data1': { type: String }, },
}
</script>