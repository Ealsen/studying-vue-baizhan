<template>
    <div>
        <h3>Class属性绑定</h3>
        <p :class="{ 'bigfont': isVisible, 'textdanger': isDanger }">
            这是一个class属性绑定示例1
        </p>
        <button @click="isVisible = !isVisible">显示放大字体/隐藏</button>
        <button @click="isDanger = !isDanger">显示红色/显示默认</button>
        <p :class="objbutton">
            这是一个对象形式的class绑定示例2
        </p>
        <p :class="[arrBigfont, arrTextdanger]">
            class绑定示例3
        </p>

    </div>
</template>

<script>
export default {
    data() {
        return {
            isVisible: true,
            isDanger: false,
            objbutton: {
                bigfont: true,
                textdanger: true,
            },
            arrBigfont: "bigfont",
            arrTextdanger: "textdanger",
        }
    },
}
</script>


<style>
.bigfont {
    font-size: 30px;
}

.textdanger {
    color: red;
}

.class1 {
    color: rgb(234, 11, 148);
}

.class2 {
    color: green;
}
</style>