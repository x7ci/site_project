import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width: number
  height: number
}

const ActivityIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 100 100"
      css={{
        fill: `$${color}`,
        width,
        height,
        ...css,
      }}
    >
      <Box
        as="path"
        d="M20 60h10l6.667-16.667L50 76.666 65 50l5 10h10v-6.666h-5.879l-8.776-17.549L51.016 61.26 36.667 23.333 25.488 53.334H20z"
        css={{ fill: `$${color}` }}
      />
    </Box>

  );
};

export default ActivityIcon;
