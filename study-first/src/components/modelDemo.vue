<template>
    <div>
        <h3>表单输入绑定</h3>
        <form>
            <input type="text" v-model="inputValue">
            <p :style="objStyle">输入的值为：{{ inputValue }}</p>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">{{ checked }}</label>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            inputValue: '',
            objStyle: {
                color: 'blue',
                fontSize: '18px',
                fontWeight: 'bold',

            },
            checked: false,
        }
    },
    watch: {
        inputValue(newVal, oldVal) {
            console.log('newVal:', newVal, '<=', 'oldVal:', oldVal)
        },
        checked(newVal, oldVal) {
            console.log('newVal:', newVal, '<=', 'oldVal:', oldVal)
        },
    }
}
</script>