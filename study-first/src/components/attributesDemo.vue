<template>
    <div>
        <!-- 透传属性 必须是唯一根元素，才会生效 -->
        <h3>透传属性</h3>
        <span>{{ text1 }}</span>
    </div>
</template>

<script>
export default {
    inheritAttrs: true, // 开启继承属性,可以更改使透传属性不生效
    data() {
        return {
            text1: '在app.vue中定义的属性class="attributesDemo"被透传到了这里',
        }
    },
}
</script>

<style>
.attributesDemo {
    color: red;
}
</style>