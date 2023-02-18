import { chakraPetch } from '@/helpers/Fonts';
import { styled } from 'stitches.config';

export const Text = styled('span', {
  color: '$primary',
  background: 'unset',
  // letterSpacing: .25,
  transition: 'all 150ms ease-out',
  defaultVariants: {
    color: 'gray12',
    size: 6,
  },
  variants: {
    background: {
      cyan1: {
        background: '$cyan1'
      },
      gray6: {
        background: '$gray6'
      }
    },
    padding: {
      tiny: {
        padding: '1px 3px 1px 3px',
      },
    },
    onHover: {
      cyan1: {
        '&:hover': {
          color: '$cyan1'
        }
      },
      gray11: {
        '&:hover': {
          color: '$gray11'
        }
      },
    },
    size: {
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
      13: {
        fontSize: '$13',
      },
      14: {
        fontSize: '$14',
      },
      15: {
        fontSize: '$15',
      },
      16: {
        fontSize: '$16',
      },
      17: {
        fontSize: '$17',
      },
      18: {
        fontSize: '$18',
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
    color: {
      gray1: {
        color: '$gray1',
      },
      gray2: {
        color: '$gray2',
      },
      gray3: {
        color: '$gray3',
      },
      gray4: {
        color: '$gray4',
      },
      gray5: {
        color: '$gray5',
      },
      gray6: {
        color: '$gray6',
      },
      gray7: {
        color: '$gray7',
      },
      gray8: {
        color: '$gray8',
      },
      gray9: {
        color: '$gray9',
      },
      gray10: {
        color: '$gray10',
      },
      gray11: {
        color: '$gray11',
      },
      gray12: {
        color: '$gray12',
      },
      yellow1: {
        color: '$yellow1'
      },
      orange1: {
        color: '$orange1',
      },
      orange2: {
        color: '$orange2',
      },
      orange3: {
        color: '$orange3',
      },
      orange4: {
        color: '$orange4',
      },
      red1: {
        color: '$red1',
      },
      cyanLight1: {
        color: '$cyanLight1',
      },
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
      cyan10: {
        color: '$cyan10',
      },
      cyan11: {
        color: '$cyan11',
      },
      cyan12: {
        color: '$cyan12',
      },
      cyan13: {
        color: '$cyan13',
      },
      cyan14: {
        color: '$cyan14',
      },
    }
  },
});

export const TextPetch = styled(Text, {
  ...chakraPetch.style,
  lineHeight: 1,
  variants: {
    weight: {
      1: {
        fontWeight: '300'
      },
      2: {
        fontWeight: '400'
      },
      3: {
        fontWeight: '500'
      },
      4: {
        fontWeight: '600'
      },
      5: {
        fontWeight: '700'
      },
    },
  }
});
