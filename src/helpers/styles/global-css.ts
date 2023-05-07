/* eslint-disable react-hooks/rules-of-hooks */
import { type StitchesTheme } from 'stitches.config';
import { useCssVar, defineCssVar } from './css-helpers';

const getGlobalCss = (themes: StitchesTheme[], defaultTheme: StitchesTheme) => {
  let css = `

/** Fallback font adjusted to match default font. To avoid a jarring shift of layout. */
@font-face {
  font-family: 'Adjusted Arial Fallback';
  src: local(Arial);
  size-adjust: 86%;
  ascent-override: normal;
  descent-override: normal;
  line-gap-override: 21%;
}

@font-face {
  font-family: 'RobotoCondensed';
  src: url("/fonts/RobotoCondensed-Light.ttf") format("truetype");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: 'RobotoCondensed';
  src: url("/fonts/RobotoCondensed-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'RobotoCondensed';
  src: url("/fonts/RobotoCondensed-Bold.ttf") format("truetype");
  font-style: normal;
  font-weight: 700;
}

@font-face {
  font-family: 'Petch';
  src: url("/fonts/ChakraPetch-Light.ttf") format("truetype");
  font-style: normal;
  font-weight: 300;
}

@font-face {
  font-family: 'Petch';
  src: url("/fonts/ChakraPetch-Regular.ttf") format("truetype");
  font-style: normal;
  font-weight: 400;
}

@font-face {
  font-family: 'Petch';
  src: url("/fonts/ChakraPetch-Medium.ttf") format("truetype");
  font-style: normal;
  font-weight: 500;
}

body {
  background-color: ${useCssVar(defaultTheme.colors.rootBackground)};
}
`;

  for (let i = 0; i < themes.length; i++) {
    const themeVars: string[] = Object.entries(themes[i].colors).map(([_, value]) => `${defineCssVar(value)};`);

    const themeCss: string = `
.${themes[i].className} {
  ${themeVars.join('\n  ')}
}
`;

    css += themeCss;
  }

  return css;
};

export default getGlobalCss;
