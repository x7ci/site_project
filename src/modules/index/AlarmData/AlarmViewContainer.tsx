import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, DashboardComponentWrapper, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import { hydrPumpAeration, mainBearingVibr } from './Alarm';
import AlarmData from './AlarmData';

const AlarmViewContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <Text color="cyan1" weight={2}>ALARM </Text>
              <Text color="cyan1" weight={1} >LIST</Text>
            </Box>
          </Box>

        </ColoredBox>

        <Box css={{ height: 10 }} />

        <AlarmList>
          <AlarmData alarm={hydrPumpAeration} />
          <AlarmData alarm={mainBearingVibr} />
        </AlarmList>

      </DashboardComponentWrapper>
      <DottedTopBorderBox />
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

export default AlarmViewContainer;
