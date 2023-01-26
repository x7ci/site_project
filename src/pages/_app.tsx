import { ThemeProvider } from '@/contexts/ThemeProvider/ThemeProvider';
import type { AppProps } from 'next/app';
import { lightTheme } from "../../stitches.config";
import { Roboto_Condensed } from '@next/font/google'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

export default function App({ Component, pageProps }: AppProps) {
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
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  )
}
