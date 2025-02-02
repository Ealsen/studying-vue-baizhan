<script setup>
// script setup 带有setup语法的script标签
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import ifDemo from './components/ifDemo.vue'
import itemDemo from './components/itemDemo.vue'
import keyDemo from './components/keyDemo.vue'
import eventDemo1 from './components/eventDemo1.vue'
import eventDemo2 from './components/eventDemo2.vue'
import eventDemo3 from './components/eventDemo3.vue'
import eventDemo5 from './components/eventDemo5.vue'
import eventDemo6 from './components/eventDemo6.vue'
import arrayList from './components/arrayList.vue'
import computeDemo from './components/computeDemo.vue'
import classDemo from './components/classDemo.vue'
import styleDemo from './components/styleDemo.vue'
import watchDemo from './components/watchDemo.vue'
import modelDemo from './components/modelDemo.vue'
import refDemo from './components/refDemo.vue'
import parentDemo from './components/parentDemo.vue'
import componentADemo from './components/componentADemo.vue'
import attributesDemo from './components/attributesDemo.vue'
import slotsBase from './components/slotsBase.vue'
import slotsTwo from './components/slotsTwo.vue'
// 定义 messageSlotTwoFu 变量
const messageSlotTwoFu = ref("我是插槽传递的内容messageSlotTwoFu");

</script>

<template>
    <HelloWorld />
    <ifDemo />
    <itemDemo />
    <keyDemo />
    <eventDemo1 />
    <eventDemo2 />
    <eventDemo3 />
    <eventDemo5 />
    <eventDemo6 />
    <arrayList />
    <computeDemo />
    <classDemo />
    <styleDemo />
    <watchDemo />
    <modelDemo />
    <refDemo />
    <parentDemo />
    <componentADemo />
    <attributesDemo class="attributesDemo" />
    <slotsBase>
        <div class="slotsBaseFu">
            <h4>插槽模板</h4>
            <h4>插槽模板</h4>
            <h4>插槽模板</h4>
        </div>
    </slotsBase>
    <slotsTwo>
        <template v-slot:header>
            <h4>header</h4>
        </template>
        <template #footer>
            <!-- #xxx 为 v-slot:xxx缩写 -->
            <h4>footer</h4>
        </template>
        <h4>插槽模板2</h4>
        <h4>{{ messageSlotTwoFu }}</h4>
    </slotsTwo>
</template>


<style scoped>
.slotsBaseFu {
    margin: auto;
    border: 1px solid rgb(61, 0, 0);
    /* color: red; */
}

.slotsTwoFu {
    margin: auto;
    border: 1px solid rgb(61, 0, 0);
    /* color: red; */
}
</style>