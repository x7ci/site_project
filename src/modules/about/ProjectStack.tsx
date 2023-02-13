import AnimateComponentMount from '@/components/AnimateComponentMount';
import Chip from '@/components/Chip/Chip';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import NextjsIcon from '@/components/icons/NextjsIcon';
import StitchesIcon from '@/components/icons/StitchesIcon';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';

interface Props {

}

const ProjectStack = ({ }: Props) => {
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
      <Box css={{ height: 20 }} />
      <DottedTopBorderBox>
        <StackContainer>
          <Chip text="NEXT.JS" link='https://nextjs.org/'>
            <NextjsIcon scale={1} color="gray12" width={55} />
          </Chip>
          <Chip text="STITCHES" link='https://stitches.dev/'>
            <StitchesIcon scale={1} color="gray1" size={20} />
          </Chip>
        </StackContainer>
      </DottedTopBorderBox>
    </Wrapper>
  );
};

ProjectStack.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  maxWidth: '600px'
});

const StackContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  background: '$cyan14',
  padding: '12px',
  gap: '25px',
});

export default ProjectStack;
