import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import LiveDataCircle from '@/components/LiveDataCircle';
import { Box, DashboardComponentWrapper, Text } from '@/components/stitches';
import { ColoredBox } from '@/components/stitches/ColoredBox';
import { styled } from 'stitches.config';
import ChartAnalysis from './ChartAnalysis';

const ChartAnalysisContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" height={20} >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Text color="cyan1" weight={2}>HEALTH </Text>
              <Text color="cyan1" weight={1}>MONITOR</Text>
            </Box>
            <TitleTextRow>
              <Text size="5" color="gray8" weight={3}>LIVE FEED</Text>
              <LiveDataCircle />
            </TitleTextRow>
          </Box>
        </ColoredBox>
        <Box css={{ height: 10 }} />
        <DottedTopBorderBox />
        <ChartAnalysis />
      </DashboardComponentWrapper>
      <DottedTopBorderBox />
    </>
  );
};

const TitleTextRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  alignItems: 'center',
});

export default ChartAnalysisContainer;
