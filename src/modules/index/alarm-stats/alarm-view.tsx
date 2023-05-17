import CornerLinesBox from '@/components/corner-lines-box';
import WarningIcon from '@/components/icon/warning-icon';
import { Box, T, T2 } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmViewCodeGrid from './alarm-view-code-grid';
import { type Alarm } from './alarm-view.types';

interface Props {
  alarm: Alarm
}

const AlarmView = ({ alarm }: Props) => {
  return (
    <Box>
      <Wrapper>
        <CornerLinesBox topLeft bottomRight>
          <MainDetailsWrapper>
            <AlarmInfoWrapper>
              <AlarmHeaderWrapper>
                <IconContainer>
                  <WarningIcon color='red1' width={22} height={22} />
                </IconContainer>
                <AlarmTitleWrapper>
                  <T2 color="yellow1" size="4" weight="4" >ID: {alarm.id}</T2>

                  <Box css={{ h: 4 }} />

                  <T2 color="gray12" size={{ '@initial': '6', '@bp570': '4' }} weight="4" >{alarm.label}</T2>
                </AlarmTitleWrapper>
              </AlarmHeaderWrapper>

              <Box css={{ h: 6 }} />

              <Box>
                <T size="5" color="gray9">
                  DUE DATE:{' '}
                  <T size="5" color="gray11" >{alarm.dueDate}</T>
                </T>
              </Box>

              {/* <Box css={{ h: 8 }} /> */}
            </AlarmInfoWrapper>

            <AlarmViewCodeGridWrapper>
              <AlarmViewCodeGrid data={alarm.unitCodeData} />
            </AlarmViewCodeGridWrapper>
          </MainDetailsWrapper>

          <DescriptionWrapper title={alarm.description}>
            <T size="5" color="gray9">DESC: {' '}</T>
            <T size="5" color="gray10" >{alarm.description}</T>
          </DescriptionWrapper>
        </CornerLinesBox>
      </Wrapper>
    </Box>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  background: '$cyan14',
  justifyContent: 'center',
  padding: '0px 12px 0px 12px',
  height: '160px',

  transition: 'background 200ms ease-out',
  '&:hover': {
    background: '$cyan12',
  }
});

const MainDetailsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '0px 0 0 0'
});

const AlarmHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // gap: 8,
  // padding: '5px 0px 0px 0px',
});

const AlarmTitleWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column'
});

const AlarmInfoWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
});

const IconContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '48px',
  height: '30px',
});

const DescriptionWrapper = styled('div', {
  height: '58px',
  overflow: 'hidden',
  // whiteSpace: '',
});

const AlarmViewCodeGridWrapper = styled('div', {
  padding: '0px 2px 0px 0px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default AlarmView;
