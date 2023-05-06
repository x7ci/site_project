import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import { Box, T } from '../stitches';

interface Props {
  children: ReactNode
  text?: string
  gap?: number
  link?: string
}

const Chip = ({ children, text, link, gap = 6 }: Props) => {
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

        <T size="4" color="gray12" weight="3">{text}</T>
      </Wrapper>
    </Box>
  );
};

const Wrapper = styled('button', {
  border: 'unset',
  background: 'unset',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  display: 'flex',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  padding: '0px 5px 0px 5px',
  height: '20px',

});

const IconWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  margin: '0px 3px 0px 3spx',
});

export default Chip;
