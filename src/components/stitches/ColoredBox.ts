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
      cyan11: {
        background: '$cyan11',
      },
      cyan8: {
        background: '$cyan8',
      },
      cyan9: {
        background: '$cyan9',
      },
      cyan12: {
        background: '$cyan12',
      },
      cyan14: {
        background: '$cyan14',
      },
    },
    size: {
      1: {
        width: 140,
      },
      2: {
        width: 200,
      },
      3: {
        width: 370,
      },
      4: {
        width: 520,
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
