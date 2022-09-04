<template>
    <li>
        <slot name="pre-icon"></slot>
        <span v-if="!del" class="red">{{title}}</span>
        <span v-else style="text-decoration: line-through;">{{title}}</span>
        <slot name="suf-icon" :value="value">没有使用，默认文字展示</slot>
        <button v-show="del" @click="handleClick">删除</button>
    </li>
</template>

<script>
export default {
    name: 'TodoItem',
    props: {
        title: String,
        del: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            value: Math.random()
        }
    },
    methods: {
        handleClick() {
            console.log('点击了删除按钮');
            // 发射时间出去
            this.$emit("delete", this.title);
        }
    },
}
</script>

<style scoped>
.red {
    color: red;
}
</style>