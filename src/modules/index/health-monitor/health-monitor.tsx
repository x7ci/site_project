import { T, WidgetInfoTextGroup, WidgetInfoTextRow, WidgetInfoTextWrapper } from '@/components/stitches/';
import { type Ref, useEffect, useRef, useState, type ForwardRefRenderFunction, forwardRef } from 'react';
import { styled } from 'stitches.config';
import { type EChartsOption } from 'echarts';
import { useTheme } from '@/contexts/theme-provider/theme-provider';
import { ChartType, getChartOptions, initialChartOption } from './health-monitor-helper';
import useChartData from './use-chart-data';
import ECharts, { type EChartsRef } from '@/components/echarts/echarts';
import ActivityIcon from '@/components/icon/activity-icon';
import ScatterIcon from '@/components/icon/scatter-icon';

const HealthMonitor: ForwardRefRenderFunction<EChartsRef> = (_, ref) => {
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
      <WidgetInfoTextWrapper>
        <WidgetInfoTextRow>
          <WidgetInfoTextGroup>
            <T size={3} color="gray8" padding="tiny">ID 255212</T>
            <T size={3} color="gray8" padding="tiny">DATA SET: POLARIS </T>
          </WidgetInfoTextGroup>
          <WidgetInfoTextGroup align="right">
            <ButtonWrapper>
              <ChartTypeButton variant={currentChartType.current === ChartType.scatter ? 'active' : undefined} onClick={() => setChartType(ChartType.scatter)}>
                <ScatterIcon color='cyan1' width={24} height={18} />
              </ChartTypeButton>
              <ChartTypeButton variant={currentChartType.current === ChartType.line ? 'active' : undefined} onClick={() => setChartType(ChartType.line)}>
                <ActivityIcon color='cyan1' width={24} height={24} />
              </ChartTypeButton>
            </ButtonWrapper>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
        <WidgetInfoTextRow align="bottom">
          <WidgetInfoTextGroup>
            <T
              background="cyan1"
              size={3}
              color="gray1"
              padding="tiny"
            >
              CURRENT STREAM: {chartData?.slice(-1)[0].value.join(': ')}
            </T>
          </WidgetInfoTextGroup>
          <WidgetInfoTextGroup align="right">
            <T size={3} color="gray8" padding="tiny">APACHE ECHARTS</T>
            <T size={3} color="gray8" padding="tiny">5.4.1 </T>
          </WidgetInfoTextGroup>
        </WidgetInfoTextRow>
      </WidgetInfoTextWrapper>
      <ECharts
        option={option}
        style={{ height: '100%', minWidth: '500px', '@bp570': { minWidth: '200px' } }}
        ref={ref}
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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

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

// export default forwardRef(HealthMonitor);
export default forwardRef(HealthMonitor);
