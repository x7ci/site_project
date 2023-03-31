import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Box, ColoredBox, Text, Underline } from '@/components/stitches';
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
            This is my personal site built and designed by me. It features a concept dashboard with various components like tables, charts and metrics. 
            The design system is inspired by FUI type designs. All data is locally generated and no external connections are made.
            <br />
            <br />
            Source code is available at&nbsp;
            <Underline>
              <Text size="5" color="gray12" weight="3" background="cyan10" >
                <Box
                  as="a"
                  href={githubRepoLink}
                  target="_blank"
                  css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
                >
                  x7ci/site_project
                </Box>
              </Text>
            </Underline>
            . You can write to me at&nbsp;
            <Underline>
              <Text size="5" color="gray12" weight="3" background="cyan10">
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
            </Underline>
            for inquiries.
          </Text>
        </Background>
      </DottedTopBorderBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  // minWidth: '450px',
});

const Background = styled('div', {
  background: '$cyan14',
  padding: '12px',
  display: 'flex',
  flexDirection: 'column'
});

export default About;
