// index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../view/HomeView.vue'
import AboutView from '../view/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        //重定向到aboutus页面
        redirect: '/about/aboutus',
        component: AboutView,
        // 子路由
        children: [
            {
                // 子路由 不要加 /
                path: 'aboutus',
                name: 'aboutus',
                component: () => import('../view/aboutPage/AboutUs.vue')
            },
            {
                path: 'aboutinfo',
                name: 'aboutinfo',
                component: () => import('../view/aboutPage/AboutInfo.vue')
                // 三级路由
                // children: [
                //     {
                //         path: 'child',
                //         name: 'child',
                //         component: () => import('../view/aboutPage/AboutInfoChild.vue')
                //     }
                // ]
            }
        ],
    },
    {
        path: '/news',
        name: 'news',
        // 异步加载组件
        component: () => import('../view/NewsView.vue')
    },
    {
        path: '/news/newsdetail/:name',
        name: 'newsDetail',
        component: () => import('../view/NewsDetilsView.vue')
    }

]

/**
 * createWebHashHistory 与 createWebHistory 区别：
 * createWebHashHistory 使用 hash 路由，适合不支持 HTML5 History API 的浏览器，如 IE9；
 * createWebHistory 使用 HTML5 History API，适合现代浏览器；
 * 两者的区别在于，createWebHashHistory 路由的路径前面有 #，如 http://localhost:8080/#/about；
 * createWebHistory 路由的路径前面没有 #，如 http://localhost:8080/about；
 * 两者的使用场景也不同，createWebHashHistory 适合不支持 HTML5 History API 的浏览器，如 IE9；
 * createWebHistory 适合现代浏览器，可以利用 HTML5 History API 实现前进、后退等功能。
 * 总的来说，两者的区别在于适用场景和路由的路径前缀，选择适合自己的路由模式即可。
 */


const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router