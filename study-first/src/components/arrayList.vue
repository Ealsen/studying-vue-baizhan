<script>
export default {
    data() {
        return {
            fullList: ["apple", "banana", "orange", "grape", "pear"],
            elementName: "watermelon",
            elementName2: "pineapple",
            testArray1: [1, 2, 3],
            testArray2: [4, 5, 6],
        };
    },
    methods: {
        fullListPushHandle(elementName) {
            this.fullList.push(elementName);
        },
        fullListConcatHandle(elementName2) {
            this.fullList = this.fullList.concat(elementName2);
        },
        arrayConcatHandle() {
            this.testArray1 = this.testArray1.concat(this.testArray2);
        },
    },
};
</script>

<template>
    <div>
        <h3>数组变化侦测</h3>
        <p v-for="(item, index) in fullList" :key="index">{{ item }}</p>
        <h4>数组1</h4>
        <p v-for="(item, index) in testArray1" :key="index">{{ item }}</p>
        <h4>数组2</h4>
        <p v-for="(item, index) in testArray2" :key="index">{{ item }}</p>
        <button @click="fullListPushHandle(elementName)">测试1添加到数组</button>
        <button @click="fullListConcatHandle(elementName2)">测试2合并数组</button>
        <button @click="arrayConcatHandle()">测试3数组2合并到数组1</button>
    </div>
</template>
