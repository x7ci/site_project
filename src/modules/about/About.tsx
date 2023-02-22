import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import UsernameIcon from '@/components/icons/UsernameIcon';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';

const About = () => {
  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan1" weight={2}>ME </Text>
            {/* <Text color="cyan1" weight={1} ></Text> */}
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      <DottedTopBorderBox>
        <Background>
          {/* <Box css={{ height: 6 }} />
          <UsernameWrapper>
            <UsernameIcon width={160} height={70} scale={2.4} initialColor="cyan12" color="gray12" />
          </UsernameWrapper>

          <Box css={{ height: 6 }} /> */}

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
                href="https://github.com/"
                target="_blank"
                css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
              >
                x7ci@github
              </Box>
            </Text>
            .
          </Text>
          <Box css={{ height: 20 }} />
          <Text>
            You can contact me at
            {' '}
            <Text size="5" color="gray12" weight="3" background="cyan10" >
              <Box
                as="a"
                href="mailto:mail@pm.me"
                target="_blank"
                css={{ all: 'unset', cursor: 'pointer', padding: '0 4px 0 4px' }}
              >
                mail@pm.me
              </Box>
            </Text>
            {' '}
            for inquiries.
          </Text>
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

const UsernameWrapper = styled('div', {
  padding: '0px 12px 0px 12px',
});

export default About;
