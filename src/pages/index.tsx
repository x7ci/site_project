import Head from 'next/head';
import { T, Box, ColoredBox } from '../components/stitches';
import { styled } from 'stitches.config';
import ModelRenderContainer from '@/modules/index/model-render/model-render-container';
import HealthMonitorContainer from '@/modules/index/health-monitor/health-monitor-container';
import RuntimeMetricsContainer from '@/modules/index/runtime-metrics/runtime-metrics-container';
import DataGridContainer from '@/modules/index/alarm-heat-map/alarm-heat-map-container';
import AnimateComponentMount from '@/components/animate-component-mount/animate-component-mount';
import AlarmStatsContainer from '@/modules/index/alarm-stats/alarm-stats-container';
import AlarmListContainer from '@/modules/index/alarm-stats/alarm-list-container';
import { useEffect, useRef } from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import { type EChartsRef } from '@/components/echarts/echarts';
import useElementWidth from '@/helpers/hooks/use-element-width';

const layoutsObject = {
  1: [
    { i: '1', w: 4, h: 3, x: 0, y: 0, isResizable: false },
    { i: '2', w: 6, h: 3, x: 4, y: 0, minW: 5, minH: 3, maxH: 3 },
    { i: '3', w: 6, h: 3, x: 10, y: 0, minW: 5, minH: 3, maxH: 3 },
    { i: '4', w: 5, h: 3, x: 0, y: 1, isResizable: false },
    { i: '5', w: 5, h: 3, x: 5, y: 1, minW: 5, maxW: 7, minH: 3, maxH: 3 },
    { i: '6', w: 6, h: 3, x: 10, y: 1, minW: 5, maxW: 7, minH: 3, maxH: 3 },
  ],
  2: [
    { i: '1', w: 2, h: 3, x: 0, y: 0, isResizable: false },
    { i: '2', w: 3, h: 3, x: 2, y: 0, minW: 3, minH: 3, maxH: 3 },
    { i: '3', w: 3, h: 3, x: 5, y: 0, minW: 3, minH: 3, maxH: 3 },
    { i: '4', w: 3, h: 3, x: 0, y: 1, isResizable: false },
    { i: '5', w: 3, h: 3, x: 3, y: 1, minW: 3, minH: 3, maxH: 3 },
    { i: '6', w: 4, h: 3, x: 0, y: 2, minW: 3, minH: 3, maxH: 3 },
  ],
  3: [
    { i: '1', w: 2, h: 3, x: 0, y: 0, isResizable: false },
    { i: '2', w: 4, h: 3, x: 2, y: 0, minW: 4, minH: 3, maxH: 3 },
    { i: '3', w: 3, h: 3, x: 0, y: 1, minW: 3, minH: 3, maxH: 3 },
    { i: '4', w: 3, h: 3, x: 3, y: 1, isResizable: false },
    { i: '5', w: 3, h: 3, x: 0, y: 2, minW: 2, minH: 3, maxH: 3 },
    { i: '6', w: 4, h: 3, x: 3, y: 2, minW: 2, minH: 3, maxH: 3 },
  ],
  4: [
    { i: '1', w: 2, h: 3, x: 0, y: 0, isResizable: true },
    { i: '2', w: 4, h: 3, x: 3, y: 0, minW: 4, minH: 3, maxH: 3 },
    { i: '3', w: 4, h: 3, x: 0, y: 1, minW: 4, minH: 3, maxH: 3 },
    { i: '4', w: 4, h: 3, x: 0, y: 2, isResizable: false },
    { i: '5', w: 4, h: 3, x: 0, y: 3, minW: 4, minH: 3, maxH: 3 },
    { i: '6', w: 4, h: 3, x: 0, y: 4, minW: 4, minH: 3, maxH: 3 },
  ],
  5: [
    { i: '1', w: 2, h: 3, x: 0, y: 0, isResizable: true },
    { i: '2', w: 3, h: 3, x: 3, y: 0, minW: 3, minH: 3, maxH: 3 },
    { i: '3', w: 5, h: 3, x: 0, y: 1, minW: 4, minH: 3, maxH: 3 },
    { i: '4', w: 4, h: 3, x: 0, y: 2, isResizable: false },
    { i: '5', w: 4, h: 3, x: 0, y: 3, minW: 4, minH: 3, maxH: 3 },
    { i: '6', w: 4, h: 3, x: 0, y: 4, minW: 4, minH: 3, maxH: 3 },
  ],
  6: [
    { i: '1', w: 1, h: 3, x: 0, y: 0, isResizable: true },
    { i: '2', w: 1, h: 3, x: 0, y: 1, minW: 1, minH: 3, maxH: 3 },
    { i: '3', w: 1, h: 3, x: 0, y: 2, minW: 1, minH: 3, maxH: 3 },
    { i: '4', w: 1, h: 3, x: 0, y: 3, isResizable: false },
    { i: '5', w: 1, h: 3, x: 0, y: 4, minW: 1, minH: 3, maxH: 3 },
    { i: '6', w: 1, h: 3, x: 0, y: 5, minW: 1, minH: 3, maxH: 3 },
  ]
};

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Home() {
  const chartRef = useRef<EChartsRef | undefined>(null);

  const { width, ref: chartUnitRef } = useElementWidth<HTMLDivElement>({ debounceMs: 100 });

  /** Chart is not resizing when parent does, so call resize() on chart when width of wrapper element changes. */
  useEffect(() => {
    chartRef.current?.resize();
  }, [width]);

  return (
    <>
      <Head>
        <title>x7ci | Full Stack Developer</title>
        <meta name="description" content="Private website built with React, TypeScript & Next.js. For inquiries please go to the about section." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1" height={20}>
            <T color="gray1" weight="2" >SAMPLE ANALYSIS</T>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ h: 20 }} />

        <ResponsiveReactGridLayout
          className="layout"
          breakpoints={{ 1: 1800, 2: 1500, 3: 1300, 4: 1000, 5: 800, 6: 600 }}
          cols={{ 1: 16, 2: 8, 3: 7, 4: 6, 5: 5, 6: 1 }}
          rowHeight={90}
          margin={[30, 30]}
          containerPadding={[0, 0]}
          layouts={layoutsObject}
          draggableHandle=".widget-draggable-handle"
        >
          <Box key="1">
            <AnimateComponentMount delay={.2}>
              <ModelRenderContainer />
            </AnimateComponentMount>
          </Box>
          <Box key="2">
            <AnimateComponentMount delay={.3}>
              <Box ref={chartUnitRef}>
                <HealthMonitorContainer ref={chartRef} />
              </Box>
            </AnimateComponentMount>
          </Box>
          <Box key="3">
            <AnimateComponentMount delay={.4}>
              <RuntimeMetricsContainer />
            </AnimateComponentMount>
          </Box>
          <Box key="4">
            <AnimateComponentMount delay={.5}>
              <DataGridContainer />
            </AnimateComponentMount>
          </Box>
          <Box key="5">
            <AnimateComponentMount delay={.6}>
              <AlarmStatsContainer />
            </AnimateComponentMount>
          </Box>
          <Box key="6">
            <AnimateComponentMount delay={.7}>
              <AlarmListContainer />
            </AnimateComponentMount>
          </Box>
        </ResponsiveReactGridLayout>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});
