import { Box, type CssProps } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: CssProps
  scale?: number
  size?: number
}

const SettingsIcon = ({ color, css, size = 50, scale = 1 }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      css={{ fill: `$${color}`, width: size, height: size, ...css }}
    >
      <Box
        as="path"
        d="M8 9H7V0H5v9H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v17h2V15h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM18 19h-1V0h-2v19h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v7h2v-7h1a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM28 7h-1V0h-2v7h-1a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1v19h2V13h1a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"
        css={{ fill: `$${color}`, scale }}
      />
    </Box>
  );
};

export default SettingsIcon;
