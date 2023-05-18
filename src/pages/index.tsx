import Head from 'next/head';
import { T, Box, ColoredBox } from '../components/stitches';
import { styled } from 'stitches.config';
import ModelRenderContainer from '@/modules/index/model-render/model-render-container';
import HealthMonitorContainer from '@/modules/index/health-monitor/health-monitor-container';
import RuntimeMetricsContainer from '@/modules/index/runtime-metrics/runtime-metrics-container';
import DataGridContainer from '@/modules/index/alarm-heat-map/alarm-heat-map-container';
import AnimateComponentMount from '@/components/animate-component-mount';
import AlarmStatsContainer from '@/modules/index/alarm-stats/alarm-stats-container';
import AlarmListContainer from '@/modules/index/alarm-stats/alarm-list-container';

export default function Home() {
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

        <ComponentsContainer>
          <Box css={{ flex: 1, maxWidth: 600 }}>
            <AnimateComponentMount>
              <ModelRenderContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, maxWidth: 1200 }}>
            <AnimateComponentMount>
              <HealthMonitorContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, maxWidth: 800 }}>
            <AnimateComponentMount>
              <RuntimeMetricsContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 3, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 540 }}>
            <AnimateComponentMount>
              <AlarmStatsContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 1, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 750 }}>
            <AnimateComponentMount>
              <AlarmListContainer />
            </AnimateComponentMount>
          </Box>
        </ComponentsContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ComponentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  // rowGap: '28px',
  flexWrap: 'wrap',
});
