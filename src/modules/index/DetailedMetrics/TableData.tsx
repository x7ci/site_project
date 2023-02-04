import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Table, TableBody, TableCell, TableRow } from '@/components/stitches';
import useRandomRange from '@/helpers/hooks/useRandomRange';
import { styled } from 'stitches.config';
import { Text } from '../../../components/stitches/Text';

const TableData = () => {
  const coreTempAvg = useRandomRange({ minValue: 150, maxValue: 190, updateInterval: 5000 });
  const coreThreAvg = useRandomRange({ minValue: 25, maxValue: 50, updateInterval: 5000 });
  const coreLoadMax = useRandomRange({ minValue: 73, maxValue: 97, updateInterval: 5000 });
  const cacheLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 5000, digits: 0 });
  const dramLat = useRandomRange({ minValue: 40, maxValue: 70, updateInterval: 5000, digits: 0 });
  const waterPumpSp = useRandomRange({ minValue: 620, maxValue: 800, updateInterval: 5000 });
  const yawAxisDeg = useRandomRange({ minValue: 14, maxValue: 25, updateInterval: 5000 });
  const yawAxisVel = useRandomRange({ minValue: 50, maxValue: 60, updateInterval: 5000 });
  const currOutput = useRandomRange({ minValue: 100, maxValue: 126, updateInterval: 5000 });

  return (
    <Wrapper>
      <DottedTopBorderBox />
      <TableBodyWrapper>
        <Table size="1">
          <TableBody>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">CORE_TEMP_AVG</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{coreTempAvg}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">°F</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">CORE_THRE_AVG</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{coreThreAvg}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">%</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">CORE_LOAD_MAX</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{coreLoadMax}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">%</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">CACHE_LAT</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{cacheLat}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">ms</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">DRAM_LAT</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{dramLat}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">ms</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">WATER_PUMP_SP</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{waterPumpSp}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">rpm</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">YAW_AXIS_DEG</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{yawAxisDeg}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">°c</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">YAW_AXIS_VEL</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">{yawAxisVel}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">deg/s</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">CURR_OUTPUT</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="orange1">{currOutput}</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">w</Text>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Text size="4" color="gray10">MAX_OUTPUT</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="cyan">130</Text>
              </TableCell>
              <TableCell>
                <Text size="4" color="gray10">w</Text>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
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

export default TableData;
