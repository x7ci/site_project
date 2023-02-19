import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  scale?: number
  width?: number
  height?: number
}

const FramerIcon = ({ color, css, width, height, scale = 0.38 }: Props) => {
  return (
      <Box
        as="svg"
        viewBox="0 0 14 21"
        role="presentation"
        css={{ width, height, ...css }}
        >
        <title>Framer logo</title>
        <Box
          as="path"
          d="M0 0h14v7H7zm0 7h7l7 7H7v7l-7-7z"
          fill="currentColor"
          css={{ fill: `$${color}`, scale }}
        />
      </Box>
  );
};

export default FramerIcon;
