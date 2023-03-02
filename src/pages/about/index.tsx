import AnimateComponentMount from '@/components/AnimateComponentMount';
import { Box, ColoredBox, Text } from '@/components/stitches';
import About from '@/modules/about/About';
import ProjectStack from '@/modules/about/ProjectStack';
import Head from 'next/head';
import { styled } from 'stitches.config';

const Home = () => {
  return (
    <>
      <Head>
        <title>x7ci - Full Stack Developer</title>
        <meta name="description" content="x7ci - about" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1">
            <Text color="gray1" weight="2" >ABOUT</Text>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ height: 20 }} />

        <ComponentsContainer>
          <Box css={{ flex: 1, minWidth: 300, maxWidth: 600 }}>
            <AnimateComponentMount>
              <About />
            </AnimateComponentMount>
          </Box>

          <Box css={{ flex: 1, minWidth: 300, maxWidth: 600 }}>
            <AnimateComponentMount>
              <ProjectStack />
            </AnimateComponentMount>
          </Box>
        </ComponentsContainer>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const ComponentsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '30px',
  flexWrap: 'wrap',
});

export default Home;
