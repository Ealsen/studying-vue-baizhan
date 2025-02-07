// import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import elementIcon from "./plugins/icons";


const app = createApp(App)

app.use(ElementPlus)
app.use(elementIcon)
app.use(router)

app.mount('#app')
