<template>
    <div class="slotsTwo">
        <h3>插槽续集（具名插槽和父组件传递内容在插槽中使用）</h3>
        <slot name="header">默认插槽内容</slot>
        <span class="slotMiddle">我是插槽中间的内容</span>
        <slot name="footer">默认插槽内容</slot>
        <slot>默认插槽内容</slot>
    </div>
</template>

<script>

</script>

<style scoped>
.slotMiddle {
    color: rgb(95, 0, 247);
    margin: 0px 0px 0px 0px;
    font-size: 18px;
    font-weight: bold;
}
</style>