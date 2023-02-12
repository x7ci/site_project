import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

export const Table = styled('table', {
  display: 'table',
  borderCollapse: 'collapse',
  overflow: 'auto',
  // border: '0px red',

  variants: {
    borderColor: {
      cyan1: {
        borderCollapse: 'separate',
        borderSpacing: '1px',
      }
    },
    width: {
      'max': {
        width: '100%'
      }
    },
    size: {
      1: {
        height: '210px'
      },
    },
    backgroundColor: {
      cyan11: {
        backgroundColor: '$cyan11',
      }
    }
  }
});

export const TableBody = styled('tbody', {

});

const flashAnimation = keyframes({
  '0%': {
    background: '$cyan9',
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
    background: '$cyan12'
  },
  variants: {
    animation: {
      flash: {
        animation: `${flashAnimation} 1500ms`
      }

    }
  }
  // '&:nth-child(odd)': {
  //     background: '$cyan14'
  // }
});

export const TableCell = styled('td', {
  padding: '0px 12px 0px 12px',
  variants: {
    border: {
      1: {
        border: '1px solid'
      }
    },
    align: {
      center: {
        textAlign: 'center',
        verticalAlign: 'middle'
      }
    },
    backgroundColor: {
      rootBackground: {
        backgroundColor: '$rootBackground',
      },
      cyan10: {
        backgroundColor: '$cyan10',
      }
    },
    size: {
      unset: {
        padding: 'unset',
      },
      1: {
        padding: 'unset',
        width: '19px',
        height: '19px',
      }
      // 'fixed-30px': {
      //   width: '20px',
      //   height: '20px',
      //   tableLayout: 'fixed',
      //   overflow: 'hidden',
      //   wordWrap: 'break-word',
      // }
    }
  }
});
