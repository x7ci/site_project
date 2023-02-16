import { styled } from 'stitches.config';

export const ColoredBox = styled('div', {
  width: 150,
  paddingLeft: '10px',
  paddingRight: '10px',
  variants: {
    textAlign: {
      center: {
        textAlign: 'center',
      }
    },
    flex: {
      1: {
        flex: 1,
      },
      2: {
        flex: 2,
      },
      3: {
        flex: 3,
      },
    },
    color: {
      cyan1: {
        background: '$cyan1',
      },
      cyan2: {
        background: '$cyan2',
      },
      cyan3: {
        background: '$cyan3',
      },
      cyan4: {
        background: '$cyan4',
      },
      cyan5: {
        background: '$cyan5',
      },
      cyan6: {
        background: '$cyan6',
      },
      cyan7: {
        background: '$cyan7',
      },
      cyan8: {
        background: '$cyan8',
      },
      cyan9: {
        background: '$cyan9',
      },
      cyan10: {
        background: '$cyan10',
      },
      cyan11: {
        background: '$cyan11',
      },
      cyan12: {
        background: '$cyan12',
      },
      cyan13: {
        background: '$cyan13',
      },
      cyan14: {
        background: '$cyan14',
      },
      gray1: {
        background: '$gray1',
      },
      gray2: {
        background: '$gray2',
      },
      gray3: {
        background: '$gray3',
      },
      gray4: {
        background: '$gray4',
      },
      gray5: {
        background: '$gray5',
      },
      gray6: {
        background: '$gray6',
      },
      gray7: {
        background: '$gray7',
      },
      gray8: {
        background: '$gray8',
      },
      gray9: {
        background: '$gray9',
      },
      gray10: {
        background: '$gray10',
      },
      gray11: {
        background: '$gray11',
      },
      gray12: {
        background: '$gray12',
      },
    },
    size: {
      1: {
        width: 40,
      },
      2: {
        width: 70,
      },
      3: {
        width: 100,
      },
      4: {
        width: 130,
      },
      5: {
        width: 160,
      },
      6: {
        width: 190,
      },
      'max': {
        width: 'calc(100% - 20px)',
      },
      'unset': {
        width: 'unset',
      }
    }
  }
});
