import { type theme, type config } from 'stitches.config';
import { type CSS } from '@stitches/react';

export * from './box';
export * from './sliced-button';
export * from './pointed-button';
export * from './text';
export * from './colored-box';
export * from './table';
export * from './button';
export * from './widget';
export * from './underline';
export * from './heat-map';

export type StitchesCss = CSS<typeof config>;

export type StitchesColor = keyof typeof theme.colors;
