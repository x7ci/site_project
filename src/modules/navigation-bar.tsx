import DottedTopBorderBox from '@/components/dotted-top-border-box';
import HexagonFigureIcon from '@/components/icon/hexagon-figure-icon';
import StarIcon from '@/components/icon/star-icon';
import { Box, Button, SlicedButton, T } from '@/components/stitches';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import { type ReactNode } from 'react';
import { styled } from 'stitches.config';
import ThemeToggleButton from './index/theme-toggle-button';

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
            <Box>
              <T color="yellow1" size={{ '@initial': 11, '@bp4': 9 }} weight={2}>FULL STACK </T>
              <T size={{ '@initial': 11, '@bp4': 9 }} weight={1} >DEVELOPER</T>
            </Box>
            <Box>
              <T color="gray12" size={5} weight={2}>SITE_PROJECT / </T>
              <T color="gray11" size={5} weight={2}>X7CI.ENGINEER</T>
            </Box>
          </NavbarTitleContainer>
          <NavbarLinksContainer>
            <NavbarLinksRow>
              <Link href="/">
                <SlicedButton
                  type={router.asPath === '/' ? 'primary' : 'secondary'}
                  variant={{ '@bp3': 'standard' }}
                  size={{ '@bp4': 'dense' }}
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
                  size={{ '@bp4': 'dense' }}
                  fontSize={5}
                  weight={3}
                >
                  ABOUT
                </SlicedButton>
              </Link>
              <ThemeToggleButton />
            </NavbarLinksRow>
          </NavbarLinksContainer>
          <NavbarLinksRight>
            <Box
              as="a"
              href="https://github.com/x7ci/site_project"
              target="_blank">

              <NavbarRightButton>
                <Box css={{ display: 'flex', justifyContent: 'center', textAlign: 'center', gap: '3px' }}>
                  <StarIcon color='gray12' width={12} height={12} />
                  GITHUB
                </Box>
              </NavbarRightButton>
            </Box>
          </NavbarLinksRight>
        </NavigationBarBox>
      </DottedTopBorderBox>

      <Box css={{ h: 30, '@bp3': { h: 'unset' } }} />

      <DottedTopBorderBox withHorizontalLine />

      <Box css={{ h: 20 }} />

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
  height: '60px',
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
  justifyContent: 'end',
  height: '$sizes$navigationBarHeight',
  '@bp3': {
    position: 'absolute',
    width: '100%',
    top: '42px',
    left: '0px',
  },
});

const NavbarLinksRight = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
});

const NavbarLinksRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: 10,

  '@bp3': {
    overflowX: 'auto',
    scrollbarWidth: 'thin',
  },
});

export const NavbarRightButton = styled('button', {
  cursor: 'pointer',
  border: 0,
  padding: '6px 24px 6px 24px',
  fontFamily: 'inherit',
  fontSize: '$fontSizes$4',
  fontWeight: '700',
  background: 'none',
  transition: '150ms',
  whiteSpace: 'nowrap',
  color: '$gray12',
  height: '30px',

  '&:hover': {
    transition: '150ms',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
});

export default NavigationBar;
