import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import { Box, ColoredBox, Text } from '../stitches';

interface Props {
  children: ReactNode
  text?: string
  gap?: number
  link?: string
}

const Chip = ({ children, text, link, gap = 8 }: Props) => {
  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      css={{ all: 'unset' }}
    >
      <Wrapper>
        <IconWrapper>
          {children}
        </IconWrapper>
        <Box css={{ width: gap }} />
        <ColoredBox
          // color="gray4"
          size="unset"
        >
          <Text size="4" color="cyanLight1" weight="3">{text}</Text>
        </ColoredBox>
      </Wrapper>
    </Box>
  );
};

const Wrapper = styled('button', {
  border: 0,
  fontFamily: 'inherit',
  fontSize: 'inherit',
  all: 'unset',
  // background: '$cyanLight1',
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  padding: '3px 3px 3px 10px',
  height: '20px',

});

const IconWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  // background: 'red',
  alignItems: 'center',
  textAlign: 'center',
  // margin: '0px 3px 0px 10px',
});

export default Chip;
