<template>
    <div>
        <h3>插槽再续集3</h3>
        <slot name="header" :transferMsg="transferMsg">默认插槽内容</slot>
        <hr>
        <slot name="main" :transferMsg2="transferMsg2">默认插槽内容</slot>

    </div>
</template>

<script>
export default {
    data() {
        return {
            transferMsg: '子级插槽传递的内容',
            transferMsg2: '子级插槽传递的内容2'
        }
    }
}
</script>