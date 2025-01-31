<script>
export default {
    data() {
        return {
            list_fruits: ['apple', 'banana', 'orange'],
            list_vegetables: ['carrot', 'broccoli', 'cucumber'],
            request_json: [
                {
                    "id": 2261677,
                    "title": "鄂尔多斯|感受一座城市的璀璨夜景 感受一座城市，除了白日里的车水马龙，喧",
                    "avatar": "https://pic.qyer.com/avatar/002/25/77/30/200?v=1560226451"
                },
                {
                    "id": 2261566,
                    "title": "成都这家洞穴暗黑风咖啡厅酷毙了!!早c晚A走起 成都天气这么热。 咖啡头人",
                    "avatar": "https://pic.qyer.com/avatar/011/07/08/69/200?v=1572185188"
                },
                {
                    "id": 2261662,
                    "title": "【川西新龙-措卡湖】措卡湖，意为“乱石从中的黑色海水”，神秘小众 原汁原味。",
                    "avatar": "https://pic.qyer.com/avatar/809/88/48/58/200?v=1507386782"
                }
            ],
            list_goods: ["apple", "banana", "orange", "carrot", "broccoli", "cucumber"],
            userInfos: [
                {
                    "id": 1,
                    "name": "张三",
                    "age": 20
                },
                {
                    "id": 2,
                    "name": "李四",
                    "age": 25
                },
                {
                    "id": 3,
                    "name": "王五",
                    "age": 30
                }
            ]
        }
    }
}
</script>

<template>
    <h3>列表渲染</h3>
    <p v-for="fruit in list_fruits">{{ fruit }}</p>
    <p v-for="vegetable in list_vegetables">{{ vegetable }}</p>
    <div v-for="item in request_json">
        <p>{{ item.title }}</p>
        <img :src="item.avatar" width="50px" height="50px" alt="picture">
    </div>
    <p v-for="(value, index) of list_goods" :key="index">{{ value }} -- {{ index }}</p>
    <div v-for="user of userInfos">{{ user.name }} -- {{ user.age }} </div>

</template>