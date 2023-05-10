import { styled } from 'stitches.config';

export const Button = styled('button', {
  border: 0,
  padding: '6px 32px 6px 32px',
  background: '$cyan13',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: '150ms',
  whiteSpace: 'nowrap',
  color: '$gray12',

  height: '24px',

  '&:hover': {
    transition: '150ms',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },

  variants: {
    background: {
      none: {
        background: 'initial'
      }
    },
    type: {
      primary: {
        color: '$cyan1',
        background: '$cyan13',
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
      },
      secondary: {
        color: '$cyan8',
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        },
      }
    },
    size: {
      s: {
        padding: '6px 24px 6px 24px',
      }
    },
    weight: {
      1: {
        fontWeight: '300'
      },
      2: {
        fontWeight: '400'
      },
      3: {
        fontWeight: '700'
      },
    },
    fontSize: {
      6: {
        fontSize: '$fontSizes$4',
      }
    }
  },
});
