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
        <title>x7ci - Full Stack Developer</title>
        <meta name="description" content="x7ci - Full Stack Developer" />
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
          <Box css={{ flex: 2, minWidth: 510, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 3, minWidth: 510, maxWidth: 540 }}>
            <AnimateComponentMount>
              <DataGridDetailsContainer />
            </AnimateComponentMount>
          </Box>
          <Box css={{ flex: 1, minWidth: 510, maxWidth: 750 }}>
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

const FlexItem = styled('div', {
  // height: 'calc($sizes$tileSize * 10)',
  // overflowX: 'hidden',
  defaultVariants: {
    flex: 1,
  },
  variants: {
    flex: {
      1: {
        flex: 1
      },
      2: {
        flex: 2
      },
    },
    maxWidth: {
      540: {
        maxWidth: 540,
      },
      600: {
        maxWidth: 600,
      },
      800: {
        maxWidth: 800,
      },
    },
    minWidth: {
      510: {
        minWidth: 540,
      },
    }
  }
});
