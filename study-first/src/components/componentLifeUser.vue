<template>
    <div>
        <h3>生命周期函数的应用</h3>
        <p ref="myptest">You can find me.</p>
        <li v-for="(item, index) in resultForNetWork" :key="index">
            <h5>{{ item.title }}:</h5>
            <p>{{ item.content }}</p>
        </li>
    </div>
</template>


<script>
export default {
    data() {
        return {
            resultForNetWork: [],
        }
    },
    created() {
        // 模拟网络请求得到数据
        this.resultForNetWork = [];
    },
    mounted() {
        // 组件渲染完成后，打印 ref 元素
        console.log(this.$refs.myptest)

        // 模拟网络请求得到数据
        this.resultForNetWork = [
            {
                title: "Vue 3.0 新特性",
                content: "Vue 3.0 引入了 Composition API，使得代码更具可读性和复用性。"
            },
            {
                title: "JavaScript 异步编程",
                content: "JavaScript 中的异步编程可以通过回调、Promise 或 async/await 来实现。"
            },
            {
                title: "CSS Grid 布局",
                content: "CSS Grid 布局允许开发者设计复杂的二维网格布局，轻松控制行和列。"
            },
            {
                title: "Node.js 性能优化",
                content: "Node.js 性能优化可以通过集群模式、缓存以及异步 I/O 操作来提升应用的效率。"
            },
            {
                title: "RESTful API 与 GraphQL 比较",
                content: "RESTful API 使用 URL 来表示资源，而 GraphQL 则允许客户端灵活查询所需的数据。"
            }
        ];
    },

}
</script>