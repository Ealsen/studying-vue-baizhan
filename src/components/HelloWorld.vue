<script>

export default {
    data() {
        return {
            msg: 'hello',
            message: 'Hello World!',
            msg1: 'textLong',
            isButtonDisabled: true,
            objHello: {
                id: 'John',
                class: 'blue'
            }
        }
    },

}
</script>

<template>
    <h3>属性绑定</h3>
    <div v-bind="hello">
        <h1>{{ message }}</h1>
    </div>

    <div v-bind:class="msg1">{{ msg1 }}
    </div>
    <button :disabled="isButtonDisabled">Button</button>
    <button @click="isButtonDisabled = !isButtonDisabled">SwitchDisabled</button>
    <div v-bind="objHello">H</div>
</template>

<style></style>