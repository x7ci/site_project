import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

export const Table = styled('table', {
  borderCollapse: 'collapse',
  display: 'table',
  width: '100%',
  overflow: 'auto',

  variants: {
    size: {
      1: {
        height: '210px'
      }
    }
  }
});

export const TableBody = styled('tbody', {

});

const flashAnimation = keyframes({
  '0%': {
    background: '$cyan3',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    transform: 'none',
    background: 'unset',
  },
});

export const TableRow = styled('tr', {
  transition: '250ms',
  '&:hover': {
    background: '$cyan4'
  },
  variants: {
    animation: {
      flash: {
        animation: `${flashAnimation} 1500ms`
      }

    }
  }
  // '&:nth-child(odd)': {
  //     background: '$cyan2'
  // }
});

export const TableCell = styled('td', {
  padding: '0px 12px 0px 12px',

  variants: {
    size: {
      unset: {
        padding: 'unset',
      }
    }
  }
});
