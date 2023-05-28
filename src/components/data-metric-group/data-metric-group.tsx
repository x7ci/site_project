import { styled } from 'stitches.config';
import { ColoredBox, T } from '@/components/stitches';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import { type ReactNode } from 'react';
import IconFrame from '../icon-frame/icon-frame';

export interface DataMetricPair {
  label: string
  value: string | number
}

interface Props {
  icon: ReactNode
  title: string
  data: DataMetricPair[]
}

const DataMetricGroup = ({ icon, title, data }: Props) => {
  return (
    <Wrapper>
      <TopHeader>
        <IconFrame>
          {icon}
        </IconFrame>

        <CornerDotsBox css={{ flex: 1 }} onlyRight>
          <TitleContainer>
            <T color="gray12" size="5" weight={3}>{title}</T>
          </TitleContainer>
          <CornerDotsBox onlyRight />
        </CornerDotsBox>
      </TopHeader>

      {data.map((dataSet, i) => (
        <DataMetricContainer key={`${dataSet.label}:${dataSet.value}:${i}`}>
          <ColoredBox color="cyan12" size="2" textAlign="center">
            <T color="cyan2" size="5" weight={3}>{dataSet.label}</T>
          </ColoredBox>

          <ColoredBox textAlign="center">
            <T color="gray12" size="5" weight={3}>{dataSet.value}</T>
          </ColoredBox>
        </DataMetricContainer>
      ))}

    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  minWidth: 'calc($sizes$tileSize * 4)',
  gap: '8px',
});

const TopHeader = styled('div', {
  display: 'flex',
  height: '$sizes$tileSize',
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

export default DataMetricGroup;
