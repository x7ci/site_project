import CornerDotsBox from '@/components/ui/corner-dots-box';
import LiveDataCircle from '@/components/live-data-circle/live-data-circle';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import { ColoredBox } from '@/components/stitches/colored-box';
import { styled } from 'stitches.config';
import HealthMonitor from './health-monitor';
import { type EChartsRef } from '@/components/echarts/echarts';
import { type ForwardRefRenderFunction, forwardRef } from 'react';

const HealthMonitorContainer: ForwardRefRenderFunction<EChartsRef> = (_, ref) => {
  return (
    <>
      <WidgetWrapper>
        <ColoredBox color="cyan14" size="max" height={20} >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <T color="cyan1" weight={2}>HEALTH </T>
              <T color="cyan1" weight={1}>MONITOR</T>
            </Box>
            <TitleTextRow>
              <T size="5" color="gray8" weight={3}>LIVE FEED</T>
              <LiveDataCircle />
            </TitleTextRow>
          </Box>
        </ColoredBox>
        <Box css={{ h: 10 }} />
        <CornerDotsBox />
        <HealthMonitor
          ref={ref}
        />
      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

const TitleTextRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  alignItems: 'center',
});

export default forwardRef(HealthMonitorContainer);
