/* eslint-disable react/display-name */
import { createContext, useContext, useState, type ReactNode } from 'react';
import { styled } from 'stitches.config';
import MoveIcon from '../icon/move-icon';
import { Box, ColoredBox } from '../stitches';

interface WidgetHeaderContextType {
  isHovered: boolean
  setIsHovered: (theme: boolean) => void
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const WidgetHeaderContext = createContext<WidgetHeaderContextType>(undefined!);

const WidgetHeaderProvider = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <WidgetHeaderContext.Provider value={{ isHovered, setIsHovered }}>
      {children}
    </WidgetHeaderContext.Provider>
  );
};

interface Props {
  children: ReactNode
}

const WidgetHeader = ({ children }: Props) => {
  return (
    <WidgetHeaderProvider>
      <WidgetHeaderContent>
        {children}
      </WidgetHeaderContent>
    </WidgetHeaderProvider>
  );
};

const WidgetHeaderContent = ({ children }: { children: ReactNode }) => {
  const { setIsHovered } = useContext(WidgetHeaderContext);

  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);

  return (
    <ColoredBox
      className="widget-draggable-handle"
      color={isMouseDown ? 'cyan10' : 'cyan14'}
      size="max"
      height={20}
      cursor="move"
      title="Click & hold to drag"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => !isMouseDown && setIsHovered(false)}
      onMouseDown={() => setIsMouseDown(true)}
      onMouseUp={() => setIsMouseDown(false)}
    >
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </ColoredBox>
  );
};

const ContentWrapper = styled('div', {
  position: 'relative'
});

WidgetHeader.Right = ({ children }: { children: ReactNode }) => (
  <Box css={{ position: 'absolute', right: 0 }}>
    {children}
  </Box>
);

WidgetHeader.Left = ({ children }: { children: ReactNode }) => {
  const { isHovered } = useContext(WidgetHeaderContext);

  return (
    <Box css={{ position: 'absolute', left: 0, display: 'flex', gap: '6px' }}>
      <Box>
        {children}
      </Box>
      <Box css={{ display: 'flex', alignItems: 'center', opacity: isHovered ? 1 : 0, transition: 'opacity 100ms ease-out' }}>
        <MoveIcon width={15} height={15} color="cyan1" />
      </Box>
    </Box>
  );
};

export default WidgetHeader;
