import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import useRandomRange from '@/helpers/hooks/useRandomRange';
import { styled } from 'stitches.config';
import DetailedTable, { type TableData } from '../../../components/DetailedTable';

const TableMetrics2 = () => {
  const outputRange = useRandomRange({ minValue: 1100, maxValue: 1400, updateInterval: 7000 });
  const steamPressure = useRandomRange({ minValue: 60, maxValue: 75, updateInterval: 10000 });
  const steamTemp = useRandomRange({ minValue: 250, maxValue: 300, updateInterval: 5000 });
  const turbineSpeed = useRandomRange({ minValue: 5122, maxValue: 10000, updateInterval: 6000 });
  const turbineHotspot = useRandomRange({ minValue: 80, maxValue: 90, updateInterval: 6500, digits: 1 });
  const turbineVibration = useRandomRange({ minValue: 41, maxValue: 48, updateInterval: 15000, digits: 1 });
  const mainBearingTemp = useRandomRange({ minValue: 40, maxValue: 60, updateInterval: 5500 });

  const tableData: TableData[] = [
    {
      label: 'TOTAL_THREADS',
      value: '32',
    },
    {
      label: 'FREQ_GOVERNOR',
      value: 'convervative',
    },
    {
      label: 'OUTPUT_RANGE',
      value: outputRange,
      unit: 'mw'
    },
    {
      label: 'STEAM_PRESSURE',
      value: steamPressure,
      valueColor: 'orange1',
      unit: 'bar'
    },
    {
      label: 'STEAM_TEMP',
      value: steamTemp,
      unit: '°c'
    },
    {
      label: 'TURBINE_SPEED',
      value: turbineSpeed,
      valueColor: 'yellow1',
      unit: 'rpm'
    },
    {
      label: 'TURBINE_VIBR',
      value: turbineVibration,
      unit: 'hz'
    },
    {
      label: 'TURBINE_HOTSPOT',
      value: turbineHotspot,
      valueColor: 'orange1',
      unit: '°c',
    },
    {
      label: 'MAIN_BEARING_TEMP',
      value: mainBearingTemp,
      unit: '°c'
    },
    {
      label: 'TOTAL_PWR',
      value: '13931',
      unit: 'mWh'
    },
    {
      label: 'UPTIME',
      value: '1',
      unit: 'days'
    },
  ];

  return (
    <Wrapper>
      <DottedTopBorderBox />
      <TableBodyWrapper>
        <DetailedTable data={tableData} />
      </TableBodyWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  background: '$cyan14',
  display: 'flex',
  flexDirection: 'column',
});

const TableBodyWrapper = styled('div', {
  // flex: 1,

  // overflow: 'auto', // Enables scroll
  // maxHeight: 210, // Enables scroll
});

export default TableMetrics2;
