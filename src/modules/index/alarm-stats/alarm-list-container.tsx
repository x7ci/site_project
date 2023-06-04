import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, WidgetWrapper, T } from '@/components/stitches';
import { styled } from 'stitches.config';
import { hydrPumpAeration, mainBearingVibr } from './alarms';
import AlarmView from './alarm-view';
import WidgetHeader from '@/components/widget/widget-header';

const AlarmListContainer = () => {
  return (
    <>
      <WidgetWrapper>
        <WidgetHeader>
          <T color="cyan1" weight={2}>ALARM </T>
          <T color="cyan1" weight={1} >LIST</T>
        </WidgetHeader>

        <Box css={{ h: 10 }} />

        <AlarmList>
          <AlarmView alarm={hydrPumpAeration} />
          <AlarmView alarm={mainBearingVibr} />
        </AlarmList>

      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

const AlarmList = styled('div', {
  height: 'calc($sizes$tileSize * 10)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
});

export default AlarmListContainer;
