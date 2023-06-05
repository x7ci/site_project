import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: StitchesCss
  width: number
  height: number
}

const MoveIcon = ({ color, css, width, height }: Props) => {
  return (
    <Box
      as="svg"
      viewBox="0 0 128 128"
      css={{
        fill: `$${color}`,
        width,
        height,
        ...css,
      }}
    >
      <g>
        <Box
          as="path"
          d="m107.3 43.3-3.8 3.8 14.3 14.3H72v5.3h45.7L103.4 81l3.8 3.8L127.9 64l-20.6-20.7zM56.1 66.7v-5.3H10.4l16.1-16.2-3.8-3.8L.2 64l20.7 20.7 3.8-3.8-14.3-14.2h45.7zm10.6 51.1V72h-5.3v45.8l-14.3-14.3-3.8 3.8L64.1 128l22.5-22.6-3.8-3.8-16.1 16.2zM61.4 10.2V56h5.3V10.2L81 24.5l3.8-3.8L64.1 0 43.4 20.7l3.7 3.8 14.3-14.3z"
          css={{ fill: `$${color}` }}
        />
      </g>
    </Box>

  );
};

export default MoveIcon;
