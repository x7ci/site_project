import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';

const githubRepoLink: string = 'https://github.com/x7ci/site_project';

const About = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan1" weight={2}>ME </Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <DottedTopBorderBox>
        <Background>
          <Box css={{ height: 10 }} />
          <Text color="gray12" size="6">
            This is my personal site.
            It&apos;s still under development.
          </Text>
          <Box css={{ height: 20 }} />

          <Text color="gray12" size="6">
            Source code is available at
            {' '}
            <Text size="5" color="gray12" weight="3" background="cyan10" >
              <Box
                as="a"
                href={githubRepoLink}
                target="_blank"
                css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
              >
                x7ci@github
              </Box>
            </Text>
            .
            You can write to me at
            {' '}
            <Text size="5" color="gray12" weight="3" background="cyan10" >
              <Box
                as="a"
                href="mailto:contact@x7ci.engineer"
                target="_blank"
                css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
              >
                contact@x7ci.engineer
              </Box>
            </Text>
            {' '}
            for inquiries.
          </Text>
          {/* <Box css={{ height: 20 }} /> */}

        </Background>
      </DottedTopBorderBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  minWidth: '450px',
});

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column'
});

export default About;
