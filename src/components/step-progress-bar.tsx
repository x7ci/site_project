import { type ComponentProps } from 'react';
import { styled } from 'stitches.config';
import { type T } from '@/components/stitches';

export enum StepProgressBarColor {
  orange = 'orange',
  cyan = 'cyan',
}

export interface StepStateColor {
  primary: ComponentProps<typeof Text>['color']
  secondary: ComponentProps<typeof Text>['color']
  disabled: ComponentProps<typeof Text>['color']
};

export type StepState = keyof StepStateColor;

type StepProgressBarColorTypes = {
  [key in StepProgressBarColor]: StepStateColor
};

const stepColors: StepProgressBarColorTypes = {
  cyan: {
    primary: 'cyan1',
    secondary: 'orange1',
    disabled: 'cyan9',
  },
  orange: {
    primary: 'orange1',
    secondary: 'cyan1',
    disabled: 'cyan9'
  }
};

export interface StepProgressBarData {
  color: StepProgressBarColor
  state: StepState
}

interface Props {
  data: StepProgressBarData[]
}

const StepProgressBar = ({ data }: Props) => {
  return (
    <Wrapper>
      <BarGroup>
        {data.map((dataItem, i) => (
          <SingleBar
            key={`${dataItem.color}-${dataItem.state}-${i}`}
            css={{ background: `$${stepColors[dataItem.color][dataItem.state]}` }}
          />
        ))}
      </BarGroup>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  flex: 1,
});

const SingleBar = styled('div', {
  height: 4,
  flex: 1,
  background: '$cyan1'
});

const BarGroup = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '8px',
});

export default StepProgressBar;
