import { createStore } from 'vuex'
import axios from 'axios';


const store = createStore({
    // state is the data of the application
    state: {
        counter: 920,
    },
    // getters are functions that return a value from the state
    getters: {
        isThan1000Bigger(state) {
            return state.counter >= 1000 ? state.counter : "Error: counter is less than 1000."
        }
    },
    // mutations are functions that modify the state
    mutations: {
        addCounter(state, payload = 1) {
            state.counter += payload
        },
    },
    // actions are functions that can trigger mutations
    actions: {
        asyncAddCounter({ commit }) {
            // use axios to make an asynchronous request to an API
            // http://iwenwiki.com/api/generator/list.php 
            axios.get("http://127.0.0.1:3111/arraydata")
                .then(res => {
                    commit('addCounter', res.data[0])
                })
        },
    },
})

export default store








/* 

// server.js
// http://127.0.0.1:3111/arraydata
// 模拟一个服务器，返回一个数组数据

const express = require('express');
const cors = require('cors'); // 引入 cors 中间件

const app = express();
const port = 3111;

// 使用 cors 中间件
app.use(cors());

// 假设我们要返回的数组数据
const arrayData = [1, 2, 3, 4, 5];

// 定义一个路由来处理对 / 的 GET 请求
app.get('/', (req, res) => {
    res.send('欢迎访问服务器！要获取数组数据，请访问 /arraydata');
    // http://127.0.0.1:3111/arraydata
});

// 定义一个路由来处理对 /arraydata 的 GET 请求
app.get('/arraydata', (req, res) => {
    res.json(arrayData);
});

// 启动服务器
app.listen(port, '0.0.0.0', () => {
    console.log(`服务器正在运行在 http://127.0.0.1:${port}`);
});

*/