import { ThemeProvider } from '@/contexts/ThemeProvider/ThemeProvider';
import type { AppProps } from 'next/app';
import { theme, lightTheme, globalStyles } from '../../stitches.config';
import NavigationBar from '@/modules/NavigationBar';
import { AnimatePresence } from 'framer-motion';

globalStyles();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      storageKey="theme"
      value={{
        dark: theme.className,
        light: lightTheme.className,
      }}
    >
      <NavigationBar>
        <AnimatePresence mode="wait" initial={true}>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </NavigationBar>
    </ThemeProvider>
  );
}
