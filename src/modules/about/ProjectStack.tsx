import Chip from '@/components/Chip/Chip';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import EChartsIcon from '@/components/icons/EChartsIcon';
import FramerIcon from '@/components/icons/FramerIcon';
import NextjsIcon from '@/components/icons/NextjsIcon';
import ReactIcon from '@/components/icons/ReactIcon';
import StitchesIcon from '@/components/icons/StitchesIcon';
import TypeScriptIcon from '@/components/icons/TypeScriptIcon';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';

const ProjectStack = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan1" weight={2}>PROJECT </Text>
            <Text color="cyan1" weight={1} >STACK</Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <DottedTopBorderBox>
        <Background>

          <StackContainer>
            <Chip text="NEXT.JS" link='https://nextjs.org/'>
              <NextjsIcon scale={1} color="gray12" width={55} />
            </Chip>
            <Chip text="REACT" link='https://reactjs.org/'>
              <ReactIcon scale={1} color="gray12" width={24} height={18.5} />
            </Chip>
            <Chip text="TYPESCRIPT" link='https://www.typescriptlang.org/'>
              <TypeScriptIcon scale={1} color="gray12" width={22} height={17} />
            </Chip>
            <Chip text="STITCHES" link='https://stitches.dev/'>
              <StitchesIcon scale={1} color="gray1" size={20} />
            </Chip>
            <Chip text="ECHARTS" link='https://echarts.apache.org/'>
              <EChartsIcon scale={1} color="gray12" width={84} height={20} />
            </Chip>
            <Chip text="FRAMER MOTION" link='https://www.framer.com/motion/'>
              <FramerIcon scale={1} color="gray12" width={25} height={18} />
            </Chip>
          </StackContainer>
        </Background>
        <Box css={{ height: 20 }} />
      </DottedTopBorderBox>
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
