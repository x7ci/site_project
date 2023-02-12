import { ThemeProvider } from '@/contexts/ThemeProvider/ThemeProvider';
import type { AppProps } from 'next/app';
import { lightTheme } from '../../stitches.config';
import { Roboto_Condensed } from '@next/font/google';
import { type NextFont } from '@next/font';
import NavigationBar from '@/modules/NavigationBar';
import { AnimatePresence } from 'framer-motion';

const robotoCondensed: NextFont = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      value={{
        dark: 'dark',
        light: lightTheme.className,
      }}
    >
      <main className={robotoCondensed.className}>
        <NavigationBar>
          <AnimatePresence mode="wait" initial={true}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </NavigationBar>
      </main>
    </ThemeProvider>
  );
}
