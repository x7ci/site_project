import { Box, Text } from '@/components/stitches';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { styled } from 'stitches.config';
import { AnimatePresence, motion } from 'framer-motion';
import dayjs, { type Dayjs } from 'dayjs';
import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import useIsMounted from '@/helpers/hooks/useIsMounted';
import useRandomRange from '@/helpers/hooks/useRandomRange';

const SampleAnalysis = () => {
  const { resolvedTheme } = useTheme();

  const [date, setDate] = useState<Dayjs>();

  const [hover, setHover] = useState<boolean>(false);

  const fps = useRandomRange({ minValue: 28, maxValue: 37, updateInterval: 1000, digits: 8 });

  const isMounted = useIsMounted();

  useEffect(() => {
    setDate(dayjs());
  }, []);

  const isLight: boolean = resolvedTheme === 'light';

  const srcPath = `/quark_${isLight ? 'light' : 'dark'}.gif`;

  const [animationEnded, setAnimationEnded] = useState<boolean>(false);

  return (
    <Wrapper>
      <TextWrapper>
        <TextRowWrapper>
          <TextGroupWrapper>
            <Text size={3} color="gray8" padding="tiny">ID 255212</Text>
            <Text size={3} color="gray8" padding="tiny">DATA SET: POLARIS </Text>
            <Text size={3} color="gray8" padding="tiny">UNIT GROUP: M22 </Text>
          </TextGroupWrapper>
          <TextGroupWrapper align="right">
            <Text size={3} color="gray8" padding="tiny">{date?.toISOString()}</Text>
            <Text size={3} color="gray8" padding="tiny">[UP TO DATE]</Text>
          </TextGroupWrapper>
        </TextRowWrapper>
        <TextRowWrapper>
          <TextGroupWrapper>
            <Text size={3} color="gray8" padding="tiny">UNIT TESTS: OK</Text>
            <Text background="cyan1" size={3} color="gray1" padding="tiny">FPS: {fps}</Text>
          </TextGroupWrapper>
          <TextGroupWrapper align="right">
            <Text size={3} color="gray8" padding="tiny">FRAMER-MOTION</Text>
            <Text size={3} color="gray8" padding="tiny">8.5.3-ALPHA.1 </Text>
          </TextGroupWrapper>
        </TextRowWrapper>
      </TextWrapper>
      <ImageWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >

        <AnimatePresence>

          <DottedCircle
            as={motion.div}
            initial={{ scale: 1.2, opacity: 0 }}
            animate={animationEnded ? { scale: hover ? [1, 1, 1] : [1, 1.05, 1], opacity: 1 } : { scale: 1, opacity: 1 }}
            onAnimationComplete={() => setAnimationEnded(true)}
            transition={animationEnded
              ? { repeat: Infinity, duration: 4 }
              : {
                  type: 'spring',
                  stiffness: 100,
                  damping: 10,
                  delay: 1.8,
                }}
            color={hover ? 'cyan1' : undefined}
          />
        </AnimatePresence>
        <Box
          as={motion.div}
          animate={{
            rotate: [0, 20, 0],
          }}
          transition={{ repeat: Infinity, duration: 8 }}
        >

          <Box
            as={motion.div}
            animate={{
              // scale: [0.8, 1, 0.8],
            }}
            transition={{ repeat: Infinity, duration: 4 }}
          >
            <AnimatePresence>
              {isMounted && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 3, ease: 'easeOut' }}
                  exit={{ scale: 0 }}
                  key="quark_gif"
                >
                  <Image
                    src={srcPath}
                    alt="Sample analysis"
                    width={250}
                    height={250}
                    draggable={false}
                    style={{ userSelect: 'none' }}
                  />
                </motion.div>

              )}
            </AnimatePresence>
          </Box>
        </Box>
      </ImageWrapper>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  background: '$cyan14',
});

const ImageWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '360px',
  height: '300px',
});

const DottedCircle = styled(motion.div, {
  position: 'absolute',
  width: '260px',
  height: '260px',
  borderRadius: '50%',
  border: '3px dotted $cyan2',
  transition: '200ms',
  variants: {
    color: {
      cyan1: {
        border: '3px dotted $cyan1',
      },
      cyan9: {
        border: '3px dotted $cyan9',
      },
    }
  }
});

const TextWrapper = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  padding: '8px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
});

const TextRowWrapper = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

const TextGroupWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3px',
  variants: {
    align: {
      right: {
        alignItems: 'flex-end'
      }
    }
  }
});

export default SampleAnalysis;
