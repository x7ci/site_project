import { styled } from 'stitches.config';

export const WidgetWrapper = styled('div', {
  height: 'calc($sizes$tileSize * 11)',
  // overflow: 'hidden', // Use to check for overflowing components
});

export const WidgetInfoTextWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const WidgetInfoTextRow = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  variants: {
    align: {
      bottom: {
        alignItems: 'end',
      },
      top: {
        alignItems: 'start',
      },
    }
  }
});

export const WidgetInfoTextGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  zIndex: 1,
  variants: {
    align: {
      right: {
        alignItems: 'end'
      },
      left: {
        alignItems: 'start'
      }
    }
  }
});
