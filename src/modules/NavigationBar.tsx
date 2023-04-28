import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import HexagonFigureIcon from '@/components/icons/HexagonFigureIcon';
import { SlicedButton } from '@/components/stitches';
import Link from 'next/link';
import { type NextRouter, useRouter } from 'next/router';
import { useEffect, type ReactNode } from 'react';
import ThemeToggle from './index/ThemeToggle';
import styles from '@/styles/modules/NavigationBar.module.scss';
import { Box, T } from '@/components/General';
import { mediaQuery } from '@/helpers/CssVariables';
import { useMediaQuery } from '@/helpers/hooks/useMediaQuery';

interface Props {
  children?: ReactNode
}

const NavigationBar = ({ children }: Props) => {
  const router: NextRouter = useRouter();

  const isCompactNavBar = useMediaQuery(mediaQuery.navigationBarCompact);

  useEffect(() => {
    console.log(isCompactNavBar);
  }, [isCompactNavBar]);

  return (
    <Box className={styles.wrapper}>
      <DottedTopBorderBox>
      <Box className={styles.navigationBarBox}>
        <HexagonFigureIcon />
        <Box className={styles.titleContainer}>
          <Box>
            <T color="yellow1" size={11} weight="400">{'FULL STACK '}</T>
            <T color="gray12" size={11} weight="300" >DEVELOPER</T>
          </Box>
          <Box>
            <T color="gray12" size={5} weight="400">{'SITE_PROJECT / '}</T>
            <T color="gray11" size={5} weight="400">X7CI.ENGINEER</T>
          </Box>
        </Box>
        <Box className={styles.linksContainer}>
          <Box />

          <Box className={styles.linksRow}>
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
          </Box>
        </Box>
      </Box>
      </DottedTopBorderBox>

      {!isCompactNavBar && (
        <Box h={30} />
      )}

      <DottedTopBorderBox withHorizontalLine />

      <Box h={20} />

      {children}
    </Box>
  );
};

export default NavigationBar;

// const Wrapper = styled('Box', {
//   display: 'flex',
//   flexDirection: 'column',
//   margin: '$sizes$tileSize',
// });

// const NavigationBarBox = styled('Box', {
//   height: '$sizes$navigationBarHeight',
//   paddingLeft: '12px',
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   gap: '14px',
//   position: 'relative',

//   /** Height for the space reserved for navigation buttons. */
//   '$$buttonSpaceHeight': '30px',

//   /** How many width px the space for the navigation buttons should start. */
//   '$$buttonSpaceStart': '357px',

//   '&:before': {
//     content: '',
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: -1,

//     background: '$navigationBarBackground',
//     clipPath: `
//       polygon(
//         0% 0%,
//         100% 0%,
//         100% $$buttonSpaceHeight,
//         calc(21px + $$buttonSpaceStart) $$buttonSpaceHeight,
//         $$buttonSpaceStart 100%,
//         0% 100%
//       )`,
//     // zIndex: -1,
//     '@bp3': {
//       clipPath: 'unset'
//     },
//   },
//   '@bp3': {
//     marginBottom: 60
//   },
// });

// const NavbarTitleContainer = styled('Box', {
//   display: 'flex',
//   flexDirection: 'column',
//   width: '276px',
//   whiteSpace: 'nowrap',
// });

// const NavbarLinksContainer = styled('Box', {
//   display: 'flex',
//   flex: 1,
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   height: '$sizes$navigationBarHeight',
//   paddingRight: 20,
//   '@bp3': {
//     position: 'absolute',
//     // height: '50px',
//     width: '100%',
//     top: '42px',
//     left: '0px',
//   },
// });

// const NavbarLinksRow = styled('Box', {
//   display: 'flex',
//   flexDirection: 'row',
//   gap: 10,
// });
