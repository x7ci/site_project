import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, DashboardComponentWrapper, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import { mainBearingTemp, mainBearingVibr } from './Alarm';
import AlarmData from './AlarmData';

const AlarmViewContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
        <ColoredBox color="cyan14" size="max" >
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Text color="cyan1" weight={2}>ALARM </Text>
              <Text color="cyan1" weight={1} >LIST</Text>
            </Box>
          </Box>
        </ColoredBox>

        <Box css={{ height: 10 }} />

        <AlarmList>
          <AlarmData alarm={mainBearingVibr} />
          <AlarmData alarm={mainBearingTemp} />
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
  // scrollbarWidth: 'auto',
  flexDirection: 'column',
  // padding: '0px 8px 0px 8px',
  gap: '30px',
});

export default AlarmViewContainer;
