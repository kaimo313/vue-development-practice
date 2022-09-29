<template>
    <div id="app">
        <a-locale-provider :locale="locale">
            <router-view></router-view>
        </a-locale-provider>
    </div>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN';
import enUS from 'ant-design-vue/lib/locale-provider/en_US';
// 对日期进行处理
import moment from "moment";
import "moment/locale/zh-cn";
import "moment/locale/en-gb";

export default {
    data() {
        return {
            locale: zhCN
        }
    },
    watch: {
        "$route.query.locale": function(val) {
            this.locale = val === "zhCN" ? zhCN : enUS;
            moment.locale(val === "zhCN" ? "zh-cn" : "en-gb");
            console.log(moment)
        }
    }
}
</script>

<style lang="less"></style>
