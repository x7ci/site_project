import { Text } from '@/components/stitches/Text';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'stitches.config';
// import ReactECharts from 'echarts-for-react';
import { type EChartsOption } from 'echarts';
// import EChartsReact from 'echarts-for-react';
import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import useWidth from '@/helpers/hooks/useWidth';
import { chartColors, initialChartOption } from './ChartAnalysisHelper';
import useChartData from './useChartData';
import { ReactECharts } from '@/components/ECharts';

const ChartAnalysis = () => {
  const { chartData } = useChartData({ dataLength: 100 });

  // const chartRef = useRef<EChartsReact>(null);

  const [option, setOption] = useState<EChartsOption>(initialChartOption);

  const { resolvedTheme = 'dark' } = useTheme();

  // const width = useWidth();

  /** Resize chart on window resize. */
  // useEffect(() => {
  //   if (!chartRef.current) return;

  //   const chartInstance = chartRef.current.getEchartsInstance();

  //   chartInstance.resize();
  // }, [width]);

  /** Update chart colors on theme change. */
  useEffect(() => {
    const newOption: EChartsOption = {
      series: [
        {
          color: chartColors[resolvedTheme].seriesColors,
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: chartColors[resolvedTheme].gradiantPrimary }, // color at 0%
                { offset: 1, color: chartColors[resolvedTheme].gradiantSecondary }, // color at 100%
              ]
            },
            origin: 'start',
            opacity: 0.62,
          },
        },
      ],
      tooltip: {
        show: true,
        trigger: 'axis',
        backgroundColor: chartColors[resolvedTheme].tooltip,
        borderRadius: 0,
      },
    };

    setOption(newOption);
  }, [resolvedTheme]);

  /** Update chart data upon chartData state change. */
  useEffect(() => {
    if (chartData?.length) {
      const newOption: EChartsOption = {
        series: [
          {
            data: chartData,
          },
        ]
      };

      setOption(newOption);
    }
  }, [chartData]);

  return (
    <Wrapper>
      <Background>
        <TextWrapper>
          <TextRowWrapper>
            <TextGroupWrapper>
              <Text size={3} color="gray8" padding="tiny">ID 255212</Text>
              <Text size={3} color="gray8" padding="tiny">DATA SET: POLARIS </Text>
            </TextGroupWrapper>
            <TextGroupWrapper align="right">
              <Text size={3} color="gray8" padding="tiny">SOCKET_CONN_ACTIVE</Text>
            </TextGroupWrapper>
          </TextRowWrapper>
          <TextRowWrapper>
            <TextGroupWrapper>
              <Text size={3} color="gray8" padding="tiny">SAMPLE HEALTH: OK</Text>
              <Text
                background="cyan1"
                size={3}
                color="gray1"
                padding="tiny"
              >
                CURRENT STREAM: {chartData?.slice(-1)[0].value.join(': ')}
              </Text>
            </TextGroupWrapper>
            <TextGroupWrapper align="right">
              <Text size={3} color="gray8" padding="tiny">APACHE ECHARTS</Text>
              <Text size={3} color="gray8" padding="tiny">V. 5.4.1 </Text>
            </TextGroupWrapper>
          </TextRowWrapper>
        </TextWrapper>
        <ChartWrapper>
          <ReactECharts
            option={option}
            style={{ width: '100%', height: '100%' }}
          />
        </ChartWrapper>
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'relative',
});

const ChartWrapper = styled('div', {
  background: 'blue',
  height: '100%',
});

const Background = styled('div', {
  background: '$cyan14',
});

const TextWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const TextRowWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between'
});

const TextGroupWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  zIndex: 1,
  variants: {
    align: {
      right: {
        alignItems: 'flex-end'
      }
    }
  }
});

export default ChartAnalysis;
