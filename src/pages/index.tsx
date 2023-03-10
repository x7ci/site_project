import Head from 'next/head';
import { Text, Box, ColoredBox } from '../components/stitches';
import { styled } from 'stitches.config';
import SampleAnalysisContainer from '@/modules/index/SampleAnalysis/SampleAnalysisContainer';
import ChartAnalysisContainer from '@/modules/index/ChartAnalysis/ChartAnalysisContainer';
import DetailedMetricsContainer from '@/modules/index/DetailedMetrics/DetailedMetricsContainer';
import DataGridContainer from '@/modules/index/DataGrid/DataGridContainer';
import AnimateComponentMount from '@/components/AnimateComponentMount';
import DataGridDetailsContainer from '@/modules/index/AlarmData/DataGridDetailsContainer';
import AlarmViewContainer from '@/modules/index/AlarmData/AlarmViewContainer';

const Home = () => {
  return (
    <>
      <Head>
        <title>x7ci | Full Stack Developer</title>
        <meta name="description" content="Private website built with React & TypeScript. For inquiries please go to the about section." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1" height={20}>
            <Text color="gray1" weight="2" >SAMPLE ANALYSIS</Text>
          </ColoredBox>
        </AnimateComponentMount>
        <Box css={{ height: 20 }} />
        <ComponentsContainer>
          <Box css={{ flex: 1, maxWidth: 600 }}>
            <AnimateComponentMount>
              <SampleAnalysisContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, maxWidth: 1200 }}>
            <AnimateComponentMount>
              <ChartAnalysisContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, maxWidth: 800 }}>
            <AnimateComponentMount>
              <DetailedMetricsContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 2, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 3, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridDetailsContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 1, minWidth: 510, '@bp620': { minWidth: 410 }, maxWidth: 750 }}>
            <AnimateComponentMount>
              <AlarmViewContainer />
            </AnimateComponentMount>
          </Box>
        </ComponentsContainer>
      </Wrapper>
    </>
  );
};

export default Home;

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