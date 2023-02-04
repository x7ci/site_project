import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import DetailedMetrics from './DetailedMetrics';
import TableData from './TableData';
import TableData2 from './TableData2';

const DetailedMetricsContainer = () => {
  return (
    <Box>
      <ColoredBox color="cyan2" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan" weight={2}>RUNTIME  </Text>
            <Text color="cyan" weight={1}>METRICS</Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <DetailedMetrics />
      <Box css={{ height: 30 }} />
      <TableDataRow>
        <TableData />
        <TableData2 />
      </TableDataRow>
    </Box>
  );
};

const TableDataRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  '& > *': {
    flex: 1,
    minWidth: '200px'
    // maxWidth: '320px'
  }
  // justifyContent: ''

});

export default DetailedMetricsContainer;
