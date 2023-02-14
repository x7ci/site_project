import { Box, type CssProps } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: CssProps
  scale?: number
  width?: number
  height?: number
}

const ReactIcon = ({ color, css, width, height, scale = 0.38 }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      css={{ fill: `$${color}`, width, height, ...css }}
    >
      <title>React logo</title>
      <Box
        as="circle"
        cx="0"
        cy="0"
        r="2.05"
        // css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="g"
        strokeWidth="1"
        fill="none"
        css={{ stroke: `$${color}`, scale }}
      >
        <Box
          as="ellipse"
          rx="11"
          ry="4.2"
          css={{ scale }}
        />
        <Box
          as="ellipse"
          rx="11"
          ry="4.2"
          transform="rotate(60)"
          css={{ scale }}
        />
        <Box
          as="ellipse"
          rx="11"
          ry="4.2"
          transform="rotate(120)"
          css={{ scale }}
        />
      </Box>
    </Box>
  );
};

export default ReactIcon;
