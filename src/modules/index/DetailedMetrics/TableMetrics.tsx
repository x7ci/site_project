import DetailedTable, { type TableData } from '@/components/DetailedTable';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import useRandomRange from '@/helpers/hooks/useRandomRange';
import { styled } from 'stitches.config';

const TableMetrics = () => {
  const coreTempAvg = useRandomRange({ minValue: 150, maxValue: 190, updateInterval: 8400, multiplyAdd: 4 });
  const coreThreAvg = useRandomRange({ minValue: 25, maxValue: 50, updateInterval: 10200, multiplyAdd: 3 });
  const coreLoadMax = useRandomRange({ minValue: 73, maxValue: 97, updateInterval: 12050, multiplyAdd: 3 });
  const cacheLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 10900, digits: 0, multiplyAdd: 3 });
  const dramLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 16150, digits: 0, multiplyAdd: 3 });
  const waterPumpSp = useRandomRange({ minValue: 620, maxValue: 800, updateInterval: 19000, multiplyAdd: 8 });
  const yawAxisDeg = useRandomRange({ minValue: 14, maxValue: 25, updateInterval: 11200, multiplyAdd: 2 });
  const yawAxisVel = useRandomRange({ minValue: 50, maxValue: 60, updateInterval: 10550, multiplyAdd: 2 });
  const currOutput = useRandomRange({ minValue: 100, maxValue: 126, updateInterval: 8888, multiplyAdd: 3 });

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
      <DetailedTable data={tableData} />
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  background: '$cyan14',
  display: 'flex',
  flexDirection: 'column',
});

export default TableMetrics;
