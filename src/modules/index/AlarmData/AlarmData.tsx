import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import WarningIcon from '@/components/icons/WarningIcon';
import { Box, Text, TextPetch } from '@/components/stitches';
import { styled } from 'stitches.config';
import AlarmDataGrid from './AlarmDataGrid';

const alarmDescription: string = `The main bearing temperature of the unit has exceeded the upper limit of the recommended range of operational standards.
Check vibration analysis in monitoring system. Possible root causes: (1) geometrical imperfections during the manufacturing process, (2) defects on the rolling surfaces.`;

interface Props {

}

const AlarmData = ({ }: Props) => {
  return (
    <DottedTopBorderBox>
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
                <TextPetch color="yellow1" size="4" weight="4" >ID: 41241</TextPetch>
                <Box css={{ height: 4 }} />
                <TextPetch color="gray12" size="6" weight="4" >MAIN_BEARING_TEMP</TextPetch>
              </AlarmTitleWrapper>
            </AlarmHeaderWrapper>
            <Box css={{ height: 6 }} />
            <Box>
              <Text size="5" color="gray9">
                DUE DATE:{' '}
                <Text size="5" color="gray11" >2023-09-25</Text>
              </Text>
            </Box>
            <Box css={{ height: 8 }} />

            <DottedTopBorderBox withHorizontalLine />
            {/* <ButtonContainer>
            <Button
              weight={3}
              fontSize="6"
            >
              DETAILS
            </Button>
          </ButtonContainer> */}

          </AlarmInfoWrapper>
          <AlarmDataGridWrapper>
            <AlarmDataGrid />
          </AlarmDataGridWrapper>
        </MainDetailsWrapper>
        <DescriptionWrapper title={alarmDescription}>
          <Text size="5" color="gray9">
            DESC: {' '}
          </Text>
          <Text size="5" color="gray10" >{alarmDescription}</Text>
        </DescriptionWrapper>
      </Wrapper>
    </DottedTopBorderBox>
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
