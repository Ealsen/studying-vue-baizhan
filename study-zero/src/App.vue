<template>

    <HelloWorld />

</template>

<script>

import HelloWorld from './components/HelloWorld.vue';

export default {
    components: {
        HelloWorld
    },
    data() {
        return {
            message: "Welcome to Vue.js!",
            link: "<a href='https://www.bing.com/'>bing</a>",
            data1: "testid1",
        }
    }
}

</script>

<style scoped>
/* header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */

/* .big-body {
    border: #161294 1px solid;
}

.message-box {
    border: #941212 1px solid;
}

.test-visible {
    border: #129494 1px solid;
}

.text-hello {
    font-size: 5rem;
}

#testid1 {
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 40px;
} */
</style>
