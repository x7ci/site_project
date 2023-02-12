import Head from 'next/head';
import { Text, Box, ColoredBox } from '../components/stitches';
import { styled } from 'stitches.config';
import SampleAnalysisContainer from '@/modules/index/SampleAnalysis/SampleAnalysisContainer';
import ChartAnalysisContainer from '@/modules/index/ChartAnalysis/ChartAnalysisContainer';
import DetailedMetricsContainer from '@/modules/index/DetailedMetrics/DetailedMetricsContainer';
import DataGridContainer from '@/modules/index/DataGrid/DataGridContainer';
import AnimateComponentMount from '@/components/AnimateComponentMount';

const Home = () => {
  return (
    <>
      <Head>
        <title>x7ci - Full Stack Developer</title>
        <meta name="description" content="x7ci - Full Stack Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1">
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
          <Box css={{ flex: 2, minWidth: 510, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridContainer />
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
  flexWrap: 'wrap',
});
