import { styled } from 'stitches.config';
import { ColoredBox, Text } from '@/components/stitches';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { type ReactNode } from 'react';

interface Props {
  icon: ReactNode
  title: string
}

const SingleDataMetric = ({ icon, title }: Props) => {
  return (
    <Wrapper>
      <TopHeader>
        <DottedTopBorderBox>
          <IconContainer>
            {icon}
          </IconContainer>
          <DottedTopBorderBox />
        </DottedTopBorderBox>

        <DottedTopBorderBox css={{ flex: 1 }} onlyRight>
          <TitleContainer>
            <Text color="cyanLight1" size="5" weight={3}>{title}</Text>
          </TitleContainer>
          <DottedTopBorderBox onlyRight />

        </DottedTopBorderBox>
      </TopHeader>
      <DataMetricContainer>
        <ColoredBox color="cyan14" flex={1} textAlign="center">
          <Text color="cyan1" size="5" weight={3}>AVG </Text>
        </ColoredBox>
        <ColoredBox color="cyan9" flex={3} textAlign="center">
          <Text color="cyanLight1" size="5" weight={3}>AVG </Text>
        </ColoredBox>
      </DataMetricContainer>

    </Wrapper>
  );
};

SingleDataMetric.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 'calc($sizes$tileSize * 6)',
  gap: '8px',
});

const TopHeader = styled('div', {
  display: 'flex',
  height: '$sizes$tileSize',
  flex: 1,
  alignItems: 'center',
  background: '$cyan12'
});

const IconContainer = styled('div', {
  width: '34px',
  height: '30px',
  background: '$cyan12',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '$sizes$tileSize',
});

const DataMetricContainer = styled('div', {
  display: 'flex',
  gap: '8px',
});

export default SingleDataMetric;
