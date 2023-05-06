import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import { type StitchesCss } from './stitches';

interface Props {
  children: ReactNode
  withHorizontalLine: boolean
  onlyLeft: boolean
  onlyRight: boolean
  css: StitchesCss
}

const DottedTopBorderBox = ({ children, withHorizontalLine, onlyLeft, onlyRight, css }: Props) => {
  return (
    <Wrapper css={{ ...css }}>
      <DottedBorderBox>
        <DottedSeparatedBarWrapper>
          {withHorizontalLine && (
            <HorizontalLineWrapper>
              <HorizontalLine />
            </HorizontalLineWrapper>
          )}
          <DottedSeparatedBar>
            <Dot show={!onlyRight} />
            <Dot show={!onlyLeft} />
          </DottedSeparatedBar>
        </DottedSeparatedBarWrapper>
        {children}
      </DottedBorderBox>
    </Wrapper>
  );
};

DottedTopBorderBox.defaultProps = {
  withHorizontalLine: false
} as Partial<Props>;

const Wrapper = styled('div', {

});

const DottedBorderBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
});

const DottedSeparatedBarWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  right: 0,
  left: 0,
  // bottom: 0, // Stretches to the bottom
});

const DottedSeparatedBar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Dot = styled('div', {
  height: '3px',
  width: '3px',
  backgroundColor: '$cyan1',
  borderRadius: '50%',
  display: 'inline-block',
  zIndex: 2,
  variants: {
    show: {
      false: {
        opacity: '0'
      }
    }
  }
});

const HorizontalLineWrapper = styled('div', {
  position: 'relative'
});

const HorizontalLine = styled('div', {
  height: '2px',
  position: 'absolute',
  top: 0,
  right: 50,
  left: 50,
  bottom: 0,
  borderRadius: '4px',
  backgroundColor: '$cyan1',
});

export default DottedTopBorderBox;
