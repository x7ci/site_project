import DottedTopBorderBox from '@/components/dotted-top-border-box';
import { Box, ColoredBox, DashboardComponentWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import LoadThresMetrics from './load-thres-metrics';
import TableMetrics from './table-metrics';
import TableMetrics2 from './table-metrics-2';

const RuntimeMetricsContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" >
          <T color="cyan1" weight={2}>RUNTIME  </T>
          <T color="cyan1" weight={1}>METRICS</T>
        </ColoredBox>
        <Box css={{ h: 10 }} />
        <LoadThresMetrics />
        <Box css={{ h: 30 }} />
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

export default RuntimeMetricsContainer;
