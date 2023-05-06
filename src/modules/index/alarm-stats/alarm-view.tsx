import DottedTopBorderBox from '@/components/dotted-top-border-box';
import WarningIcon from '@/components/icon/warning-icon';
import { Box, T, TextPetch } from '@/components/stitches';
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
        <MainDetailsWrapper>
          <AlarmInfoWrapper>
            <AlarmHeaderWrapper>
              <DottedTopBorderBox onlyLeft>
                <IconContainer>
                  <WarningIcon color='red1' width={22} height={22} />
                </IconContainer>
              </DottedTopBorderBox>
              <AlarmTitleWrapper>
                <TextPetch color="yellow1" size="4" weight="4" >ID: {alarm.id}</TextPetch>

                <Box css={{ h: 4 }} />

                <TextPetch color="gray12" size={{ '@initial': '6', '@bp570': '4' }} weight="4" >{alarm.label}</TextPetch>
              </AlarmTitleWrapper>
            </AlarmHeaderWrapper>

            <Box css={{ h: 6 }} />

            <Box>
              <T size="5" color="gray9">
                DUE DATE:{' '}
                <T size="5" color="gray11" >{alarm.dueDate}</T>
              </T>
            </Box>

            <Box css={{ h: 8 }} />

            <DottedTopBorderBox withHorizontalLine />

          </AlarmInfoWrapper>

          <AlarmViewCodeGridWrapper>
            <AlarmViewCodeGrid data={alarm.unitCodeData} />
          </AlarmViewCodeGridWrapper>
        </MainDetailsWrapper>

        <DescriptionWrapper title={alarm.description}>
          <T size="5" color="gray9">DESC: {' '}</T>
          <T size="5" color="gray10" >{alarm.description}</T>
        </DescriptionWrapper>
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
});

const MainDetailsWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  gap: 8,
  // maxHeight: '105px',
});

const AlarmHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 8,
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
  width: '34px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const DescriptionWrapper = styled('div', {
  height: '58px',
  overflow: 'hidden',
  // whiteSpace: '',
});

const AlarmViewCodeGridWrapper = styled('div', {
  padding: '0px 0px 0px 0px',
  // height: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default AlarmView;
