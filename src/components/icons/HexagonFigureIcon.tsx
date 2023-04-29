import { motion, type Variants } from 'framer-motion';
import { useState, useEffect, type CSSProperties } from 'react';
import { color, type Theme } from '@/helpers/CssVariables';

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
  iconColor?: Theme.Color
  initialColor?: Theme.Color
  css?: CSSProperties
  scale?: number
  width?: number
  height?: number
}

const HexagonFigureIcon = ({ iconColor = 'navigationBarIcon', initialColor = 'cyan9', css, width = 60, height = 55 }: Props) => {
  const [fillColor, setFillColor] = useState<Theme.Color>(initialColor);

  useEffect(() => {
    setTimeout(() => {
      setFillColor(iconColor);
    }, 2300);
  }, []);

  console.log({fillColor});

  const fill = color[fillColor];
  

  return (
    <motion.svg
      variants={draw}
      initial="hidden"
      animate="visible"
      viewBox="-4 0 110 95"
      style={{ fill: color[iconColor], width, height, ...css }}
    >
      <motion.path
        d="m31.665 64.866 36.668-21.975 15 8.922v18.178l-15 8.917-15-8.917V59.655l-6.666 3.993v10.133l21.666 12.885L90 73.781V48.022L68.333 35.137 31.665 57.109z"
        style={{ strokeWidth: 2, fill, stroke: color[iconColor], transition: 'all 600ms ease-out' }}
        variants={draw}
      />
      <motion.path
        d="M31.665 57.109 16.667 48.19V30.009l14.998-8.919 15.002 8.919v10.34l6.666-3.995V26.217L31.665 13.334 10 26.217v25.766l21.665 12.883z"
        style={{ strokeWidth: 2, fill, stroke: color[iconColor], transition: 'all 600ms ease-out' }}
        variants={draw}
      />
    </motion.svg>
  );
};

export default HexagonFigureIcon;
