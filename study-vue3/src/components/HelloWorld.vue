<template>
    <div class="hello">
        <h1>Vue3</h1>
        <p>{{ msg1 }}</p>
        <p v-for="(item, index) in object_data_11.fruitsList" :key="index">{{ item }}</p>
        <p @click="handleClick" v-if="show">{{ msg2 }}</p>
        <div v-else class="hide">
            <p @click="handleClick">{{ msg2 }}</p>
        </div>
        <p>Form App Data:{{ msg }}</p>
        <p>Data from Parent:{{ dataFromParent }}</p>

        // Element-Plus
        // https://element-plus.org/zh-CN/

        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
        <el-button type="text">Text</el-button>
        <el-button plain>Plain</el-button>
        <el-button round>Round</el-button>
        <el-button circle>Circle</el-button>
        <el-button icon="el-icon-search">Search</el-button>
        <el-icon class="expand" color="#409EFC" :size="30">
            <expand />
        </el-icon>

        <el-icon color="#409EFC" class="no-inherit">
            <Edit />
        </el-icon>

        <el-icon color="#409EFC" class="custom-icon-5"></el-icon>

        <el-icon class="expand" color="#409EFC" :size="30">
            <expand />
        </el-icon>

    </div>
</template>

<script>
import { ref, reactive, onMounted, onBeforeMount, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, onErrorCaptured, inject } from 'vue';
import { ElButton, ElIcon } from 'element-plus';

import { Edit } from '@element-plus/icons-vue';




export default {
    name: "HelloWorld",
    // Vue3 props
    props: {
        msg: String
    },
    // setup中没有this指向实例
    setup(props, context) {
        const msg1 = ref('Hello Vue3!');
        const msg2 = ref('Click me!');
        const show = ref(true);

        const handleClick = () => {
            show.value = !show.value;
        };

        const object_data_11 = reactive({
            fruitsList: ["apple", "banana", "orange"]
        });

        const msg = props.msg;

        const dataFromParent = inject('dataFromParent');

        // setup中的生命周期函数
        onBeforeMount(() => {
            console.log('beforeMount');
        });

        onMounted(() => {
            console.log('onMounted');
            console.log(context);
            console.log(dataFromParent);
        });

        onBeforeUpdate(() => {
            console.log('beforeUpdate');
        });

        onUpdated(() => {
            console.log('updated');
        });

        onBeforeUnmount(() => {
            console.log('beforeUnmount');
        });

        onUnmounted(() => {
            console.log('unmounted');
        });



        return {
            msg1,
            object_data_11,
            show,
            handleClick,
            msg2,
            msg,
            dataFromParent,
        };
    }
};
</script>

<style scoped>
.hide {
    width: 100px;
    height: auto;
    border: black 1px solid;
    background-color: blueviolet;
    border-radius: 30px;
    text-align: center;
}
</style>
