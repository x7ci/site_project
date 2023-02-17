import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import MetricComparison, { MetricColor } from '@/components/MetricComparison';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';

const DataGridDetailsContainer = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Text color="cyan1" weight={2}>NODE </Text>
            <Text color="cyan1" weight={1} >STATS</Text>
          </Box>
        </Box>
      </ColoredBox>

      <Box css={{ height: 10 }} />

      <DottedTopBorderBox>
        <Box css={{ height: 20 }} />

        <MetricComparisonWrapper>

          <MetricComparison
            firstMetric={{ value: 102, label: 'ACTIVE' }}
            secondMetric={{ value: 109, label: 'ALL' }}
            color={MetricColor.cyan}
          />

          <MetricComparison
            firstMetric={{ value: 12, label: 'RAW' }}
            secondMetric={{ value: 59, label: '24H' }}
            color={MetricColor.orange}
          />

          <MetricComparison
            firstMetric={{ value: 99.2, label: 'UPTIME' }}
            secondMetric={{ value: 100, label: '- -' }}
            color={MetricColor.orange}
          />
        </MetricComparisonWrapper>

        <Box css={{ height: 20 }} />
      </DottedTopBorderBox>
      <Background>
      </Background>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: 'calc($sizes$tileSize * 11)',
});

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column'
});

const MetricComparisonWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export default DataGridDetailsContainer;
