<script>
export default {
  data() {
    return {
      list_obj: [
        { id: 1, name: 'apple' },
        { id: 2, name: 'banana' },
        { id: 3, name: 'orange' },
        { id: 4, name: 'grape' },
        { id: 5, name: 'pear' },
      ],
    };
  },
};
</script>

<template>
<h3>通过key管理状态</h3>
<ul>
  <li v-for="(item, index) in list_obj" :key="item.id">{{ item.name }}</li>
</ul>
</template>