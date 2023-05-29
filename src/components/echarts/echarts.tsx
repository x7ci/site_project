import React, { useRef, useEffect, type ForwardRefRenderFunction, forwardRef, useImperativeHandle } from 'react';
import { init, getInstanceByDom } from 'echarts';
import type { EChartsOption, ECharts as EChartsType, SetOptionOpts } from 'echarts';
import { Box, type StitchesCss } from '../stitches';

export type EChartsRef = EChartsType | undefined;

export interface Props {
  option: EChartsOption
  style?: StitchesCss
  settings?: SetOptionOpts
  loading?: boolean
  theme?: 'light' | 'dark'
}

const ECharts: ForwardRefRenderFunction<EChartsRef, Props> = ({ option, style, settings, loading, theme }: Props, ref): JSX.Element => {
  const chartRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => {
    let chart: EChartsRef;

    if (chartRef.current !== null) {
      chart = getInstanceByDom(chartRef.current);
    }

    return chart;
  });

  useEffect(() => {
    // Initialize chart
    let chart: EChartsType | undefined;

    if (chartRef.current !== null) {
      chart = init(chartRef.current, theme);
    }

    // Add chart resize listener
    // ResizeObserver is leading to a bit janky UX
    const resizeChart = () => {
      chart?.resize();
    };

    window.addEventListener('resize', resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener('resize', resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]); // Whenever theme changes we need to add option and setting due to it being deleted in cleanup function

  useEffect(() => {
    // Update chart
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);

      if (loading === true) {
        chart?.showLoading();
      } else {
        chart?.hideLoading();
      }
    }
  }, [loading, theme]);

  return (
    <Box ref={chartRef} css={{ ...style }} />
  );
};

export default forwardRef(ECharts);
