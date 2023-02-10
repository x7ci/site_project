import { type ComponentProps } from 'react';
import { type Box as StitchesBox } from './Box';

export { Box } from './Box';
export { SlicedButton } from './SlicedButton';
export { Text } from './Text';
export { ColoredBox } from './ColoredBox';
export { Table, TableBody, TableCell, TableRow } from './Table';
export { Button } from './Button';

export type CssProps = ComponentProps<typeof StitchesBox>['css'];
