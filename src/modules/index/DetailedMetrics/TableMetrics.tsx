import DetailedTable, { type TableData } from '@/components/DetailedTable';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import useRandomRange from '@/helpers/hooks/useRandomRange';
import { styled } from 'stitches.config';

const TableMetrics = () => {
  const coreTempAvg = useRandomRange({ minValue: 150, maxValue: 190, updateInterval: 8400 });
  const coreThreAvg = useRandomRange({ minValue: 25, maxValue: 50, updateInterval: 10200 });
  const coreLoadMax = useRandomRange({ minValue: 73, maxValue: 97, updateInterval: 12050 });
  const cacheLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 10900, digits: 0 });
  const dramLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 16150, digits: 0 });
  const waterPumpSp = useRandomRange({ minValue: 620, maxValue: 800, updateInterval: 19000 });
  const yawAxisDeg = useRandomRange({ minValue: 14, maxValue: 25, updateInterval: 11200 });
  const yawAxisVel = useRandomRange({ minValue: 50, maxValue: 60, updateInterval: 10550 });
  const currOutput = useRandomRange({ minValue: 100, maxValue: 126, updateInterval: 8888 });

  const tableData: TableData[] = [
    {
      label: 'CORE_TEMP_AVG',
      value: coreTempAvg,
      unit: '°F'
    },
    {
      label: 'CORE_THRE_AVG',
      value: coreThreAvg,
      unit: '%'
    },
    {
      label: 'CORE_LOAD_MAX',
      value: coreLoadMax,
      unit: '%'
    },
    {
      label: 'CACHE_LAT',
      value: cacheLat,
      unit: 'ms'
    },
    {
      label: 'DRAM_LAT',
      value: dramLat,
      unit: 'ms'
    },
    {
      label: 'WATER_PUMP_SP',
      value: waterPumpSp,
      unit: 'rpm'
    },
    {
      label: 'YAW_AXIS_DEG',
      value: yawAxisDeg,
      unit: '°c'
    },
    {
      label: 'YAW_AXIS_VEL',
      value: yawAxisVel,
      unit: 'deg/s',
    },
    {
      label: 'CURR_OUTPUT',
      value: currOutput,
      valueColor: 'orange1',
      unit: 'w'
    },
    {
      label: 'MAX_OUTPUT',
      value: '13931',
      unit: 'w'
    },
  ];

  return (
    <Wrapper>
      <DottedTopBorderBox />
      <TableBodyWrapper>
        <DetailedTable data={tableData} />
      </TableBodyWrapper>
      <DottedTopBorderBox />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  background: '$cyan2',
  display: 'flex',
  flexDirection: 'column',
});

const TableBodyWrapper = styled('div', {
  // flex: 1,

  // overflow: 'auto', // Enables scroll
  // maxHeight: 210, // Enables scroll
});

export default TableMetrics;
