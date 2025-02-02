<template>
    <div class="d2s">
        <h4>This is d2 component</h4>
        <p>{{ msg }}</p>
        <p>app的money: {{ money }}</p>
        <p>app的moneyCount: {{ moneyCount }}</p>
        <p>app的bigHouse: {{ houserBig1 }}</p>
        <p>app的smallHouse: {{ houserSmall1 }}</p>
        <p>全局数据展示:{{ golbalData }}</p>
    </div>

</template>

<script>
export default {
    inject: ["moneyCount", "houserBig1", "houserSmall1", 'golbalData'],
    name: 'd2'
    , data() {
        return {
            msg: 'Hello from d2 component',
            houserSmall1: this.houserSmall1,
            golbalData: this.golbalData,
        }
    },
    props: {
        money: {
            type: Number,
        }
    }
}
</script>