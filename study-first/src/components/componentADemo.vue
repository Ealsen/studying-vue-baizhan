<template>
    <div>
        <h3>组件传递Props校验</h3>
        <p>{{ message }}</p>
        <componentBDemo :data1="data1" @someEvent="handleSomeEvent" @searchDataEvent="handleSearchDataEvent"
            :onEvent="dataFn" />
        <p>父元素：{{ emitData }}</p>
    </div>
    <div>
        <h3>A组件事件配合v-model</h3>
        <p>搜索结果: {{ emitSearchData }}</p>
    </div>
    <div>
        <h3>组件数据传递子传父Props</h3>
        <p>子组件传递给父组件的数据：{{ data3 }}</p>
    </div>
</template>

<script>
import componentBDemo from './componentBDemo.vue';

export default {
    data() {
        return {
            message: 'Hello from the componentA',
            data1: 'A data1',
            emitData: '',
            emitSearchData: '',
            data3: "",
        }
    },
    components: {
        componentBDemo,
    },
    methods: {
        handleSomeEvent(data) {
            console.log('handleSomeEvent', data);
            this.emitData = data;
        },
        handleSearchDataEvent(data1) {
            console.log('handleSearchDataEvent', data1);
            this.emitSearchData = data1;
        },
        dataFn(data3) {
            console.log('dataFn => ', data3);
            this.data3 = data3;
        },
    },

}
</script>