<template>
    <div class="page-404">
        <h1>404页面</h1>
        <div>
            <IconFont type="icon-icon-test" class="icon-404"></IconFont>
        </div>
        <!-- <div>
            <img :src="logo" alt="">
        </div> -->
        <div class="vue-svg-loader">
            <Logo />
        </div>
    </div>
</template>

<script>
// 没有使用 vue-svg-loader 时 logo 是路径
// import logo from "@/assets/logo.svg";
// 使用 vue-svg-loader 时 Logo 是函数式组件
import Logo from "@/assets/logo.svg";
export default {
    // data() {
    //     return {
    //         logo
    //     }
    // }
    components: {
        Logo
    }
};
</script>

<style lang="less" scoped>
.page-404 {
    text-align: center;
    .icon-404 {
        font-size: 64px;
    }
    img {
        width: 64px;
    }
}
</style>