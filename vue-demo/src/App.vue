<template>
    <div id="app">
        {{message}}
        <todo-list>
            <todo-item v-for="item in list" :key="item.title" :title="item.title" :del="item.del" @delete="handleDelete">
                <span slot="pre-icon">前置icon</span>
                <!-- 新语法 v-slot -->
                <template v-slot:suf-icon="{value}">后置icon：{{value}}</template>
            </todo-item>
        </todo-list>
    </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
import TodoList from "./components/TodoList.vue";

export default {
    name: "App",
    components: {
        TodoItem,
        TodoList,
    },
    data() {
        return {
        message: "kaimo 313",
        list: [
            {
                title: "课程1",
                del: true,
            },{
                title: "课程2",
                del: false,
            }],
        };
    },
    methods: {
        handleDelete(val) {
            console.log("handleDelete---->", val);
        },
    },
};
</script>
