import DottedTopBorderBox from '@/components/dotted-top-border-box';
import LiveDataCircle from '@/components/live-data-circle';
import { Box, WidgetWrapper, T } from '@/components/stitches';
import { ColoredBox } from '@/components/stitches/colored-box';
import { styled } from 'stitches.config';
import HealthMonitor from './health-monitor';

const HealthMonitorContainer = () => {
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
        <DottedTopBorderBox />
        <HealthMonitor />
      </WidgetWrapper>
      <DottedTopBorderBox />
    </>
  );
};

const TitleTextRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '6px',
  alignItems: 'center',
});

export default HealthMonitorContainer;
