import { globalCss } from '@stitches/react';
import type { AppProps } from 'next/app'

const globalStyles = globalCss({
  '*': { margin: 0, padding: 0 },
});

globalStyles();

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />
}
