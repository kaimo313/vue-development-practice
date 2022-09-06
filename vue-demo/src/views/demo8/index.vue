<template>
    <div id="app">
        <p>
            <button @click="handleNameChange">change this.name</button>
            <button @click="handleInfoChange">change this.info</button>
            <button @click="handleListChange">change this.list</button>
        </p>
        <PropsAndData :info="info" :name="name" :list="list"></PropsAndData>
    </div>
</template>

<script>
import PropsAndData from './PropsAndData.vue';
let name = "kaimo313";
export default {
    data () {
        this.name = name;
        return {
            info: {},
            list: []
        };
    },
    components: {
        PropsAndData
    },
    methods: {
        handleNameChange() {
            this.name = "vue" + Date.now()
            console.log("this.name 发生了变化，但是并没有触发子组件更新", this.name);
        },
        handleInfoChange() {
            this.info.name = 1;
            console.log("this.info 发生了变化，但是并没有触发子组件更新", this.info);
        },
        handleListChange() {
            this.list.push(1, 2, 3)
            console.log("this.list 并没有发生变化，但是触发子组件更新", this.list);
        }
    },
};
</script>