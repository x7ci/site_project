import CornerLinesBox from '@/components/ui/corner-lines-box';
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
    <Wrapper>
      <ContentWrapper>

        <MainDetailsWrapper>
          <AlarmInfoWrapper>
            <CornerLinesBox topLeft />
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

            <Box css={{ h: 12 }} />

            <Box>
              <T size="5" color="gray9">
                DUE DATE:{' '}
                <T size="5" color="gray11" >{alarm.dueDate}</T>
              </T>
            </Box>

          </AlarmInfoWrapper>

          <AlarmViewCodeGridWrapper>
            <AlarmViewCodeGrid data={alarm.unitCodeData} />
          </AlarmViewCodeGridWrapper>
        </MainDetailsWrapper>

        <Box>
          <DescriptionWrapper title={alarm.description}>
            <T size="5" color="gray9">DESC: {' '}</T>
            <T size="5" color="gray10" >{alarm.description}</T>
          </DescriptionWrapper>
          <CornerLinesBox bottomRight />
        </Box>

      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  height: '160px',
  background: '$cyan14',

  transition: 'background 200ms ease-out',
  '&:hover': {
    background: '$cyan12',
  }
});

const ContentWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px',
  gap: '10px',
  justifyContent: 'space-between',
});

const MainDetailsWrapper = styled('div', {
  display: 'flex',
  flex: 1,
});

const DescriptionWrapper = styled('div', {
  flex: 1,
  maxHeight: '58px',
  overflow: 'hidden',
  marginRight: '26px',
});

const AlarmHeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '4px 0px 0px 0px',
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

const AlarmViewCodeGridWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default AlarmView;
