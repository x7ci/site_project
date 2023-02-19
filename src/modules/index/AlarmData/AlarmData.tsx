import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import WarningIcon from '@/components/icons/WarningIcon';
import { Box, Text, TextPetch } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmDataGrid from './AlarmDataGrid';
import { type Alarm } from './AlarmDataTypes';

interface Props {
  alarm: Alarm
}

const AlarmData = ({ alarm }: Props) => {
  return (
    <Box>
      <Wrapper>
        <MainDetailsWrapper>
          <AlarmInfoWrapper>
            <AlarmHeaderWrapper>
              <DottedTopBorderBox onlyLeft>
                <IconContainer>
                  <WarningIcon color='red1' scale={.9} size={21} />
                </IconContainer>
              </DottedTopBorderBox>
              <AlarmTitleWrapper>
                <TextPetch color="yellow1" size="4" weight="4" >ID: {alarm.id}</TextPetch>
                <Box css={{ height: 4 }} />
                <TextPetch color="gray12" size="6" weight="4" >{alarm.label}</TextPetch>
              </AlarmTitleWrapper>
            </AlarmHeaderWrapper>
            <Box css={{ height: 6 }} />
            <Box>
              <Text size="5" color="gray9">
                DUE DATE:{' '}
                <Text size="5" color="gray11" >{alarm.dueDate}</Text>
              </Text>
            </Box>
            <Box css={{ height: 8 }} />

            <DottedTopBorderBox withHorizontalLine />

          </AlarmInfoWrapper>
          <AlarmDataGridWrapper>
            <AlarmDataGrid data={alarm.unitCodeData} />
          </AlarmDataGridWrapper>
        </MainDetailsWrapper>
        <DescriptionWrapper title={alarm.description}>
          <Text size="5" color="gray9">
            DESC: {' '}
          </Text>
          <Text size="5" color="gray10" >{alarm.description}</Text>
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

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  // gap: '17px',
  alignItems: 'center',
});

const AlarmDataGridWrapper = styled('div', {
  padding: '0px 0px 0px 0px',
  // height: '90px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default AlarmData;
