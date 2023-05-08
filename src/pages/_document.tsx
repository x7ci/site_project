import getThemeCss from '@/helpers/styles/theme-css';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, lightTheme } from '../../stitches.config';

const themeCss = getThemeCss([lightTheme]);

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() + themeCss }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
