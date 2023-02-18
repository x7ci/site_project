import { type NextFont } from '@next/font';
import { Chakra_Petch, Roboto_Condensed } from '@next/font/google';

export const robotoCondensed: NextFont = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});

export const chakraPetch: NextFont = Chakra_Petch({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
});
