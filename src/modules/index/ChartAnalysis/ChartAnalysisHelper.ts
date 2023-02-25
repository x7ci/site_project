import { type EChartsOption } from 'echarts';
import { theme } from 'stitches.config';

export const initialChartOption: EChartsOption = {
  textStyle: {
    fontFamily: theme.fonts.robotoCondensed.value
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

export interface LineDataItemOption {
  name: string
  value: Array<string | number>
}

export enum ChartType {
  line = 'line',
  scatter = 'scatter',
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

export type ChartSeries = EChartsOption['series'];

export const getChartOptions = (resolvedTheme: string, newData?: LineDataItemOption[]): EChartsOption => {
  const newOption: EChartsOption = {
    tooltip: {
      show: true,
      trigger: 'axis',
      backgroundColor: chartColors[resolvedTheme].tooltip,
      borderRadius: 0,
    },
  };

  const chartType: string = localStorage.getItem('chart-type') ?? ChartType.line;

  const scatterType: ChartSeries = {
    color: chartColors[resolvedTheme].seriesColors,
    type: 'scatter',
    symbolSize: 5,
  };

  const lineType: ChartSeries = {
    color: chartColors[resolvedTheme].seriesColors,
    type: 'line',
    showSymbol: false,
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          { offset: 0, color: chartColors[resolvedTheme].gradiantPrimary },
          { offset: 1, color: chartColors[resolvedTheme].gradiantSecondary },
        ]
      },
      origin: 'start',
      opacity: 0.62,
    },
  };

  if (chartType === ChartType.line) {
    newOption.series = [{ ...lineType }];
  }

  if (chartType === ChartType.scatter) {
    newOption.series = [{ ...scatterType }];
  }

  if (newOption.series?.[0] && newData) {
    newOption.series[0].data = newData;
  }

  return newOption;
};
