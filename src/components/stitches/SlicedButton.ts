import { styled } from 'stitches.config';

export const SlicedButton = styled('button', {
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
  border: 0,
  padding: '6px 32px 6px 32px',
  position: 'relative',
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: '200ms',
  zIndex: 1,
  whiteSpace: 'nowrap',
  color: '$gray12',
  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    borderRadius: '0px',
    transform: 'skewX(-35deg)',
    // backgroundColor: 'rgba(0, 0, 0, 0.3)',
    backgroundColor: '$navigationBarBackground',
    zIndex: -1,
    '@bp3': {
      transform: 'unset'
    },
  },
  '&:hover': {
    color: '$yellow1',
    '&:before': {
      transition: '250ms',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }
  },
  '&:active': {
    color: '$yellow1',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.0)',
    }
  }
});
