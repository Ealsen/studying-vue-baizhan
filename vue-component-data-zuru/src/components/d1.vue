<template>
    <div class="d1s">
        <h4>This is d1 component</h4>
        <p>{{ message }}</p>
        <p>全局数据展示:{{ golbalData }}</p>
        <hr>
        <d2 :money="money"></d2>
    </div>

</template>

<script>
import d2 from './d2.vue'
export default {
    inject: ['golbalData'],
    data() {
        return {
            message: 'Hello from d1 component',
            golbalData: this.golbalData,
        }
    },
    components: {
        d2,
    },
    props: {
        money: {
            type: Number,
        }
    }
}
</script>