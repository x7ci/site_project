import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, T, Underline } from '@/components/stitches';
import { styled } from 'stitches.config';

const githubRepoLink: string = 'https://github.com/x7ci/site_project';

const About = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <T color="cyan1" weight={2}>ME </T>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <CornerDotsBox>
        <Background>
          <Box css={{ height: 10 }} />
          <T color="gray12" size="6">
            This is my personal site built and designed by me. It features a concept dashboard with various components like tables, charts and metrics.
            The design system is inspired by FUI type designs. All data is locally generated and no external connections are made.
            <br />
            <br />
            Source code is available at&nbsp;
            <Underline>
              <T size="5" color="gray12" weight="3" background="cyan10" >
                <Box
                  as="a"
                  href={githubRepoLink}
                  target="_blank"
                  css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
                >
                  x7ci/site_project
                </Box>
              </T>
            </Underline>
            .
            <br />
            <br />
            I am currently open to work (
            <Underline>
              <T size="5" color="gray12" weight="3" background="cyan10">
                <Box
                  as="a"
                  href="https://news.ycombinator.com/item?id=35424805#35585269"
                  target="_blank"
                  css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
                >
                  HN entry
                </Box>
              </T>
            </Underline>
            ). You can write to me at&nbsp;
            <Underline>
              <T size="5" color="gray12" weight="3" background="cyan10">
                <Box
                  as="a"
                  href="mailto:contact@x7ci.engineer"
                  target="_blank"
                  css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
                >
                  contact@x7ci.engineer
                </Box>
              </T>
            </Underline>
            {'.'}
          </T>
        </Background>
      </CornerDotsBox>
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
