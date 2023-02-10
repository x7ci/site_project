import { type ComponentProps } from 'react';
import { type Box } from './stitches';
import { styled } from 'stitches.config';

interface Props {
  percent: number
  backgroundColor: ComponentProps<typeof Box>['color']
  filledColor: ComponentProps<typeof Box>['color']
  height: string
}

const ProgressBar = ({ percent, backgroundColor, filledColor, height }: Props) => {
  return (
    <Wrapper css={{ backgroundColor, height }}>
      <FilledProgress
        css={{ width: `${percent}%`, backgroundColor: filledColor }}
      />
    </Wrapper >
  );
};

ProgressBar.defaultProps = {
  height: '6px',
  backgroundColor: '$cyan9',
  filledColor: '$cyan1',
} as Partial<Props>;

const Wrapper = styled('div', {
  width: '100%',
  backgroundColor: '$cyan9',
  borderRadius: '10px',
});

const FilledProgress = styled('div', {
  height: '100%',
  borderRadius: '10px',
  transition: '200ms',
});

export default ProgressBar;
