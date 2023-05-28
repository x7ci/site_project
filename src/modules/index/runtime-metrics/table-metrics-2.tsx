import DetailedTable, { type TableData } from '@/components/detailed-table/detailed-table';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import useRandomRange from '@/helpers/hooks/use-random-range';
import { styled } from 'stitches.config';

const TableMetrics2 = () => {
  const outputRange = useRandomRange({ minValue: 1100, maxValue: 1400, updateInterval: 7000, multiplyAdd: 6 });
  const steamPressure = useRandomRange({ minValue: 60, maxValue: 75, updateInterval: 10000, multiplyAdd: 3 });
  const steamTemp = useRandomRange({ minValue: 250, maxValue: 300, updateInterval: 5000, multiplyAdd: 4 });
  const turbineSpeed = useRandomRange({ minValue: 5122, maxValue: 10000, updateInterval: 6000, multiplyAdd: 8 });
  const turbineHotspot = useRandomRange({ minValue: 80, maxValue: 90, updateInterval: 6500, digits: 1, multiplyAdd: 4 });
  const turbineVibration = useRandomRange({ minValue: 41, maxValue: 48, updateInterval: 15000, digits: 1, multiplyAdd: 4 });
  const mainBearingTemp = useRandomRange({ minValue: 78, maxValue: 85, updateInterval: 5500, multiplyAdd: 4 });

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
      unit: '°c',
    },
    {
      label: 'MAIN_BEARING_TEMP',
      value: mainBearingTemp,
      valueColor: 'orange1',
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
      <CornerDotsBox />
      <DetailedTable data={tableData} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  background: '$cyan14',
  display: 'flex',
  flexDirection: 'column',
});

export default TableMetrics2;
