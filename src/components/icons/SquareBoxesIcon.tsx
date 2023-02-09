import { Box } from '../stitches';
import { type theme } from 'stitches.config';
import { type ComponentProps } from 'react';

export interface Props {
  color?: keyof typeof theme.colors
  css?: ComponentProps<typeof Box>['css']
  scale?: number
  size?: number
}

const SquareBoxesIcon = ({ color, css, size = 14, scale = 0.38 }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      css={{ fill: `$${color}`, width: size, height: size, ...css }}
    >
      <Box
        as="path"
        d="M13 0H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H2V2h10zM31 0H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H20V2h10zm-17 6H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H2V20h10zm19-12H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H20V20h10z"
        css={{ fill: `$${color}`, scale }}
      />
    </Box>

  );
};

export default SquareBoxesIcon;
