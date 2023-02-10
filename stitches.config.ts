import { createStitches, createTheme, globalCss } from '@stitches/react';
import { gray, grayDark } from '@radix-ui/colors';

export const { styled, getCssText, theme } = createStitches({
  theme: {
    sizes: {
      tileSize: '30px',
      navigationBarHeight: '60px'
    },
    colors: {
      /** App */
      rootBackground: '#181923',
      tileUrl: 'url("tile_dark.png")',
      navigationBarBackground: 'rgba(153, 250, 255, .06)',

      /** Gray */
      gray1: grayDark.gray1,
      gray2: grayDark.gray2,
      gray3: grayDark.gray3,
      gray4: grayDark.gray4,
      gray5: grayDark.gray5,
      gray6: grayDark.gray6,
      gray7: grayDark.gray7,
      gray8: grayDark.gray8,
      gray9: grayDark.gray9,
      gray10: grayDark.gray10,
      gray11: grayDark.gray11,
      gray12: grayDark.gray12,

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

      /** Cyan light */
      cyanLight1: 'rgba(222, 253, 255, 1)',

      /** Yellow */
      yellow1: 'rgba(252, 246, 186, 1)',

      /** Orange */
      orange1: 'rgba(230, 107, 48, 1)',

      /** Red */
      red1: 'rgba(216, 60, 60, 1)',
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
    },
  },
  media: {
    dark: '(prefers-color-scheme: dark)',
    bp1: '(min-width: 1024px)',
    bp2: '(min-width: 768px)',
    bp3: '(max-width: 822px)',
  },
});

export const lightTheme = createTheme({
  colors: {
    /** App */
    rootBackground: '#fff',
    tileUrl: 'url("tile_light.png")',
    navigationBarBackground: gray.gray4,

    /** Gray */
    gray1: gray.gray1,
    gray2: gray.gray2,
    gray3: gray.gray3,
    gray4: gray.gray4,
    gray5: gray.gray5,
    gray6: gray.gray6,
    gray7: gray.gray7,
    gray8: gray.gray8,
    gray9: gray.gray9,
    gray10: gray.gray10,
    gray11: gray.gray11,
    gray12: gray.gray12,

    /** Cyan */
    cyan1: gray.gray12,
    cyan2: gray.gray11,
    cyan3: gray.gray10,
    cyan4: gray.gray9,
    cyan5: gray.gray9,
    cyan6: gray.gray8,
    cyan7: gray.gray8,
    cyan8: gray.gray7,
    cyan9: gray.gray8,
    cyan10: gray.gray5,
    cyan11: gray.gray4,
    cyan12: gray.gray3,
    cyan13: gray.gray2,
    cyan14: gray.gray1,

    /** Cyan Light */
    cyanLight1: gray.gray11,

    /** Yellow */
    yellow1: gray.gray11,
  },
});

export const globalStyles = globalCss({
  body: {
    margin: 0,
    padding: 0,
    backgroundImage: '$tileUrl',
    backgroundRepeat: 'repeat',
    transition: 'all 300ms ease-out',
    // backgroundSize: '2%',
    backgroundSize: '$sizes$tileSize',
    // background: '$backgroundBlendColor', /** This controls blend color with the tiles */
    backgroundBlendMode: 'multiply'
  },
  // "@dark": {
  //     // notice the `media` definition on the stitches.config.ts file
  //     ":root:not(.light)": {
  //         ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
  //             const currentColor = darkTheme.colors[currentColorKey];
  //             const currentColorValue =
  //                 currentColor.value.substring(0, 1) === "$"
  //                     ? `$colors${currentColor.value}`
  //                     : currentColor.value;

  //             return {
  //                 [currentColor.variable]: currentColorValue,
  //                 ...varSet,
  //             };
  //         }, {}),
  //     },
  // },
});

globalStyles();
