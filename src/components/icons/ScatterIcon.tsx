import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const ScatterIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 32 34"
      css={{
        fill: `$${color}`,
        width,
        height,
        ...css,
      }}
    >
      <title>Scatter icon</title>
      <Box
        as="path"
        d="M30,30H4a2,2,0,0,1-2-2V2H4V28H30Z"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="circle"
        cx="10"
        cy="22"
        r="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="circle"
        cx="14"
        cy="15"
        r="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="circle"
        cx="22"
        cy="15"
        r="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="circle"
        cx="26"
        cy="6"
        r="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="circle"
        cx="14"
        cy="8"
        r="2"
        css={{ fill: `$${color}` }}
      />
      <Box
        as="rect"
        css={{ fill: 'none' }}
      />
    </Box>
  );
};

export default ScatterIcon;
