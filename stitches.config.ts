import { createStitches, createTheme, globalCss, type PropertyValue } from '@stitches/react';
import { sand, sandDark } from '@radix-ui/colors';

export const { styled, getCssText, theme, config } = createStitches({
  theme: {
    sizes: {
      tileSize: '30px',
      navigationBarHeight: '60px'
    },
    colors: {
      /** App */
      rootBackground: '#181923',
      tileUrl: 'url("/tile_dark.png")',
      navigationBarBackground: 'rgba(153, 250, 255, .04)',
      navigationBarIcon: '$yellow1',

      /** Gray */
      gray1: sandDark.sand1,
      gray2: sandDark.sand2,
      gray3: sandDark.sand3,
      gray4: sandDark.sand4,
      gray5: sandDark.sand5,
      gray6: sandDark.sand6,
      gray7: sandDark.sand7,
      gray8: sandDark.sand8,
      gray9: sandDark.sand9,
      gray10: sandDark.sand10,
      gray11: sandDark.sand11,
      gray12: sandDark.sand12,

      /** Cyan */
      cyan1: 'rgba(153, 250, 255, 1)',
      cyan2: 'rgba(153, 250, 255, .9)',
      cyan3: 'rgba(153, 250, 255, .8)',
      cyan4: 'rgba(153, 250, 255, .7)',
      cyan5: 'rgba(153, 250, 255, .6)',
      cyan6: 'rgba(153, 250, 255, .5)',
      cyan7: 'rgba(153, 250, 255, .4)',
      cyan8: 'rgba(153, 250, 255, .3)',
      cyan9: 'rgba(153, 250, 255, .2)',
      cyan10: 'rgba(153, 250, 255, .1)',
      cyan11: 'rgba(153, 250, 255, .08)',
      cyan12: 'rgba(153, 250, 255, .06)',
      cyan13: 'rgba(153, 250, 255, .04)',
      cyan14: 'rgba(153, 250, 255, .02)',

      cyan8Opaque: '#476a72',

      /** Cyan light */
      cyanLight1: 'rgba(222, 253, 255, 1)',

      /** Yellow */
      yellow1: 'rgba(252, 246, 186, 1)',

      /** Orange */
      // orange1: 'rgba(230, 107, 48, 1)',
      orange1: 'hsla(19, 77%, 58%, 1)',
      orange2: 'hsla(19, 77%, 58%, .8)',
      orange3: 'hsla(19, 77%, 58%, .6)',
      orange4: 'hsla(19, 77%, 58%, .4)',
      orange5: 'hsla(19, 77%, 58%, .2)',

      /** Red */
      red1: 'rgba(216, 60, 60, 1)',
    },
    fonts: {
      robotoCondensed: 'var(--robotoCondensed-font)',
      petch: 'var(--petch-font)',
    },
    fontSizes: {
      1: '5px',
      2: '7px',
      3: '9px',
      4: '11px',
      5: '13px',
      6: '15px',
      7: '17px',
      8: '19px',
      9: '21px',
      10: '23px',
      11: '25px',
      12: '27px',
      13: '36px',
      14: '42px',
      15: '48px',
      16: '54px',
      17: '60px',
      18: '66px',
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 1024px)',
    bp2: '(min-width: 768px)',
    bp3: '(max-width: 895px)',
    bp4: '(max-width: 510px)',
    bp620: '(max-width: 620px)',
    bp570: '(max-width: 570px)',
  },
  utils: {
    w: (value: PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: PropertyValue<'width'>) => ({
      height: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
  }
});

export const lightTheme = createTheme('light-theme', {
  colors: {
    /** App */
    rootBackground: '#fff',
    tileUrl: 'url("/tile_light.png")',
    navigationBarBackground: sand.sand4,
    navigationBarIcon: 'rgba(0, 0, 0, .6)',

    /** Gray */
    gray1: sand.sand1,
    gray2: sand.sand2,
    gray3: sand.sand3,
    gray4: sand.sand4,
    gray5: sand.sand5,
    gray6: sand.sand6,
    gray7: sand.sand7,
    gray8: sand.sand8,
    gray9: sand.sand9,
    gray10: sand.sand10,
    gray11: sand.sand11,
    gray12: sand.sand12,

    /** Cyan */
    cyan1: sand.sand12,
    cyan2: sand.sand11,
    cyan3: sand.sand10,
    cyan4: sand.sand10,
    cyan5: sand.sand9,
    cyan6: sand.sand9,
    cyan7: sand.sand9,
    cyan8: sand.sand8,
    cyan9: sand.sand8,
    cyan10: sand.sand5,
    cyan11: sand.sand4,
    cyan12: sand.sand3,
    cyan13: sand.sand2,
    cyan14: sand.sand2,

    cyan8Opaque: sand.sand8,

    /** Cyan Light */
    cyanLight1: sand.sand11,

    /** Yellow */
    yellow1: sand.sand11,
  },
});

export type StitchesTheme = typeof theme | typeof lightTheme;

export const globalStyles = globalCss({
  body: {
    backgroundImage: '$tileUrl',
    backgroundRepeat: 'repeat',
    backgroundSize: '$sizes$tileSize',
  },
  '::selection': {
    color: '$gray1',
    background: '$gray11',
  },
});

globalStyles();
