<template>
    <div ref="chartDom"></div>
</template>

<script>
import * as echarts from 'echarts';
import debounce from "lodash/debounce";
import { addListener, removeListener } from "resize-detector";
export default {
    props: {
        option: {
            type: Object,
            default: () => {}
        }
    },
    watch: {
        option(val) {
            console.log("watch--->", val)
            this.chart.setOption(val);
        }
    },
    created() {
        this.resize = debounce(this.resize, 300);
    },
    mounted() {
        this.renderChart();
        addListener(this.$refs.chartDom, this.resize);
    },
    beforeDestroy() {
        removeListener(this.$refs.chartDom, this.resize);
        this.chart.dispose();
        this.chart = null;
    },
    methods: {
        resize() {
            console.log("resize")
        },
        renderChart() {
            // 基于准备好的dom，初始化echarts实例
            this.chart = echarts.init(this.$refs.chartDom);
            // 使用刚指定的配置项和数据显示图表。
            this.chart.setOption(this.option);
        }
    },
};
</script>

<style></style>