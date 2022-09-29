<template>
    <div ref="chartDom"></div>
</template>

<script>
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from "echarts/core";
// 引入条形图表，图表后缀都为 Chart
import { BarChart } from "echarts/charts";
// 引入提示框，标题，直角坐标系等组件，组件后缀都为 Component
import {
  TitleComponent, // 标题
  TooltipComponent, // 类似于hover的提示
  GridComponent,   // 网格
  LegendComponent, // 指示说明
} from "echarts/components";
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer
import { CanvasRenderer } from "echarts/renderers";
// 注册必须的组件
echarts.use([
    BarChart,
    TitleComponent,
    TooltipComponent,
    GridComponent,
    LegendComponent,
    CanvasRenderer
]);

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