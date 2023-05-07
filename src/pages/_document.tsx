import { initThemeScript } from '@/contexts/theme-provider/theme-provider-2';
import getGlobalCss from '@/helpers/styles/global-css';
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { getCssText, theme, lightTheme } from '../../stitches.config';

const globalCss = getGlobalCss(theme, [theme, lightTheme]);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() + globalCss }} />
        {/* <style id="stitches-hydrate" dangerouslySetInnerHTML={{ __html: globalCss }} /> */}

        {/* <Script id="theme" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: initThemeScript() }} /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
