import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import DottedTopBorderBox from '../DottedTopBorderBox';
import { type StitchesColor, type StitchesCss } from '../stitches';

interface Props {
  children: ReactNode
  css: StitchesCss
  backgroundColor?: StitchesColor
  disableBackground: boolean
}

const IconFrame = ({ children, css, backgroundColor = 'cyan12', disableBackground = false }: Props) => {
  return (
    <Wrapper>
      <DottedTopBorderBox>
        <IconContainer css={{ ...css, backgroundColor: disableBackground ? undefined : `$${backgroundColor}` }}>
          {children}
        </IconContainer>
        <DottedTopBorderBox />
      </DottedTopBorderBox>
    </Wrapper>
  );
};

IconFrame.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  // width: '34px',
  // height: '30px',
});

const IconContainer = styled('div', {
  width: '34px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

export default IconFrame;
