<template>
    <div>
        <h3>模板引用</h3>
        <div ref="myDiv" class="myDiv">
            我是div
        </div>
        <input type="text" ref="myInput" class="myInput">
        <button @click="getRefDom">获取元素</button>
        <button @click="changeRefDomInnerHTML">修改内容</button>
    </div>
</template>

<script>
export default {
    data() { },
    methods: {
        getRefDom() {
            console.log(this.$refs.myDiv);
            console.log(this.$refs.myInput.value);
        },
        changeRefDomInnerHTML() {
            this.$refs.myDiv.innerHTML = "我是修改后的内容";
        }
    }
}
</script>