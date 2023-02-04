import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import DetailedMetrics from './DetailedMetrics';
import TableMetrics from './TableMetrics';
import TableMetrics2 from './TableMetrics2';

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
        <TableMetrics />
        <TableMetrics2 />
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
