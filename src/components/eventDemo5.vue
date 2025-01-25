<script>
export default {
  data() {
    return {
      message: "Hello",
      list_name: ["apple", "banana", "orange"],
    };
  },
  methods: {
    handleClick(event) {
      console.log(event.target.value);
      this.message = event.target.value;
    },
    printEventItem(item_msg,e) {
        console.log(item_msg);
        console.log(e);
    }
  },
};
</script>

<template>
  <h3>事件传参</h3>
  <div>
    <p @click="printEventItem(item,$event)" v-for="(item, index) in list_name" :key="index"> {{ item }} </p>
  </div>
</template>
