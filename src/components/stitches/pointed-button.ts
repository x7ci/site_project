import { styled } from 'stitches.config';

export const PointedButton = styled('button', {
  border: 0,
  padding: '4px 32px 4px 32px',
  backgroundColor: '$navigationBarBackground',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$6',
  transition: 'all 150ms ease-out',
  zIndex: 1,
  whiteSpace: 'nowrap',
  color: '$cyan1',

  '&:hover': {
    color: '$yellow1',
    backgroundColor: '$cyan10',
  },

  '&:active': {
    color: '$yellow1',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },

  '$$sharpness': '9px',
  variants: {
    pointed: {
      full: {
        clipPath: 'polygon(calc(100% - $$sharpness) 0, 100% 50%, calc(100% - $$sharpness) 100%, 0 100%, $$sharpness 50%, 0 0)',
      },
      onlyRight: {
        clipPath: 'polygon(calc(100% - $$sharpness) 0, 100% 50%, calc(100% - $$sharpness) 100%, 0 100%, 0 50%, 0 0)',
      },
      onlyLeft: {
        clipPath: 'polygon(100% 0, 100% 50%, 100% 100%, 0 100%, $$sharpness 50%, 0 0)',
      },
    },
    type: {
      primary: {
        color: '$cyan1',
      },
      secondary: {
        color: '$cyan8',
      },
    },
    size: {
      dense: {
        padding: '4px 20px 4px 20px',
      },
      breadcrumb: {
        padding: '3px 32px 3px 32px',
      }
    },
    variant: {
      standard: {

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
