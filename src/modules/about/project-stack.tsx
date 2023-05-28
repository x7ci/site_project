import Chip from '@/components/chip/chip';
import CornerDotsBox from '@/components/ui/corner-dots-box';
import EChartsIcon from '@/components/icon/echarts-icon';
import EslintIcon from '@/components/icon/eslint-icon';
import FramerIcon from '@/components/icon/framer-icon';
import NextjsIcon from '@/components/icon/nextjs-icon';
import PnpmIcon from '@/components/icon/pnpm-icon';
import ReactIcon from '@/components/icon/react-icon';
import StitchesIcon from '@/components/icon/stitches-icon';
import TypeScriptIcon from '@/components/icon/typescript-icon';
import { Box, ColoredBox, T } from '@/components/stitches';
import { styled } from 'stitches.config';

const ProjectStack = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <T color="cyan1" weight={2}>PROJECT </T>
            <T color="cyan1" weight={1} >STACK</T>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <CornerDotsBox>
        <Background>

          <StackContainer>
            <Chip text="NEXT.JS" link='https://nextjs.org/'>
              <NextjsIcon color="gray12" width={55} />
            </Chip>
            <Chip text="REACT" link='https://reactjs.org/'>
              <ReactIcon color="gray12" width={24} height={18.5} />
            </Chip>
            <Chip text="TYPESCRIPT" link='https://www.typescriptlang.org/'>
              <TypeScriptIcon color="gray12" width={22} height={17} />
            </Chip>
            <Chip text="STITCHES" link='https://stitches.dev/'>
              <StitchesIcon color="gray1" size={20} />
            </Chip>
            <Chip text="ECHARTS" link='https://echarts.apache.org/'>
              <EChartsIcon color="gray12" width={78} height={18} />
            </Chip>
            <Chip text="FRAMER MOTION" link='https://www.framer.com/motion/'>
              <FramerIcon color="gray12" width={25} height={18} />
            </Chip>
            <Chip text="ESLINT" link='https://eslint.org/'>
              <EslintIcon color="gray12" width={65} height={18} />
            </Chip>
            <Chip text="PNPM" link='https://pnpm.io/'>
              <PnpmIcon color="gray12" secondColor="gray10" width={20} height={20} />
            </Chip>
          </StackContainer>
        </Background>
        <Box css={{ height: 20 }} />
      </CornerDotsBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  maxWidth: '600px',
});

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
});

const StackContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: '16px',
});

export default ProjectStack;
