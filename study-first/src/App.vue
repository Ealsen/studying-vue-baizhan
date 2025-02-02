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
    <slotsAttr>
        <hr>
        <template #header="slotPort1">
            <p>{{ msgSlotAttr1 }} |<->| {{ slotPort1.transferMsg }}</p>
        </template>
        <template #main="slotPort2">
            <p class="slotsAttrFuP">具名插槽接受子级传递的内容</p>
            <p>{{ msgSlotAttr1 }} |<->| {{ slotPort2.transferMsg2 }}</p>
        </template>
    </slotsAttr>
    <componentLife />
    <componentLifeUser />
    <div class="dynamicComponents">
        <h3>动态组件</h3>
        <!-- 对动态组件进行保活 -->
        <keep-alive>
            <component :is="componentId"></component>
        </keep-alive>
        <button @click="changeComponent">切换组件</button>
    </div>

</template>

<script>
import { defineComponent } from 'vue'
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
import slotsAttr from './components/slotsAttr.vue'
import componentLife from './components/componentLife.vue'
import componentLifeUser from './components/componentLifeUser.vue'
import dynamicComponentsA from './components/dynamicComponentsA.vue'
import dynamicComponentsB from './components/dynamicComponentsB.vue'

// // 异步加载组件
// const AsyncComponentB = defineComponent(() => import('./components/dynamicComponentsB.vue'))

// 异步加载组件有点小问题,不能正常加载,暂时注释掉,可以单独建立项目测试

export default {
    components: {
        HelloWorld,
        ifDemo,
        itemDemo,
        keyDemo,
        eventDemo1,
        eventDemo2,
        eventDemo3,
        eventDemo5,
        eventDemo6,
        arrayList,
        computeDemo,
        classDemo,
        styleDemo,
        watchDemo,
        modelDemo,
        refDemo,
        parentDemo,
        componentADemo,
        attributesDemo,
        slotsBase,
        slotsTwo,
        slotsAttr,
        componentLife,
        componentLifeUser,
        dynamicComponentsA,
        dynamicComponentsB,
        // AsyncComponentB,

    },
    setup() {
        const componentId = ref('dynamicComponentsA')


        const msgSlotAttr1 = ref("父级插槽传递的内容msgSlotAttr1")
        const messageSlotTwoFu = ref("我是插槽传递的内容messageSlotTwoFu")

        const changeComponent = () => {
            if (componentId.value === 'dynamicComponentsA') {
                componentId.value = 'dynamicComponentsB'
            } else {
                componentId.value = 'dynamicComponentsA'
            }
        }



        return {
            componentId,

            msgSlotAttr1,
            messageSlotTwoFu,
            changeComponent,

        }
    },
}
</script>

<style scoped>
.slotsBaseFu {
    margin: auto;
    border: 1px solid rgb(61, 0, 0);
    /* color: red; */
}

.slotsAttrFuP {
    color: rgb(36, 238, 9);
    font-size: 30px;
}

.dynamicComponents {
    margin: auto;
    border: 1px solid rgb(61, 0, 0);
}
</style>
