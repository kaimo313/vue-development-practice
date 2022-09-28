<template>
    <div>
        {{$t('message')["app.dashboard.analysis.timeLabel"]}}
        <a-date-picker/>
        <Chart :option="chartOption" style="width: 600px; height: 400px;"/>
    </div>
</template>

<script>
import Chart from "@/components/Chart.vue";
import request from "@/utils/request.js";
export default {
    data() {
        return {
            chartOption: {}
        }
    },
    components: {
        Chart
    },
    mounted() {
        this.getChartData();
        this.interval = setInterval(() => {
            this.getChartData();
        }, 3000);
    },
    beforeDestroy() {
        clearInterval(this.interval);
    },
    methods: {
        getChartData() {
            request({
                url: "/api/dashboard/chart",
                method: "get",
                params: {
                    id: "kaimo313"
                }
            }).then(response => {
                this.chartOption = {
                    title: {
                        text: 'ECharts 入门示例'
                    },
                    tooltip: {},
                    legend: {
                        data: ['销量']
                    },
                    xAxis: {
                        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                    },
                    yAxis: {},
                    series: [
                        {
                            name: '销量',
                            type: 'bar',
                            data: response.data
                        }
                    ]
                }
            })
        }
    },
};
</script>

<style></style>