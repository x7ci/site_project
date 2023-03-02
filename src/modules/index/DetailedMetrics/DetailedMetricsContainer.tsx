import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, DashboardComponentWrapper, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import DetailedMetrics from './DetailedMetrics';
import TableMetrics from './TableMetrics';
import TableMetrics2 from './TableMetrics2';

const DetailedMetricsContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Text color="cyan1" weight={2}>RUNTIME  </Text>
              <Text color="cyan1" weight={1}>METRICS</Text>
            </Box>
          </Box>
        </ColoredBox>
        <Box css={{ height: 10 }} />
        <DetailedMetrics />
        <Box css={{ height: 30 }} />
        <TableDataRow>
          <TableMetrics />
          <TableMetrics2 />
        </TableDataRow>
      </DashboardComponentWrapper>
      <DottedTopBorderBox />
    </>
  );
};

const TableDataRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  '@bp570': {
    gap: '10px',
  },
  '& > *': {
    flex: 1,
    // minWidth: '200px'
  }
});

export default DetailedMetricsContainer;
