<template>
    <div :class="[`nav-theme-${navTheme}`, `nav-layout-${navLayout}`]">
        <a-layout id="components-layout-demo-side" style="min-height: 100vh">
            <a-layout-sider
                v-if="navLayout === 'left'"
                v-model="collapsed"
                width="256px"
                collapsible
                :theme="navTheme"
                :trigger="null"
            >
                <div class="logo">Ant Design Vue Pro</div>
                <SiderMenu :theme="navTheme"/>
            </a-layout-sider>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <a-icon
                        v-auth="['admin']"
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="collapsed = !collapsed"
                    ></a-icon>
                    <Header />
                </a-layout-header>
                <a-layout-content style="margin: 0 16px">
                    <router-view></router-view>
                </a-layout-content>
                <a-layout-footer style="text-align: center">
                    <Footer />
                </a-layout-footer>
            </a-layout>
        </a-layout>
        <Authorized :authority="['admin']">
            <SettingDrawer />
        </Authorized>
    </div>
</template>

<script>
import Header from "./Header";
import SiderMenu from "./SiderMenu";
import Footer from "./Footer";
import SettingDrawer from "../components/SettingDrawer";
export default {
    data() {
        return {
            collapsed: false,
        };
    },
    components: {
        Header,
        SiderMenu,
        Footer,
        SettingDrawer,
    },
    computed: {
        navTheme() {
            return this.$route.query.navTheme || "dark";
        },
        navLayout() {
            return this.$route.query.navLayout || "left";
        },
    },
};
</script>

<style lang="less" scoped>
.trigger {
    padding: 0 20px;
    line-height: 64px;
    font-size: 20px;
    &:hover {
        background-color: #eeeeee;
    }
}
.logo {
    height: 64px;
    line-height: 64px;
    text-align: center;
    overflow: hidden;
}
.nav-theme-dark {
    .logo {
        color: #fff;
    }
}
</style>