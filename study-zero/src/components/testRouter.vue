<template>
    <div class="test-router">
        <h1>引入路由</h1>
        <nav>
            <router-link to="/">Home</router-link>|
            <router-link to="/about">About</router-link> |
            <router-link to="/news">News</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name: "testRouter",
};
</script>

<style scoped>
.test-router {
    border: black 1px solid;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 5px;
    margin: 30px auto;
}
</style>