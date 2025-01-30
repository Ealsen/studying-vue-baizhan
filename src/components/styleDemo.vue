<template>
    <div>
        <h3>Style属性绑定</h3>
        <p :style="{ color: activeColor, fontSize: activeFontSize }">这是一个蓝色的字体</p>
        <p :style="objStyle">这是一个红色放大的字体</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeColor: 'blue',
            activeFontSize: '16px',
            objStyle: {
                color: 'red',
                fontSize: '30px',
            }
        }
    }
}
</script>

<style></style>