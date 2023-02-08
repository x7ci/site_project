import { styled } from "stitches.config";

export const Button = styled('button', {
  border: 0,
  padding: '6px 32px 6px 32px',
  position: 'relative',
  background: '$cyan2',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: '150ms',
  whiteSpace: 'nowrap',
  color: '$cyan1',
  '&:hover': {
    transition: '150ms',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',

  },
  variants: {
    type: {
      primary: {
        color: '$cyan1',
        background: '$cyan2',
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
      },
      secondary: {
        color: '$cyan6',
        '&:active': {
          backgroundColor: 'rgba(0, 0, 0, 0.15)',
        },
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
  }
});