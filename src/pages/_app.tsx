import { ThemeProvider } from '@/contexts/ThemeProvider/ThemeProvider';
import type { AppProps } from 'next/app';
import NavigationBar from '@/modules/NavigationBar';
import { AnimatePresence } from 'framer-motion';
import '@/styles/globals.scss';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="dark"
      storageKey="theme"
    >
      <NavigationBar>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </NavigationBar>
    </ThemeProvider>
  );
}
