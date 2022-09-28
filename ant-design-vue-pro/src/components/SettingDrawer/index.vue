<template>
    <div>
        <a-drawer
            width="300px"
            placement="right"
            :closable="false"
            :visible="visible"
            @close="onClose"
        >
            <template v-slot:handle>
                <div class="kaimo-handle" @click="visible = !visible">
                    <a-icon :type="visible ? 'close' : 'setting'"></a-icon>
                </div>
            </template>
            <div>
                <h2>整体风格定制</h2>
                <a-radio-group
                    :value="$route.query.navTheme || 'dark'"
                    @change="(e) => handleSettingChange('navTheme', e.target.value)"
                >
                    <a-radio value="dark">黑色</a-radio>
                    <a-radio value="light">明亮</a-radio>
                </a-radio-group>
                <h2>导航模式</h2>
                <a-radio-group
                    :value="$route.query.navLayout || 'left'"
                    @change="(e) => handleSettingChange('navLayout', e.target.value)"
                >
                    <a-radio value="left">左侧</a-radio>
                    <a-radio value="top">顶部</a-radio>
                </a-radio-group>
            </div>
        </a-drawer>
    </div>
</template>
<script>
export default {
    data() {
        return {
            visible: false,
            navTheme: "dark",
            navLayout: "left"
        };
    },
    methods: {
        onClose() {
            this.visible = false;
        },
        handleSettingChange(type, value) {
            this.$router.push({
                query: {
                    ...this.$route.query,
                    [type]: value
                }
            });
        }
    },
};
</script>

<style lang="less" src="./index.less"></style>
