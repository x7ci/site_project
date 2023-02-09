import { Box } from '../stitches';
import { type theme } from 'stitches.config';
import { type ComponentProps } from 'react';

export interface Props {
  color?: keyof typeof theme.colors
  css?: ComponentProps<typeof Box>['css']
  scale?: number
  size?: number
}

const ActivityIcon = ({ color, css, size = 14, scale = 0.38 }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      css={{ fill: `$${color}`, width: size, height: size, ...css }}
    >
      <Box
        as="path"
        d="M20 60h10l6.667-16.667L50 76.666 65 50l5 10h10v-6.666h-5.879l-8.776-17.549L51.016 61.26 36.667 23.333 25.488 53.334H20z"
        css={{ fill: `$${color}`, scale }}
      />
    </Box>

  );
};

export default ActivityIcon;
