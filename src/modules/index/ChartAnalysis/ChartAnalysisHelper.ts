import { robotoCondensed } from '@/helpers/Fonts';
import { type EChartsOption } from 'echarts';

export const initialChartOption: EChartsOption = {
  textStyle: {
    fontFamily: robotoCondensed.style.fontFamily,
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
      name: 'ID 34-842 AVG',
      type: 'line',
      showSymbol: false,
      // symbolSize: 1,
    },
  ]
};
