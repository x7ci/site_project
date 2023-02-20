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

export interface ChartColors {
  [key: string]: {
    seriesColors: string[]
    gradiantPrimary: string
    gradiantSecondary: string
    tooltip: string
  }
}

export const chartColors: ChartColors = {
  dark: {
    seriesColors: ['rgba(153, 250, 255, .8)'],
    gradiantPrimary: 'rgba(153, 250, 255, .08)',
    gradiantSecondary: 'rgba(153, 250, 255, .01)',
    tooltip: '#181923',
  },
  light: {
    seriesColors: ['rgba(0, 0, 0, .6)'],
    gradiantPrimary: 'rgba(0, 0, 0, .2)',
    gradiantSecondary: 'rgba(0, 0, 0, .01)',
    tooltip: '#f7f7f7',
  },
};
