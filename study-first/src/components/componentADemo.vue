<template>
    <div>
        <h3>组件传递Props校验</h3>
        <p>{{ message }}</p>
        <componentBDemo :data1="data1" />
    </div>
</template>

<script>
import componentBDemo from './componentBDemo.vue';

export default {
    data() {
        return {
            message: 'Hello from the componentA',
            data1: 'A data1',
        }
    },
    components: {
        componentBDemo,
    }
}
</script>