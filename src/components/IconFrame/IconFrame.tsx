import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import DottedTopBorderBox from '../DottedTopBorderBox';
import { type CssProps } from '../stitches';

interface Props {
  children: ReactNode
  css: CssProps
}

const IconFrame = ({ children, css }: Props) => {
  return (
    <DottedTopBorderBox>
      <IconContainer css={css}>
        {children}
      </IconContainer>
      <DottedTopBorderBox />
    </DottedTopBorderBox>
  );
};

IconFrame.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {

});

const IconContainer = styled('div', {
  width: '34px',
  height: '30px',
  background: '$cyan12',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default IconFrame;
