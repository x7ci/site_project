import { Box, ColoredBox, T, Button, WidgetWrapper } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmHeatMap, { ItemSeverity, type HeatMapRow } from './alarm-heat-map';
import { useEffect, useState } from 'react';
import WarningIcon from '@/components/icon/warning-icon';
import SquareBoxesIcon from '@/components/icon/square-boxes-icon';
import DataMetricGroup, { type DataMetricPair } from '../../../components/data-metric-group/data-metric-group';
import ActivityIcon from '@/components/icon/activity-icon';
import SettingsIcon from '@/components/icon/settings-icon';
import { generateAlarmHeatMapData } from './alarm-heat-map-helper';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import WidgetHeader from '@/components/widget/widget-header';

const AlarmHeatMapContainer = () => {
  const [data, setData] = useState<HeatMapRow[]>([]);

  const [highlightSeverity, setHighlightSeverity] = useState<ItemSeverity | undefined>(ItemSeverity.high);

  useEffect(() => {
    setData(generateAlarmHeatMapData());
  }, []);

  const warningCount: number = data.reduce((count, current) => count + current.data.filter((dataGridItem) => dataGridItem.severity === ItemSeverity.high).length, 0);

  const dataMetric1: DataMetricPair[] = [
    { label: 'SYS', value: data.reduce((count, current) => count + current.data.length, 0) },
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
      <WidgetWrapper>
        <WidgetHeader>
          <T color="cyan1" weight={2}>ALARM </T>
          <T color="cyan1" weight={1} >HEAT MAP</T>
        </WidgetHeader>

        <Box css={{ h: 8 }} />
        {/*
        <StatusesContainer>
          <ColoredBox color="cyan14" size="max">
            <T size="4" color="cyanLight1" weight={2}>SOCKET_CONN: </T>
            <T size="4" color="yellow1" weight={2}>OK</T>
          </ColoredBox>
          <ColoredBox color="cyan14" size="max">
            <T size="4" color="cyanLight1" weight={2}>LOCATION: </T>
            <T size="4" color="yellow1" weight={2}>US-WEST_2</T>
          </ColoredBox>
          <ColoredBox color="cyan14" size="max">
            <T size="4" color="cyanLight1" weight={2}>AUTH_STATUS: </T>
            <T size="4" color="yellow1" weight={2}>OK</T>
          </ColoredBox>
        </StatusesContainer>

        <Box css={{ h: 18 }} /> */}

        <SingleDataMetricsWrapper>
          <DataMetricGroup
            data={dataMetric1}
            icon={<SquareBoxesIcon color='cyan1' width={16} height={16} />}
            title="NODES"
          />
          <DataMetricGroup
            data={dataMetric2}
            icon={<ActivityIcon color='cyan1' width={26} height={26} />}
            title="ACTIVE"
          />
          <DataMetricGroup
            data={dataMetric3}
            icon={<WarningIcon color='cyan1' width={21} height={21} />}
            title="ALARMS"
          />
        </SingleDataMetricsWrapper>

        <Box css={{ h: 15 }} />

        <Box css={{ overflowX: 'auto' }}>
          <CornerDotsBox />
          <AlarmHeatMap
            data={data}
            highlightSeverity={highlightSeverity}
          />
        </Box>

        <Box css={{ h: 17 }} />

        <ButtonContainer>
          <IconContainer>
            <SettingsIcon color="cyanLight1" width={16} height={16} />
          </IconContainer>

          <Button
            type={!highlightSeverity ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(undefined)}
            weight={3}
            fontSize="6"
            size={{ '@bp570': 's' }}
          >
            RESET
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.low ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.low)}
            weight={3}
            fontSize="6"
            size={{ '@bp570': 's' }}
          >
            LOW_SEV
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.medium ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.medium)}
            weight={3}
            fontSize="6"
            size={{ '@bp570': 's' }}
          >
            MED_SEV
          </Button>
          <Button
            type={highlightSeverity === ItemSeverity.high ? 'primary' : 'secondary'}
            onClick={() => setHighlightSeverity(ItemSeverity.high)}
            weight={3}
            fontSize="6"
            size={{ '@bp570': 's' }}
          >
            HIGH_SEV
          </Button>

        </ButtonContainer>

      </WidgetWrapper>
      <CornerDotsBox />
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
  alignItems: 'center',
});

const IconContainer = styled('div', {
  width: '58px',
  height: '24px',
  display: 'flex',
  justifyContent: 'center',
  background: '$cyan12',
  alignItems: 'center'
});

const SingleDataMetricsWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '15px',
});

export default AlarmHeatMapContainer;
