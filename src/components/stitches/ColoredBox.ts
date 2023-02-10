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
