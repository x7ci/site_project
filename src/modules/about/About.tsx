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
      <Box css={{ height: 20 }} />
      <DottedTopBorderBox>
        <Background>
          <Box css={{ height: 6 }} />
          <UsernameWrapper>
            <UsernameIcon width={160} height={70} scale={2.4} initialColor="cyan12" color="cyanLight1" />
          </UsernameWrapper>
          <Box css={{ height: 20 }} />
          <Text color="gray11" size="6">
            This is my personal site.
          </Text>
          <Box css={{ height: 20 }} />
          <Text color="gray11" size="6">
            Currently building...
          </Text>
          <Box css={{ height: 20 }} />
          <Text color="gray11" size="6">
            Contact: email
          </Text>
        </Background>
      </DottedTopBorderBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  maxWidth: '600px',
});

const Background = styled('div', {
  background: '$cyan14',
  // padding: '12px',
});

const UsernameWrapper = styled('div', {
  padding: '0px 12px 0px 12px',
});

export default About;
