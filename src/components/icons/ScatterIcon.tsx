import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  scale?: number
  width?: number
  height?: number
}

const ScatterIcon = ({ color, css, width, height, scale = 0.50 }: Props) => {
  return (
    <Box
      as="svg"
      css={{ scale, fill: `$${color}`, width, height, ...css }}
    >
      <title>Scatter icon</title>
      <Box
        as="path"
        d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="circle"
        cx="10"
        cy="22"
        r="2"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="circle"
        cx="14"
        cy="15"
        r="2"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="circle"
        cx="22"
        cy="15"
        r="2"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="circle"
        cx="26"
        cy="6"
        r="2"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="circle"
        cx="14"
        cy="8"
        r="2"
        css={{ fill: `$${color}`, scale }}
      />
      <Box
        as="rect"
        css={{ fill: 'none', scale }}
      />
    </Box>
  );
};

export default ScatterIcon;
