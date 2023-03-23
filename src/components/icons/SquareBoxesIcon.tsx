import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const SquareBoxesIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 32 32"
      css={{ fill: `$${color}`, width, height, ...css, background: '' }}
    >
      <Box
        as="path"
        d="M13 0H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H2V2h10zM31 0H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V1a1 1 0 00-1-1zm-1 12H20V2h10zm-17 6H1a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H2V20h10zm19-12H19a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V19a1 1 0 00-1-1zm-1 12H20V20h10z"
        css={{ fill: `$${color}` }}
      />
    </Box>

  );
};

export default SquareBoxesIcon;
