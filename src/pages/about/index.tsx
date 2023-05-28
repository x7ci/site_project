import AnimateComponentMount from '@/components/animate-component-mount/animate-component-mount';
import { Box, ColoredBox, T } from '@/components/stitches';
import About from '@/modules/about/about';
import ProjectStack from '@/modules/about/project-stack';
import Head from 'next/head';
import { styled } from 'stitches.config';

export default function Home() {
  return (
    <>
      <Head>
        <title>x7ci | about</title>
        <meta name="description" content="Private website built with React, TypeScript & Next.js." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <AnimateComponentMount>
          <ColoredBox color="cyan1">
            <T color="gray1" weight="2" >ABOUT</T>
          </ColoredBox>
        </AnimateComponentMount>

        <Box css={{ h: 20 }} />

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
