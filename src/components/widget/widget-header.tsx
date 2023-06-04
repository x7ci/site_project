/* eslint-disable react/display-name */
import { type ReactNode } from 'react';
import { Box, ColoredBox } from '../stitches';

interface Props {
  children: ReactNode
}

const WidgetHeader = ({ children }: Props) => {
  return (
    <ColoredBox
      className="widget-draggable-handle"
      color="cyan14"
      size="max"
      height={20}
      cursor="move"
    >
      {children}
    </ColoredBox>
  );
};

WidgetHeader.SpaceBetween = ({ children }: { children: ReactNode }) => (
  <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
    {children}
  </Box>
);

export default WidgetHeader;
