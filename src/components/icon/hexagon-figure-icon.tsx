import { Box, type StitchesCss } from '../stitches';
import { type theme } from 'stitches.config';
import { motion, type Variants } from 'framer-motion';
import { useState, useEffect } from 'react';

const draw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: () => {
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
        },
        opacity: {
          duration: 0.07,
        },
      }
    };
  }
};

export interface Props {
  color?: keyof typeof theme.colors
  initialColor?: keyof typeof theme.colors
  css?: StitchesCss
  width?: number
  height?: number
}

const HexagonFigureIcon = ({ color = 'navigationBarIcon', initialColor = 'cyan9', css, width = 60, height = 55 }: Props) => {
  const [fillColor, setFillColor] = useState<keyof typeof theme.colors>(initialColor);

  useEffect(() => {
    setTimeout(() => {
      setFillColor(color);
    }, 2300);
  }, [color]);

  return (
    <Box
      as={motion.svg}
      variants={draw}
      initial="hidden"
      animate="visible"
      viewBox="-4 0 110 95"
      css={{ fill: `$${color}`, width, height, ...css }}
    >
      <Box
        as={motion.path}
        d="m31.665 64.866 36.668-21.975 15 8.922v18.178l-15 8.917-15-8.917V59.655l-6.666 3.993v10.133l21.666 12.885L90 73.781V48.022L68.333 35.137 31.665 57.109z"
        css={{ strokeWidth: 2, fill: `$${fillColor}`, stroke: `$${color}`, transition: 'all 600ms ease-out' }}
        variants={draw}
      />
      <Box
        as={motion.path}
        d="M31.665 57.109 16.667 48.19V30.009l14.998-8.919 15.002 8.919v10.34l6.666-3.995V26.217L31.665 13.334 10 26.217v25.766l21.665 12.883z"
        css={{ strokeWidth: 2, fill: `$${fillColor}`, stroke: `$${color}`, transition: 'all 600ms ease-out' }}
        variants={draw}
      />
    </Box>
  );
};

export default HexagonFigureIcon;
