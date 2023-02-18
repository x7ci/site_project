import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import MetricComparison, { MetricColor } from '@/components/MetricComparison';
import StepProgressBar, { StepProgressBarColor, type StepProgressBarData } from '@/components/StepProgressBar';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmData from '../AlarmData/AlarmData';
import AlarmDataGrid from '../AlarmData/AlarmDataGrid';

const DataGridDetailsContainer = () => {
  const stepProgressBarData1: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  const stepProgressBarData2: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'secondary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  const stepProgressBarData3: StepProgressBarData[] = [
    { color: StepProgressBarColor.cyan, state: 'primary' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
    { color: StepProgressBarColor.cyan, state: 'disabled' },
  ];

  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Text color="cyan1" weight={2}>ALARM </Text>
            <Text color="cyan1" weight={1} >STATS</Text>
          </Box>
        </Box>
      </ColoredBox>

      <Box css={{ height: 10 }} />

      <DottedTopBorderBox onlyLeft>

        <TitleContainer>
          <Text color="gray12" size="5" weight={3}>ONLINE </Text>
          <Text color="gray12" size="5" weight={3}>ALARMS </Text>
          <Text color="gray12" size="5" weight={3}>SLA </Text>
        </TitleContainer>

        <DottedTopBorderBox onlyLeft />

        <Box css={{ height: 18 }} />

        <MetricComparisonWrapper>
          <MetricComparison
            firstMetric={{ value: 102, label: 'ACTIVE' }}
            secondMetric={{ value: 109, label: 'ALL' }}
            color={MetricColor.cyan}
          />

          <MetricComparison
            firstMetric={{ value: 14, label: '12H' }}
            secondMetric={{ value: 23, label: '24H' }}
            color={MetricColor.orange}
          />

          <MetricComparison
            firstMetric={{ value: 99.4, label: 'UPTIME' }}
            secondMetric={{ value: 100, label: '- -' }}
            color={MetricColor.orange}
          />
        </MetricComparisonWrapper>

        <Box css={{ height: 18 }} />

        <StepProgressBarWrapper>
          <StepProgressBar data={stepProgressBarData1} />


          <StepProgressBar data={stepProgressBarData2} />

          <StepProgressBar data={stepProgressBarData3} />
        </StepProgressBarWrapper>

      </DottedTopBorderBox>
      <Box css={{ height: 20 }} />

      <AlarmData />

      <DottedTopBorderBox />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: 'calc($sizes$tileSize * 11)',
  // overflow: 'hidden',
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

const StepProgressBarWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flex: 1,
  gap: '40px',
  justifyContent: 'space-between',
});

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  textAlign: 'center',
  height: '20px',
  background: '$cyan14',
});

export default DataGridDetailsContainer;
