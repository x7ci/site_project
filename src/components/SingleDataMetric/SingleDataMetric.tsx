import { styled } from 'stitches.config';
import { ColoredBox, Text } from '@/components/stitches';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { type ReactNode } from 'react';
import IconFrame from '../IconFrame/IconFrame';

export interface DataMetricPair {
  label: string
  value: string | number
}

interface Props {
  icon: ReactNode
  title: string
  data: DataMetricPair[]
}

const SingleDataMetric = ({ icon, title, data }: Props) => {
  return (
    <Wrapper>
      <TopHeader>
        <IconFrame>
          {icon}
        </IconFrame>

        <DottedTopBorderBox css={{ flex: 1 }} onlyRight>
          <TitleContainer>
            <Text color="gray12" size="5" weight={3}>{title}</Text>
          </TitleContainer>
          <DottedTopBorderBox onlyRight />
        </DottedTopBorderBox>
      </TopHeader>

      {data.map((dataSet, i) => (
        <DataMetricContainer key={`${dataSet.label}:${dataSet.value}:${i}`}>
          <ColoredBox color="cyan12" size="2" textAlign="center">
            <Text color="cyan2" size="5" weight={3}>{dataSet.label}</Text>
          </ColoredBox>

          <ColoredBox textAlign="center">
            <Text color="gray12" size="5" weight={3}>{dataSet.value}</Text>
          </ColoredBox>
        </DataMetricContainer>
      ))}

    </Wrapper>
  );
};

SingleDataMetric.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'calc($sizes$tileSize * 4)',
  gap: '8px',
});

const TopHeader = styled('div', {
  display: 'flex',
  height: '$sizes$tileSize',
  // flex: 1,
  alignItems: 'center',
  background: '$cyan12'
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
