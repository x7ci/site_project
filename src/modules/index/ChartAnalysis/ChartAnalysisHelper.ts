import { EChartsOption } from "echarts";

export const initialChartOption: EChartsOption = {
    textStyle: {
        fontFamily: '__Roboto_Condensed_615f39'
    },
    grid: {
        show: false,
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        },
        splitNumber: 3,
    },
    yAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
    },
    tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: '#181923',
        borderRadius: 0,
        borderColor: 'rgba(0, 0, 0, 0)'
    },
    series: [
        {
            name: 'ID 34-842',
            type: 'line',
            showSymbol: false,
        }
    ]
}
