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
      <Box css={{ h: 15 }} />
      <CornerDotsBox>
        <Background>
          <Box css={{ h: 10 }} />
          <T color="gray12" size="6">
            I'm a developer and Computer Science graduate with a strong background in frontend development, using primarily <b>React</b>, <b>TypeScript</b> and <b>Next.js</b>, and I have experience building large scale apps.
            I work across the stack and also have backend experience with <b>Postgres</b>, <b>GraphQL</b>, <b>Docker</b> and <b>C#</b> APIs.
            I have 3+ years of experience working in the wind engineering industry as a Full Stack Developer, where I built <b>dashboards</b>, <b>charts</b> and <b>performant interfaces</b> coupled with unique designs and animations.
            <br />
            <br />
            What you are looking at right now is my personal website - an over-engineered Next.js/React/TypeScript app with an FUI-inspired design system.
            It features a dashboard reflecting the design system, using various components like tables, charts and metrics.
            All the data visualized by the components is locally generated without any external connections. Source code is available at&nbsp;
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
            I'm always open to collaborate - whether you're a recruiter or an independent hacker, please reach out to me at {' '}
            <Underline>
              <T size="5" color="gray12" weight="3" background="cyan10">
                <Box
                  as="a"
                  href="mailto:contact@leet1.com"
                  target="_blank"
                  css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
                >
                  contact@leet1.com
                </Box>
              </T>
            </Underline>
            .
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
