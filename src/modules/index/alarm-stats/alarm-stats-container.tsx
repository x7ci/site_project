import DottedTopBorderBox from '@/components/dotted-top-border-box';
import MetricComparison, { MetricColor } from '@/components/metric-comparison';
import StepProgressBar, { StepProgressBarColor, type StepProgressBarData } from '@/components/step-progress-bar';
import { Box, ColoredBox, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmView from './alarm-view';
import { mainBearingTemp } from './alarms';

const AlarmStatsContainer = () => {
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
    <>
      <WidgetWrapper>
        <ColoredBox color="cyan14" size="max" >
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <T color="cyan1" weight={2}>ALARM </T>
              <T color="cyan1" weight={1} >STATS</T>
            </Box>
          </Box>
        </ColoredBox>

        <Box css={{ height: 10 }} />

        <DottedTopBorderBox onlyLeft>

          <TitleContainer>
            <T color="gray12" size="5" weight={3}>ONLINE </T>
            <T color="gray12" size="5" weight={3}>ALARMS </T>
            <T color="gray12" size="5" weight={3}>SLA </T>
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
              firstMetric={{ value: 99.7, label: 'UPTIME' }}
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

        <Box css={{ height: 26 }} />

        <AlarmView alarm={mainBearingTemp} />

      </WidgetWrapper>
      <DottedTopBorderBox />
    </>
  );
};

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

export default AlarmStatsContainer;
