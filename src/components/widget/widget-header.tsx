/* eslint-disable react/display-name */
import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import MoveIcon from '../icon/move-icon';
import { Box, ColoredBox } from '../stitches';

interface Props {
  children: ReactNode
}

const WidgetHeader = ({ children }: Props) => {
  return (
    <CustomColoredBox
      className="widget-draggable-handle"
      title="Click & hold to drag"
      color="cyan14"
      size="max"
      height={20}
      cursor="move"
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </CustomColoredBox>
  );
};

const ContentWrapper = styled('div', {
  position: 'relative'
});

const CustomColoredBox = styled(ColoredBox, {
  transition: 'background 150ms ease-out',
  '$$iconOpacity': 0,
  '&:hover': {
    '$$iconOpacity': 1,
  },
  '&:active': {
    '$$iconOpacity': 1,
    background: '$cyan10'
  }
});

WidgetHeader.Right = ({ children }: { children: ReactNode }) => (
  <Box css={{ position: 'absolute', right: 0 }}>
    {children}
  </Box>
);

WidgetHeader.Left = ({ children }: { children: ReactNode }) => {
  return (
    <Box css={{ position: 'absolute', left: 0, display: 'flex', gap: '6px' }}>
      <Box>
        {children}
      </Box>
      <Box css={{ display: 'flex', alignItems: 'center', opacity: '$$iconOpacity', transition: 'opacity 100ms ease-out' }}>
        <MoveIcon width={15} height={15} color="cyan1" />
      </Box>
    </Box>
  );
};

export default WidgetHeader;
