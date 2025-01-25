<script>
export default {
    data() {
        return {
            isShow: false,
            countNum: 0,
            whatLetter: 'D',
        }
    }
}
</script>

<template>
    <h3>条件渲染</h3>
    <div>
        <p v-if="isShow">Look Me</p>
        <p v-else>Hide Me</p>
        <button @click="isShow = !isShow">ShowMe</button>
        <p>CountNum: {{ countNum }}</p>
        <button @click="countNum++">CountNum++</button>
        <p>WhatLetter: {{ whatLetter }}</p>
        <p v-if="whatLetter === 'A'">This is A</p>
        <p v-else-if="whatLetter === 'B'">This is B</p>
        <p v-else-if="whatLetter === 'C'">This is C</p>
        <p v-else>This is not A, B, or C; it's {{ whatLetter }}</p>
        <button @click="whatLetter = whatLetter === 'D' ? 'A' : 
                whatLetter === 'A' ? 'B' : whatLetter === 'B' ? 'C' : 'D'">ChangeLetter</button>
        <p v-show="isShow">You can see me.</p>
    </div>
</template>