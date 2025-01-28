<script>
export default {
    data() {
        return {
            name: 'eventDemo6',
        }
    },
    methods: {
        handleClick(event) {
            console.log(event);
        },
        clickHandle(e) {
            // e.preventDefault(); // 阻止默认事件
            console.log('click handle');
        },
        clickDiv() {
            console.log('click div');
        },
        clickP(e) {
            e.stopPropagation(); // 阻止冒泡
            console.log('click p');
        }
    }
}

</script>

<template>
    <div>
        <h3>事件修饰符</h3>
        <a @click.prevent="clickHandle" href="https://www.baidu.com" @click.stop="handleClick">百度</a>
    </div>
    <div>
        <h3>测试冒泡</h3>
        <div @click="clickDiv">
            <p @click.stop="clickP">点击我，我会阻止冒泡</p>
        </div>
    </div>
</template>
