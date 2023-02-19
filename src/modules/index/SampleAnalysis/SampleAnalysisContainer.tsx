import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, DashboardComponentWrapper, Text } from '@/components/stitches';
import SampleAnalysis from './SampleAnalysis';

const SampleAnalysisContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" height={20} >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Text color="cyan1" weight={2}>MODEL </Text>
              <Text color="cyan1" weight={1} >RENDER</Text>
            </Box>
            <Box>
              <Text color="cyan1" weight={2}>ID: 34-842 </Text>
            </Box>
          </Box>
        </ColoredBox>
        <Box css={{ height: 10 }} />
        <DottedTopBorderBox />
        <SampleAnalysis />
      </DashboardComponentWrapper>
      <DottedTopBorderBox />
    </>
  );
};

export default SampleAnalysisContainer;
