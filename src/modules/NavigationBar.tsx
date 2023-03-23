import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import HexagonFigureIcon from '@/components/icons/HexagonFigureIcon';
import { Box, SlicedButton, Text } from '@/components/stitches';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import ThemeToggle from './index/ThemeToggle';

interface Props {
  children?: ReactNode
}

const NavigationBar = ({ children }: Props) => {
  const router: NextRouter = useRouter();

  return (
    <Wrapper>
      <DottedTopBorderBox>
        <NavigationBarBox>
          <HexagonFigureIcon />
          <NavbarTitleContainer>
            <Text color="yellow1" size={11} weight={2} >
              {'FULL STACK '}
              <Text size={11} weight={1} >DEVELOPER</Text>
            </Text>
            <Text color="gray12" size={5} weight={2}>
              {'SITE_PROJECT / '}
              <Text color="gray11" size={5} weight={2}>
                X7CI.ENGINEER
              </Text>
            </Text>
          </NavbarTitleContainer>
          <NavbarLinksContainer>
            <Box css={{ height: 30, background: '', display: 'flex', justifyContent: 'flex-end', textAlign: 'center', alignItems: 'center' }}>
              {/** Top navigation bar items goes here. */}
            </Box>

            <NavbarLinksRow>
              <Link href="/">
                <SlicedButton
                  type={router.asPath === '/' ? 'primary' : 'secondary'}
                  variant={{ '@bp3': 'standard' }}
                  fontSize={5}
                  weight={3}
                >
                  ANALYSIS
                </SlicedButton>
              </Link>

              <Link href="/about">
                <SlicedButton
                  type={router.asPath === '/about' ? 'primary' : 'secondary'}
                  variant={{ '@bp3': 'standard' }}
                  fontSize={5}
                  weight={3}
                >
                  ABOUT
                </SlicedButton>
              </Link>
              <ThemeToggle />
            </NavbarLinksRow>
          </NavbarLinksContainer>
        </NavigationBarBox>
      </DottedTopBorderBox>

      <DottedTopBorderBox withHorizontalLine />

      <Box css={{ height: 20 }} />

      {children}
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  margin: '$sizes$tileSize',
});

const NavigationBarBox = styled('div', {
  height: '$sizes$navigationBarHeight',
  paddingLeft: '12px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '14px',
  position: 'relative',

  /** Height for the space reserved for navigation buttons. */
  '$$buttonSpaceHeight': '30px',

  /** How many width px the space for the navigation buttons should start. */
  '$$buttonSpaceStart': '357px',

  '&:before': {
    content: '',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,

    background: '$navigationBarBackground',
    clipPath: `
      polygon(
        0% 0%,
        100% 0%,
        100% $$buttonSpaceHeight,
        calc(21px + $$buttonSpaceStart) $$buttonSpaceHeight,
        $$buttonSpaceStart 100%,
        0% 100%
      )`,
    // zIndex: -1,
    '@bp3': {
      clipPath: 'unset'
    },
  },
  '@bp3': {
    marginBottom: 60
  },
});

const NavbarTitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '276px',
  whiteSpace: 'nowrap',
});

const NavbarLinksContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '$sizes$navigationBarHeight',
  paddingRight: 20,
  '@bp3': {
    position: 'absolute',
    // height: '50px',
    width: '100%',
    top: '42px',
    left: '0px',
  },
});

const NavbarLinksRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,
});

export default NavigationBar;
