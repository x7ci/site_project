import getGlobalCss from '@/helpers/styles/global-css';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, theme, lightTheme, config } from '../../stitches.config';

// theme.className t-bhSCcY       lightTheme.className t-dHqfFl
// export const initThemeScript = (themeClassMap: ThemeClassMap, defaultTheme: string) => {
//   return (`
// ;(function initTheme() {
//   var theme = localStorage.getItem('theme') ?? 'dark';

//   var themeClassName = '${defaultTheme}';

//   if (theme === 'dark') {
//     themeClassName = '${themeClassMap.dark}'
//   }

//   if (theme === 'light') {
//     themeClassName = '${themeClassMap.light}'
//   }

//   document.querySelector('html').className = themeClassName;
// })()
// `);
// };

const globalCss = getGlobalCss([theme, lightTheme], theme);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        <style id="stitches-hydrate" dangerouslySetInnerHTML={{ __html: globalCss }} />

        {/* <Script id="set-theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: initThemeScript(themeClassMap, themeClassMap.light) }} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
