import { motion } from 'framer-motion';
import { type ReactNode } from 'react';
import { Box } from '../stitches';

interface Props {
  children: ReactNode
  delay?: number
}

const AnimateComponentMount = ({ children, delay }: Props) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{
        type: 'spring',
        delay,
        // stiffness: 260,
        // damping: 20,
        duration: .4,
      }}
    >
      {children}
    </Box>
  );
};

export default AnimateComponentMount;
