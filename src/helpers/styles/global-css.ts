/* eslint-disable react-hooks/rules-of-hooks */
import { type theme, type StitchesTheme } from 'stitches.config';
import { useCssVar, defineCssVar } from './css-helpers';
/**
 * Generate CSS.
 *
 * @param defaultTheme The default Stitches theme.
 *
 * @param themes A list of additional Stitches themes.
 * @returns The statically generated CSS as a string.
 */
const getGlobalCss = (defaultTheme: typeof theme, themes: StitchesTheme[]) => {
  const css = `

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

:root {
${getFontVariables(defaultTheme)}
}

body {
  font-family: ${useCssVar(defaultTheme.fonts.robotoCondensed)};
  margin: 0;
  padding: 0;
  background-color: ${useCssVar(defaultTheme.colors.rootBackground)};
}

::selection {
  color: ${useCssVar(defaultTheme.colors.gray1)};
  background: ${useCssVar(defaultTheme.colors.gray11)};
}

${getThemeClasses(themes)}

`;

  console.log(css);

  return css;
};

const getThemeClasses = (themes: StitchesTheme[]): string => {
  let css = '';

  for (let i = 0; i < themes.length; i++) {
    const themeVars: string[] = Object.values(themes[i].colors).map((value) => `${defineCssVar(value)};`);

    const themeCss: string = `
.${themes[i].className} {
  ${themeVars.join('\n  ')}
}
`;

    css += themeCss;
  }

  return css.trim();
};

const getFontVariables = (defaultTheme: typeof theme): string => {
  return Object.values(defaultTheme.fonts).map((font) => `  ${defineCssVar(font)};`).join('\n');
};

export default getGlobalCss;
