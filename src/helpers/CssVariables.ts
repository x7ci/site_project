/* eslint-disable @typescript-eslint/no-namespace */
export namespace Theme {
  export type Color = keyof typeof color;
  export type Size = keyof typeof size;
  export type LetterSpacing = keyof typeof letterSpacing;
  export type MediaQuery = keyof typeof mediaQuery;
  export type FontWeight = keyof typeof generalCssProperties | '300' | '400' | '500';
}

const generalCssProperties = {
  initial: 'initial',
  unset: 'unset',
  inherit: 'inherit',
};

export const color = {
  ...generalCssProperties,

  navigationBarIcon: 'var(--color-navigationBarIcon)',

  gray1: 'var(--color-gray1)',
  gray2: 'var(--color-gray2)',
  gray3: 'var(--color-gray3)',
  gray4: 'var(--color-gray4)',
  gray5: 'var(--color-gray5)',
  gray6: 'var(--color-gray6)',
  gray7: 'var(--color-gray7)',
  gray8: 'var(--color-gray8)',
  gray9: 'var(--color-gray9)',
  gray10: 'var(--color-gray10)',
  gray11: 'var(--color-gray11)',
  gray12: 'var(--color-gray12)',

  cyan1: 'var(--color-cyan1)',
  cyan2: 'var(--color-cyan2)',
  cyan3: 'var(--color-cyan3)',
  cyan4: 'var(--color-cyan4)',
  cyan5: 'var(--color-cyan5)',
  cyan6: 'var(--color-cyan6)',
  cyan7: 'var(--color-cyan7)',
  cyan8: 'var(--color-cyan8)',
  cyan9: 'var(--color-cyan9)',
  cyan10: 'var(--color-cyan10)',
  cyan11: 'var(--color-cyan11)',
  cyan12: 'var(--color-cyan12)',
  cyan13: 'var(--color-cyan13)',
  cyan14: 'var(--color-cyan14)',

  cyan8Opaque: 'var(--color-cyan8Opaque)',
  cyanLight1: 'var(--color-cyanLight1)',
  yellow1: 'var(--color-yellow1)',
  orange1: 'var(--color-orange1)',
  orange2: 'var(--color-orange2)',
  orange3: 'var(--color-orange3)',
  orange4: 'var(--color-orange4)',
  orange5: 'var(--color-orange5)',
  red1: 'var(--color-red1)',
};

export const size = {
  ...generalCssProperties,

  1: 'var(--size-font1)',
  2: 'var(--size-font2)',
  3: 'var(--size-font3)',
  4: 'var(--size-font4)',
  5: 'var(--size-font5)',
  6: 'var(--size-font6)',
  7: 'var(--size-font7)',
  8: 'var(--size-font8)',
  9: 'var(--size-font9)',
  10: 'var(--size-font10)',
  11: 'var(--size-font11)',
  12: 'var(--size-font12)',
  13: 'var(--size-font13)',
  14: 'var(--size-font14)',
  15: 'var(--size-font15)',
  16: 'var(--size-font16)',
  17: 'var(--size-font17)',
  18: 'var(--size-font18)',
};

export const letterSpacing = {
  ...generalCssProperties,

  1: '0.3px',
};

export const mediaQuery = {
  ...generalCssProperties,

  navigationBarCompact: '(max-width: 895px)',
};
