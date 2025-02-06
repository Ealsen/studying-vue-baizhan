// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// import querystring from 'querystring';

// 全局引入 axios 配置1
import axios from 'axios'

const app = createApp(App)

// 全局引入 axios 配置2
app.config.globalProperties.$axios = axios

// 引入路由
import router from './router'
app.use(router)

// 引入 vuex
import store from './store/index'
app.use(store)

app.mount('#app')

// // 在组件中调用全局路由
// this.$axios