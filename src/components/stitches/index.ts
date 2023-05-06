import { type theme, type config } from 'stitches.config';
import { type CSS } from '@stitches/react';

export { Box } from './box';
export { SlicedButton } from './sliced-button';
export { T, TextPetch } from './text';
export { ColoredBox } from './colored-box';
export { Table, TableBody, TableCell, TableRow } from './table';
export { Button } from './button';
export { DashboardComponentWrapper } from './dashboard-component-wrapper';
export { Underline } from './underline';

export type StitchesCss = CSS<typeof config>;

export type StitchesColor = keyof typeof theme.colors;
