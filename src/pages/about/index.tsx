import AnimateComponentMount from '@/components/AnimateComponentMount';
import UsernameIcon from '@/components/icons/UsernameIcon';
import { Box, ColoredBox, Text } from '@/components/stitches';
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

        {/* <Box css={{ height: 20 }} /> */}
        <AnimateComponentMount>
          <UsernameIcon width={515} height={240} scale={3.5} />
        </AnimateComponentMount>

        <Box css={{ height: 20 }} />

        <AnimateComponentMount>
          <ProjectStack />
        </AnimateComponentMount>
      </Wrapper>
    </>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export default Home;
