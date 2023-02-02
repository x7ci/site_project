import { createStitches, createTheme, globalCss } from "@stitches/react";
import { gray, grayDark } from '@radix-ui/colors';

export const { styled, getCssText } = createStitches({
    theme: {
        sizes: {
            tileSize: '30px',
            navigationBarHeight: '60px'
        },
        colors: {
            /** Gray colors (inverted) */
            gray1: grayDark.gray1,
            gray2: grayDark.gray2,
            gray3: grayDark.gray3,
            gray4: grayDark.gray4,
            gray5: grayDark.gray5,
            gray6: grayDark.gray6,
            gray7: grayDark.gray7,
            gray8: grayDark.gray8,
            gray9: grayDark.gray9,
            gray10: grayDark.gray10,
            gray11: grayDark.gray11,
            gray12: grayDark.gray12,

            rootBackground: '#181923',

            navigationBarBackground: 'rgba(153, 250, 255, .06)',

            yellow: '#fcf6ba',
            cyan: '#99faff',
            cyanLight: '#defdff',
            cyan2: 'rgba(153, 250, 255, .018)',
            cyan3: 'rgba(153, 250, 255, .2)',
            cyan4: 'rgba(153, 250, 255, .02)',

            orange1: '#e66b30',

            red1: 'rgba(216, 60, 60, 0.8)',


            primary: "$gray50",

            blue500: "hsl(205,90%,45%)",

            loContrast: 'hsl(206,10%,5%)',
            hiContrast: 'white',
            tileUrl: 'url("tile_dark.png")'

        },
        fontSizes: {
            1: '5px',
            2: '7px',
            3: '9px',
            4: '11px',
            5: '13px',
            6: '15px',
            7: '17px',
            8: '19px',
            9: '21px',
            10: '23px',
            11: '25px',
            12: '27px',
        },
    },
    media: {
        dark: "(prefers-color-scheme: dark)",
        bp1: '(min-width: 1024px)',
        bp2: '(min-width: 768px)',
        bp3: '(max-width: 822px)',
    },
});

export const lightTheme = createTheme({
    colors: {
        /** Gray colors */
        gray1: gray.gray1,
        gray2: gray.gray2,
        gray3: gray.gray3,
        gray4: gray.gray4,
        gray5: gray.gray5,
        gray6: gray.gray6,
        gray7: gray.gray7,
        gray8: gray.gray8,
        gray9: gray.gray9,
        gray10: gray.gray10,
        gray11: gray.gray11,
        gray12: gray.gray12,

        cyan: gray.gray11,
        cyan2: gray.gray2,
        cyan3: gray.gray8,
        cyan4: gray.gray11,

        cyanLight: gray.gray9,

        rootBackground: '#fff',
        navigationBarBackground: gray.gray4,

        yellow: gray.gray11,

        primary: "$gray900",

        hiContrast: 'hsl(206,10%,5%)',
        loContrast: 'white',

        tileUrl: 'url("tile_light.png")',
    },
});

export const globalStyles = globalCss({
    body: {
        margin: 0,
        padding: 0,
        backgroundImage: '$tileUrl',
        backgroundRepeat: 'repeat',
        transition: '250ms ease-out',
        // backgroundSize: '2%',
        backgroundSize: '$sizes$tileSize',
        // background: '$backgroundBlendColor', /** This controls blend color with the tiles */
        backgroundBlendMode: 'multiply'
    },
    // "@dark": {
    //     // notice the `media` definition on the stitches.config.ts file
    //     ":root:not(.light)": {
    //         ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
    //             const currentColor = darkTheme.colors[currentColorKey];
    //             const currentColorValue =
    //                 currentColor.value.substring(0, 1) === "$"
    //                     ? `$colors${currentColor.value}`
    //                     : currentColor.value;

    //             return {
    //                 [currentColor.variable]: currentColorValue,
    //                 ...varSet,
    //             };
    //         }, {}),
    //     },
    // },
});

globalStyles();
