import { Text } from '@/components/stitches/Text';
import { useEffect, useRef, useState } from 'react';
import { styled } from 'stitches.config';
import { type EChartsOption } from 'echarts';
import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import { ChartType, getChartOptions, initialChartOption } from './ChartAnalysisHelper';
import useChartData from './useChartData';
import ReactECharts from '@/components/ECharts';
import ActivityIcon from '@/components/icons/ActivityIcon';
import ScatterIcon from '@/components/icons/ScatterIcon';

const ChartAnalysis = () => {
  const { chartData } = useChartData({ dataLength: 100 });

  const currentChartType = useRef<ChartType>();

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

    currentChartType.current = newOption.series?.[0].type;

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
            <ButtonWrapper>
              <ChartTypeButton variant={currentChartType.current === ChartType.scatter ? 'active' : undefined} onClick={() => setChartType(ChartType.scatter)}>
                <ScatterIcon color='cyan1' scale={.7} width={20} height={28} />
              </ChartTypeButton>
              <ChartTypeButton variant={currentChartType.current === ChartType.line ? 'active' : undefined} onClick={() => setChartType(ChartType.line)}>
                <ActivityIcon color='cyan1' scale={.22} size={22} />
              </ChartTypeButton>
            </ButtonWrapper>
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
          </TextGroupWrapper>
        </TextRowWrapper>
      </TextWrapper>
      <ReactECharts
        option={option}
        style={{ height: '100%', minWidth: '500px', '@bp570': { minWidth: '200px' } }}
      />
    </Wrapper>
  );
};

const ChartTypeButton = styled('button', {
  border: 0,
  background: '$cyan13',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: '150ms',
  whiteSpace: 'nowrap',
  color: '$cyan1',
  height: '24px',

  '&:active': {
    opacity: .8,
  },

  variants: {
    variant: {
      active: {
        background: '$cyan9',
        color: '$cyan1',
      }
    }
  }
});

const ButtonWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
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
