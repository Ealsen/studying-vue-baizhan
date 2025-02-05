<template>
    <div class="toDoList">
        <h1 class="h1-style">待办事项列表</h1>
        <div class="filters">
            <button @click="filterType = 'all'" :class="{ active: filterType === 'all' }">全部</button>
            <button @click="filterType = 'completed'" :class="{ active: filterType === 'completed' }">已完成</button>
            <button @click="filterType = 'pending'" :class="{ active: filterType === 'pending' }">未完成</button>
        </div>
        <ul>
            <li v-for="(todo, index) in filteredTodos" :key="index" :class="{ completed: todo.done }">
                <label class="checkbox-label">
                    <input type="checkbox" v-model="todo.done" class="checkbox-input">
                    <span class="checkbox-custom"></span>
                </label>
                <span class="todo-text">{{ todo.text }}</span>
                <button @click="removeTodo(index)" class="delete-btn">删除</button>
            </li>
        </ul>
        <div class="input-container">
            <input v-model="newTodo" @keyup.enter="addTodo" placeholder="添加新的待办事项" class="input-field">
            <button @click="addTodo" class="add-btn">添加</button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todos: [
                { text: '学习 Vue.js', done: false },
                { text: '完成项目', done: false },
                { text: '休息', done: true }
            ],
            newTodo: '',
            filterType: 'all' // 默认显示全部
        };
    },
    computed: {
        filteredTodos() {
            if (this.filterType === 'all') {
                return this.todos;
            } else if (this.filterType === 'completed') {
                return this.todos.filter(todo => todo.done);
            } else if (this.filterType === 'pending') {
                return this.todos.filter(todo => !todo.done);
            }
        }
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim().length === 0) {
                return;
            }
            this.todos.push({
                text: this.newTodo,
                done: false
            });
            this.newTodo = '';
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        }
    }
};
</script>

<style scoped>
.toDoList {
    max-width: 600px;
    margin: 60px auto;
    background-color: beige;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease;
    /* 添加过渡效果 */
}

.toDoList.active {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    /* 激活时的阴影变化 */
}

.h1-style {
    text-align: center;
    color: #2c3e50;
}

.filters {
    text-align: center;
    margin-bottom: 20px;
}

.filters button {
    margin: 0 5px;
    padding: 5px 10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
    /* 添加过渡效果 */
}

.filters button.active {
    background-color: #2c3e50;
    color: #fff;
    border: 1px solid #2c3e50;
}

ul {
    list-style-type: none;
    padding: 0;
    transition: height 0.3s ease;
    /* 添加高度过渡效果 */
}

li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid #ccc;
}

.completed {
    text-decoration: line-through;
    color: #888;
}

.input-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}

.input-field {
    flex: 1;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.3s ease;
}

.input-field:focus {
    border-color: #2c3e50;
}

.add-btn {
    padding: 10px 20px;
    background-color: #2c3e50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.add-btn:hover {
    background-color: #34495e;
}

.delete-btn {
    padding: 5px 10px;
    background-color: #e74c3c;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.delete-btn:hover {
    background-color: #c0392b;
}

/* 复选框美化 */
.checkbox-label {
    position: relative;
    padding-left: 25px;
    cursor: pointer;
}

.checkbox-input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
}

.checkbox-custom {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #eee;
    border-radius: 4px;
    transition: background-color 0.3s ease;
}

.checkbox-input:checked~.checkbox-custom {
    background-color: #2c3e50;
}

.checkbox-custom::after {
    content: "";
    position: absolute;
    display: none;
}

.checkbox-input:checked~.checkbox-custom::after {
    display: block;
    left: 5px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.todo-text {
    flex: 1;
    margin-left: 10px;
}
</style>
