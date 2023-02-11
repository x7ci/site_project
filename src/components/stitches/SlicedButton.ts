import { styled } from 'stitches.config';

export const SlicedButton = styled('button', {
  border: 0,
  padding: '4px 32px 4px 32px',
  position: 'relative',
  background: 'transparent',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: 'all 200ms ease-out',
  zIndex: 1,
  whiteSpace: 'nowrap',
  color: '$cyan1',
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
  },
  '&:hover': {
    color: '$yellow1',
    '&:before': {
      transition: '250ms',
      backgroundColor: '$cyan10',
      // backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }
  },
  '&:active': {
    color: '$yellow1',
    '&:before': {
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
    }
  },
  transform: 'unset',
  variants: {
    variant: {
      standard: {
        '&:before': {
          transform: 'unset'
        },
      },
    },
    color: {
      cyan1: {
        color: '$cyan1',
      },
      cyan2: {
        color: '$cyan2',
      },
      cyan3: {
        color: '$cyan3',
      },
      cyan4: {
        color: '$cyan4',
      },
      cyan5: {
        color: '$cyan5',
      },
      cyan6: {
        color: '$cyan6',
      },
      cyan7: {
        color: '$cyan7',
      },
      cyan8: {
        color: '$cyan8',
      },
      cyan9: {
        color: '$cyan9',
      },
      cyan14: {
        color: '$cyan14',
      },
    },
    fontSize: {
      1: {
        fontSize: '$1',
      },
      2: {
        fontSize: '$2',
      },
      3: {
        fontSize: '$3',
      },
      4: {
        fontSize: '$4',
      },
      5: {
        fontSize: '$5',
      },
      6: {
        fontSize: '$6',
      },
      7: {
        fontSize: '$7',
      },
      8: {
        fontSize: '$8',
      },
      9: {
        fontSize: '$9',
      },
      10: {
        fontSize: '$10',
      },
      11: {
        fontSize: '$11',
      },
      12: {
        fontSize: '$12',
      },
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
  },
});
