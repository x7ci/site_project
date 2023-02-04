import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import FilledBox from './FilledBox';

interface Props {
  children: ReactNode
  spacing?: string
}

const TextLabel = ({ children, spacing }: Props) => {
  return (
    <Wrapper>
      <FilledBox />
      <div style={{ width: spacing }} />
      {children}
    </Wrapper>
  );
};

TextLabel.defaultProps = {
  spacing: '5px'
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

export default TextLabel;
