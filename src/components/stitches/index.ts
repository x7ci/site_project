import { type ComponentProps } from 'react';
import { type theme } from 'stitches.config';
import { type Box as StitchesBox } from './Box';

export { Box } from './Box';
export { SlicedButton } from './SlicedButton';
export { Text, TextPetch } from './Text';
export { ColoredBox } from './ColoredBox';
export { Table, TableBody, TableCell, TableRow } from './Table';
export { Button } from './Button';
export { DashboardComponentWrapper } from './DashboardComponentWrapper';
export { Underline } from './Underline';

export type StitchesCss = ComponentProps<typeof StitchesBox>['css'];

export type StitchesColor = keyof typeof theme.colors;
