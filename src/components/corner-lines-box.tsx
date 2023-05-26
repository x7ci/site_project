import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import { type StitchesCss } from './stitches';

interface Props {
  children: ReactNode
  topHorizontalLine?: boolean
  bottomHorizontalLine?: boolean
  topLeft?: boolean
  topRight?: boolean
  bottomLeft?: boolean
  bottomRight?: boolean
  bottom?: boolean
  lineLength?: string
  top?: boolean
  css?: StitchesCss
}

const CornerLinesBox = ({ children, topHorizontalLine, bottomHorizontalLine, topLeft, topRight, bottomLeft, bottomRight, bottom, top, lineLength, css }: Props) => {
  if (bottom) {
    bottomLeft = true;
    bottomRight = true;
  }

  if (top) {
    topLeft = true;
    topRight = true;
  }

  return (
    <Wrapper css={{ ...css }}>
      <CornerLinesBoxWrapper verticalAlign="top">
        {topHorizontalLine && (
          <HorizontalLineWrapper>
            <HorizontalLine />
          </HorizontalLineWrapper>
        )}
        <LineSeparator>
          <LineWrapper align="topLeft">
            {topLeft && (
              <>
                <Line variant="vertical" css={{ '$$lineLength': lineLength }} />
                <Line variant="horizontal" css={{ '$$lineLength': lineLength }} />
              </>
            )}
          </LineWrapper>
          <LineWrapper align="topRight">
            {topRight && (
              <>
                <Line variant="horizontal" css={{ '$$lineLength': lineLength }} />
                <Line variant="vertical" css={{ '$$lineLength': lineLength }} />
              </>
            )}
          </LineWrapper>
        </LineSeparator>
      </CornerLinesBoxWrapper>
      <CornerLinesBoxWrapper verticalAlign="bottom">
        {bottomHorizontalLine && (
          <HorizontalLineWrapper>
            <HorizontalLine />
          </HorizontalLineWrapper>
        )}
        <LineSeparator>
          <LineWrapper align="bottomLeft">
            {bottomLeft && (
              <>
                <Line variant="vertical" css={{ '$$lineLength': lineLength }} />
                <Line variant="horizontal" css={{ '$$lineLength': lineLength }} />
              </>
            )}
          </LineWrapper>
          <LineWrapper align="bottomRight">
            {bottomRight && (
              <>
                <Line variant="horizontal" css={{ '$$lineLength': lineLength }} />
                <Line variant="vertical" css={{ '$$lineLength': lineLength }} />
              </>
            )}
          </LineWrapper>
        </LineSeparator>
      </CornerLinesBoxWrapper>
      {children}
    </Wrapper>
  );
};

CornerLinesBox.defaultProps = {
  withHorizontalLine: false,
  lineLength: '7px',
} as Partial<Props>;

const Wrapper = styled('div', {
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between',
  position: 'relative',
});

const CornerLinesBoxWrapper = styled('div', {
  position: 'absolute',
  right: 0,
  left: 0,

  variants: {
    verticalAlign: {
      top: {
        top: 0,
        bottom: 'unset',
      },
      bottom: {
        top: 'unset',
        bottom: 0,
      }
    }
  }
});

const LineSeparator = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const LineWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    align: {
      topLeft: {
        flexDirection: 'row',
      },
      topRight: {
      },
      bottomLeft: {
        alignItems: 'end',
      },
      bottomRight: {
        alignItems: 'end',
      },
    },
  },
});

const Line = styled('div', {
  backgroundColor: '$cyan1',
  variants: {
    variant: {
      vertical: {
        height: '$$lineLength',
        width: '1px',
      },
      horizontal: {
        height: '1px',
        width: '$$lineLength',
      }
    }
  },
});

const HorizontalLineWrapper = styled('div', {
  position: 'relative'
});

const HorizontalLine = styled('div', {
  height: '1px',
  position: 'absolute',
  top: 0,
  right: 50,
  left: 50,
  bottom: 0,
  borderRadius: '4px',
  backgroundColor: '$cyan1',
});

export default CornerLinesBox;
