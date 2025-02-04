<template>
    <div class="swiper3">
        <h1>{{ title1 }}</h1>
        <p class="textClass1">图片轮播组件</p>
        <swiper :options="swiperOptions" :modules="modules" :pagination="{ clickable: true }">
            <swiper-slide><img src="../assets/111.jpg" alt="" height="200px" width="200px"></swiper-slide>
            <swiper-slide><img src="../assets/222.jpg" alt="" height="200px" width="200px"></swiper-slide>
            <swiper-slide><img src="../assets/333.jpg" alt="" height="200px" width="200px"></swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    data() {
        return {
            title1: '引入第三方组件-图片轮播',
            modules: [Pagination],
            swiperOptions: {
                // 配置 Swiper 的选项
                slidesPerView: 3,
                spaceBetween: 30,
                pagination: {
                    clickable: true
                },
                loop: true,
            },
        };
    }
};
</script>

<style scoped>
.swiper3 {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}

.textClass1 {
    font-size: 1.2em;
    line-height: 1.5;
    color: #04f800;
}

/* 确保 Swiper 容器有正确的样式 */
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide img {
    display: block;
    width: 200px;
    height: 200px;
    object-fit: cover;
}
</style>
