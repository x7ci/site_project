import { Box, type CssProps } from '../stitches';
import { type theme } from 'stitches.config';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 6 },
        // opacity: { duration: 0.01 },
      }
    };
  }
};

export interface Props {
  color?: keyof typeof theme.colors
  initialColor?: keyof typeof theme.colors
  css?: CssProps
  scale?: number
  width?: number
  height?: number
}

const UsernameIcon = ({ color = 'cyan1', initialColor = 'cyan12', css, width = 260, height = 185, scale = 1 }: Props) => {
  const [fillColor, setFillColor] = useState<keyof typeof theme.colors>(initialColor);

  const [strokeColor, setStrokeColor] = useState<keyof typeof theme.colors | undefined>(color);

  useEffect(() => {
    setTimeout(() => {
      setFillColor(color);
    }, 2400);

    /** Remove stroke color */
    // setTimeout(() => {
    //   setStrokeColor(undefined);
    // }, 3000);
  }, [color]);

  return (
    <Box
      as={motion.svg}
      variants={draw}
      initial="hidden"
      animate="visible"
      css={{ width, height, transition: 'all 1000ms ease-out', ...css }}
    >
      <title>Username</title>
      <Box
        as={motion.rect}
      />
      <Box
        as={motion.g}
        css={{ scale }}
      >
        <Box
          as={motion.path}
          d="M7.24 4.20L5.01 9.17L7.24 14L6.68 14L4.58 9.38L3.77 9.38L1.67 14L1.12 14L3.35 9.17L1.12 4.20L1.67 4.20L3.75 8.93L4.61 8.93L6.68 4.20L7.24 4.20ZM10.00 4.20L15.61 4.20L15.61 4.65L11.62 14L11.13 14L15.12 4.65L10.00 4.65L10.00 4.20ZM24.08 12.75L24.08 12.75Q23.74 13.41 23.03 13.78L23.03 13.78L23.03 13.78Q22.32 14.15 21.27 14.15L21.27 14.15L21.27 14.15Q19.66 14.15 18.90 12.93L18.90 12.93L18.90 12.93Q18.14 11.70 18.14 9.13L18.14 9.13L18.14 9.13Q18.14 6.57 18.93 5.34L18.93 5.34L18.93 5.34Q19.71 4.12 21.32 4.12L21.32 4.12L21.32 4.12Q23.24 4.12 24.08 5.67L24.08 5.67L23.63 5.89L23.63 5.89Q23.28 5.24 22.74 4.91L22.74 4.91L22.74 4.91Q22.19 4.58 21.32 4.58L21.32 4.58L21.32 4.58Q19.98 4.58 19.31 5.70L19.31 5.70L19.31 5.70Q18.63 6.82 18.63 9.13L18.63 9.13L18.63 9.13Q18.63 11.45 19.29 12.57L19.29 12.57L19.29 12.57Q19.94 13.69 21.27 13.69L21.27 13.69L21.27 13.69Q22.13 13.69 22.74 13.38L22.74 13.38L22.74 13.38Q23.34 13.08 23.63 12.52L23.63 12.52L24.08 12.75ZM31.99 4.65L29.61 4.65L29.61 13.55L31.99 13.55L31.99 14L26.78 14L26.78 13.55L29.15 13.55L29.15 4.65L26.78 4.65L26.78 4.20L31.99 4.20L31.99 4.65Z"
          css={{ fill: `$${fillColor}`, stroke: `$${strokeColor}`, scale, transition: 'all 1000ms ease-out' }}
          variants={draw}
          strokeWidth={.2}
          strokeDasharray="0 1"
        />
      </Box>
    </Box>
  );
};

export default UsernameIcon;
