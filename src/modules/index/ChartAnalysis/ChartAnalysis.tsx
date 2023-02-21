import { Text } from '@/components/stitches/Text';
import { useEffect, useState } from 'react';
import { styled } from 'stitches.config';
import { type EChartsOption } from 'echarts';
import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import { ChartType, getChartOptions, initialChartOption } from './ChartAnalysisHelper';
import useChartData from './useChartData';
import ReactECharts from '@/components/ECharts';
import { Button } from '@/components/stitches';

const ChartAnalysis = () => {
  const { chartData } = useChartData({ dataLength: 100 });

  const [option, setOption] = useState<EChartsOption>(initialChartOption);

  const { resolvedTheme = 'dark' } = useTheme();

  /** Set chart style according to current theme. */
  useEffect(() => {
    updateOption();
  }, [resolvedTheme]);

  /** Update chart data upon chartData state change. */
  useEffect(() => {
    if (chartData?.length) {
      /** ECharts merges changes so only set chart data in object. */
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

  /** Change chart type to line or scatter.  */
  const setChartType = (type: ChartType) => {
    localStorage.setItem('chart-type', type);

    updateOption();
  };

  const updateOption = () => {
    const newOption: EChartsOption = getChartOptions(resolvedTheme);

    setOption(newOption);
  };

  return (
    <Wrapper>
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
            <Text size={3} color="gray8" padding="tiny">5.4.1 </Text>
            <ButtonWrapper>
              <Button onClick={() => setChartType(ChartType.scatter)}>SCATTER</Button>
              <Button onClick={() => setChartType(ChartType.line)}>LINE</Button>
            </ButtonWrapper>
          </TextGroupWrapper>
        </TextRowWrapper>
      </TextWrapper>
      <ReactECharts
        option={option}
        style={{ height: '100%', minWidth: '500px' }}
      />
    </Wrapper>
  );
};

const ButtonWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  display: 'flex',
  flexDirection: 'column',
});

const Wrapper = styled('div', {
  position: 'relative',
  background: '$cyan14',
  height: 300,
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
