import { Box, ColoredBox, Text, Button, DashboardComponentWrapper } from '@/components/stitches';
import { styled } from 'stitches.config';
import DataGrid, { ItemSeverity, type DataGridRow } from './DataGrid';
import { useEffect, useState } from 'react';
import { keyframes } from '@stitches/react';
import WarningIcon from '@/components/icons/WarningIcon';
import SquareBoxesIcon from '@/components/icons/SquareBoxesIcon';
import SingleDataMetric, { type DataMetricPair } from '../../../components/SingleDataMetric/SingleDataMetric';
import ActivityIcon from '@/components/icons/ActivityIcon';
import SettingsIcon from '@/components/icons/SettingsIcon';
import IconFrame from '@/components/IconFrame/IconFrame';
import { generateDataGrid } from './DataGridHelper';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';

const DataGridContainer = () => {
  const [data, setData] = useState<DataGridRow[]>([]);

  const [highlightSeverity, setHighlightSeverity] = useState<ItemSeverity | undefined>(ItemSeverity.high);

  useEffect(() => {
    setData(generateDataGrid());
  }, []);

  const warningCount: number = data.reduce((count, current) => count + current.filter((dataGridItem) => dataGridItem.severity === ItemSeverity.high).length, 0);

  const dataMetric1: DataMetricPair[] = [
    { label: 'SYS', value: data.reduce((count, current) => count + current.length, 0) },
    { label: 'AVG', value: 99 },
  ];

  const dataMetric2: DataMetricPair[] = [
    { label: 'DIA', value: 'OK' },
    { label: '%', value: '97%' },
  ];

  const dataMetric3: DataMetricPair[] = [
    { label: 'HIGH', value: warningCount },
    { label: 'AVG', value: '- -' },
  ];

  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" height={20}>
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Text color="cyan1" weight={2}>ACTIVE </Text>
              <Text color="cyan1" weight={1} >NODES</Text>
            </Box>
          </Box>
        </ColoredBox>

        <Box css={{ height: 8 }} />
        <StatusesContainer>
          <ColoredBox color="cyan14" size="max">
            <Text size="4" color="cyanLight1" weight={2}>SOCKET CONNECTION: </Text>
            <Text size="4" color="yellow1" weight={2}>OK</Text>
          </ColoredBox>
          <ColoredBox color="cyan14" size="max">
            <Text size="4" color="cyanLight1" weight={2}>LOCATION: </Text>
            <Text size="4" color="yellow1" weight={2}>US-WEST_2</Text>
          </ColoredBox>
          <ColoredBox color="cyan14" size="max">
            <Text size="4" color="cyanLight1" weight={2}>AUTH_STATUS: </Text>
            <Text size="4" color="yellow1" weight={2}>OK</Text>
          </ColoredBox>
        </StatusesContainer>

        <Box css={{ height: 18 }} />

        <SingleDataMetricsWrapper>
          <SingleDataMetric
            data={dataMetric1}
            icon={<SquareBoxesIcon color='cyan1' scale={0.5} size={16} />}
            title="NODES"
          />
          <SingleDataMetric
            data={dataMetric2}
            icon={<ActivityIcon color='cyan1' scale={.3} size={29} />}
            title="ACTIVE"
          />
          <SingleDataMetric
            data={dataMetric3}
            icon={<WarningIcon color='cyan1' scale={.9} size={21} />}
            title="ALARMS"
          />
        </SingleDataMetricsWrapper>
        <Box css={{ height: 20 }} />

        <DataGrid data={data} highlightSeverity={highlightSeverity} />
        <Box css={{ height: 17 }} />

        <ButtonContainer>
          <IconContainer>
            <SettingsIcon color="cyanLight1" scale={.55} size={16} />
          </IconContainer>

          <Button
            type={!highlightSeverity ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(undefined)}
            weight={3}
            fontSize="6"
          >
            RESET
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.low ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.low)}
            weight={3}
            fontSize="6"
          >
            LOW_SEV
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.medium ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.medium)}
            weight={3}
            fontSize="6"
          >
            MED_SEV
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.high ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.high)}
            weight={3}
            fontSize="6"
          >
            HIGH_SEV
          </Button>

        </ButtonContainer>

      </DashboardComponentWrapper>
      <DottedTopBorderBox />
    </>
  );
};

const StatusesContainer = styled('div', {
  display: 'flex',
  gap: '15px',
});

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // gap: '14px',
  alignItems: 'center',
});

const blinkAnimation = keyframes({
  '0%': {
    opacity: '100%',
    // transform: 'translateX(-5px)'
  },
  '50%': {
    opacity: '60%',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    opacity: '100%'
  },
});

const IconContainer = styled('div', {
  width: '58px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  background: '$cyan12',
  alignItems: 'center'
});

const BlinkingOpacity = styled('div', {
  animation: `${blinkAnimation} 2000ms linear infinite 0s;`,
});

const WarningFoundWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const SingleDataMetricsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',

  // background: '$cyan14',

});

export default DataGridContainer;
