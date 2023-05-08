/* eslint-disable react-hooks/rules-of-hooks */
import { type StitchesTheme } from 'stitches.config';
import { defineCssVar } from './css-helpers';
/**
 * This function generates the CSS of Stitches themes that has been created using the `createTheme()` function.
 * The returned CSS string can then be injected in the `<Head />` as a style tag in the Next.js document.
 *
 * The reason behind generating this CSS is that the `getCssText()` function of Stitches only includes the primary
 * theme and not the additional ones. This causes a quick flicker on first load, if a non-primary theme has been
 * selected as the default theme.
 *
 * @param themes A list of additional Stitches themes created using the `createTheme()` function.
 * @returns The CSS classes of the themes as a string.
 */
const getThemeCss = (themes: StitchesTheme[]) => {
  const css = getThemeClasses(themes);

  return css;
};

const getThemeClasses = (themes: StitchesTheme[], pretty: boolean = false): string => {
  let css = '';

  if (pretty) {
    for (let i = 0; i < themes.length; i++) {
      const themeVars: string[] = Object.values(themes[i].colors).map((value) => `${defineCssVar(value)};`);

      const themeCss: string = `
.${themes[i].className} {
  ${themeVars.join('\n  ')}
}
`;

      css += themeCss;
    }

    return css;
  }

  for (let i = 0; i < themes.length; i++) {
    const themeVars: string[] = Object.values(themes[i].colors).map((value) => `${defineCssVar(value)};`);

    const themeCss: string = `.${themes[i].className}{${themeVars.join('')}}`;

    css += themeCss;
  }

  return css;
};

export default getThemeCss;
