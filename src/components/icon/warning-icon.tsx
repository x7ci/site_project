import { Box } from '../stitches';
import { type theme } from 'stitches.config';
import { type ComponentProps } from 'react';

export interface Props {
  color?: keyof typeof theme.colors
  css?: ComponentProps<typeof Box>['css']
  width?: number
  height?: number
}

const WarningIcon = ({ color, width, height, css }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 24 24"
      css={{ fill: `$${color}`, width, height, ...css }}
    >
      <Box
        as="path"
        d="M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="path"
        d="M11 10h2v5h-2zm0 6h2v2h-2z"
        css={{ fill: `$${color}` }}
      />
    </Box>
  );
};

export default WarningIcon;
