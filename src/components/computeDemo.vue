<script>
export default {

    data() {
        return {
            name: '计算属性',
            itbaizhan: {
                array1: [1, 2, 3, 4, 5],
                array2: [],
                array3: [1, 2, 3, 4, 5],
                array4: [],
            },
        }
    },
    methods: {
        add() {
            this.result = this.num1 + this.num2;
        },
        sub() {
            this.result = this.num1 - this.num2;
        },
        mul() {
            this.result = this.num1 * this.num2;
        },
        div() {
            this.result = this.num1 / this.num2;
        }
    },
    computed: {
        itbaizhanContent1() {
            return this.itbaizhan.array1.length > 0 ? '有数据' : '没有数据';
        },
        itbaizhanContent2() {
            return this.itbaizhan.array2.length > 0 ? '有数据' : '没有数据';
        }
    },
}
</script>

<template>
    <div>
        <h3>{{ name }}</h3>
        <p>itbaizhan的数组1里面是否有数据:{{ itbaizhanContent1 }}</p>
        <p>itbaizhan的数组2里面是否有数据:{{ itbaizhanContent2 }}</p>
    </div>
</template>