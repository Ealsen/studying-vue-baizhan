<script>
import myComponent from './myComponent.vue'
import importThree from './importThree.vue';
import testComponentVue from './testComponent.vue';
import toDoList from './toDoList.vue';

export default {
    // 写出八个生命周期函数
    // 生命周期函数的执行顺序
    // beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeUnmount -> unmounted
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        console.log('created')
    },
    beforeMount() {
        console.log('beforeMount')
    },
    mounted() {
        console.log('mounted')
    },
    beforeUpdate() {
        console.log('beforeUpdate')
    },
    updated() {
        console.log('updated')
    },
    beforeUnmount() {
        console.log('beforeUnmount');
    },
    unmounted() {
        console.log('unmounted');
    },
    // 写出三个自定义事件
    name: 'HelloWorld',
    components: {
        myComponent,
        importThree,
        testComponentVue,
        toDoList,
    },
    data() {
        return {
            h1_msg: '模板语法',
            mess: 'Hello World',
            number1: 10,
            linkaBing: "<a href='https://www.bing.com' target='_blank'>Bing</a>",
            dynamicId: '123',
            isFlag: true,
            h2_msg: '条件渲染',
            h3_msg: '列表渲染',
            newsList1: [{ title: '新闻1', content: '内容1' },
            { title: '新闻2', content: '内容2' },
            { title: '新闻3', content: '内容3' }],
            h4_msg: '事件处理',
            btnCount: 0,
            messageObject1: {
                name: '小美',
                message: "有空吗？",
            },
            visualMess1: '',
            messageObject2: {
                name: '小明',
                message: "",
            },
            visualMess2: '',

            h5_msg: '表单绑定',

            doubleDataBand1: "",

            messToSecond: "我是来自firstVueComponent的消息",
            ageToSecond: 20,
            arrayToSecond: [1, 2, 3, 4, 5],
            objectToSecond: { name: "小美", age: 20 },
            dataFromSecondMessage: "",

            h6_msg: '生命周期函数',
            lifeCycleMsg: "beforeCreate -> created -> beforeMount -> mounted -> beforeUpdate -> updated -> beforeUnmount -> unmounted",
        }
    },
    methods: {
        alertHandlerHello() {
            alert('Hello Vue!')
        },
        backMessageHandler(event) {
            this.messageObject1.name = ""
            this.messageObject1.message = ""
            // alert("消息已撤回")
            this.visualMess1 = "消息已撤回"
            console.log(event)
            event.target.innerHTML = "消息撤回之后"
        },
        sendMessageHandler(MessageText) {
            this.messageObject2.message = MessageText
            this.visualMess2 = "消息已发送"
            console.log(MessageText)
        },
        getSousuoResultHandler() {
            window.open("https://www.baidu.com/s?wd=" + this.doubleDataBand1, "_blank")
            console.log("搜索的内容为：" + this.doubleDataBand1)
        },
        getDataFromSecond(dataFromSecond) {
            this.dataFromSecond = dataFromSecond
            console.log("来自secondVueComponent的数据：" + dataFromSecond)
            this.dataFromSecondMessage = dataFromSecond
        },
    },
}

</script>

<template>
    <div class="firstVueComponent">
        <h1>{{ h1_msg }}</h1>
        <p>{{ mess }}</p>
        <span v-html="linkaBing"></span>
        <br>
        <p v-bind:id="dynamicId">{{ dynamicId }}</p>
        <p>number1 * 2 = {{ number1 * 2 }}</p>

        <h1>{{ h2_msg }}</h1>
        <p v-if="isFlag">Ture</p>
        <p v-else>False</p>

        <p v-show="isFlag">Show Ture</p>
        <p v-show="!isFlag">Show False</p>

        <h1>{{ h3_msg }}</h1>
        <ul>
            <li v-for="(item, index) in newsList1" :key="index">{{ item.title }} - {{ item.content }}</li>
        </ul>

        <h1>{{ h4_msg }}</h1>
        <button @click="btnCount++">{{ btnCount }}</button>
        <button @click="alertHandlerHello">HelloVueBtn</button>
        <div class="messageBox1"> {{ messageObject1.name }}
            <span v-if="messageObject1.message">：</span>
            {{ messageObject1.message }} <br> {{
                visualMess1 }}
        </div>
        <button @click="backMessageHandler">撤回消息</button>

        <div class="messageBox2"> {{ messageObject2.name }}
            <span v-if="messageObject2.message">：</span>
            {{ messageObject2.message }} <br> {{
                visualMess2 }}
            <input type="text" v-model="messageObject2.message">
            <button @click="sendMessageHandler(messageObject2.message)">发送消息</button>
        </div>

        <h1>{{ h5_msg }}</h1>
        <input type="text" v-model="doubleDataBand1">
        <!-- 可加入 v-model.lazy 懒惰绑定 .trim 去除空格 -->
        <p class="souSuobox1">搜索：{{ doubleDataBand1 }}</p>
        <button @click="getSousuoResultHandler">百度一下</button>

        <h1>{{ h6_msg }}</h1>
        <p v-if="lifeCycleMsg">生命周期函数执行顺序：{{ lifeCycleMsg }}</p>

    </div>
    <my-component :messToSecond="messToSecond" :ageToSecond="ageToSecond" :arrayToSecond="arrayToSecond"
        :objectToSecond="objectToSecond" @dataFromSecond="getDataFromSecond"></my-component>

    <p class="souSuobox1" v-if="dataFromSecondMessage">子组件数据：{{ dataFromSecondMessage }}</p>

    <import-three></import-three>

    <testComponentVue></testComponentVue>

    <to-do-list></to-do-list>
</template>

<style scoped>
.firstVueComponent {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}

.messageBox1 {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 16px;
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: #0116f8;
    border: #f80101 2px solid;
    width: 30%;
}

.messageBox2 {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: #0116f8;
    border: #f80101 2px solid;
    width: 30%;
}

.souSuobox1 {
    background-color: #ffffff;
    padding: 10px;
    border-radius: 8px;
    margin-top: 10px;
    font-size: 1.2em;
    font-weight: bold;
    color: #0116f8;
    border: #f80101 2px solid;
    width: 30%;
}
</style>