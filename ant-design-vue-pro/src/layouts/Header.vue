<template>
    <div class="header">
        <a-dropdown>
            <a-icon type="global" />语言
            <a-menu slot="overlay" @click="handleLocale" :selectedKeys="[$route.query.locale || 'zhCN']">
                <a-menu-item key="zhCN">中文</a-menu-item>
                <a-menu-item key="enUS">English</a-menu-item>
            </a-menu>
        </a-dropdown>
    </div>
</template>

<script>
export default {
    methods: {
        handleLocale({key}) {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    locale: key
                }
            });
            this.$i18n.locale = key;
        }
    },
};
</script>

<style scoped>
.header {
    float: right;
    margin-right: 30px;
}
</style>