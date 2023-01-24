import { createStitches, createTheme, globalCss } from "@stitches/react";
import { gray, grayDark } from '@radix-ui/colors';

export const { styled, getCssText } = createStitches({
    theme: {
        sizes: {
            tileSize: '30px',
            navigationBarHeight: '60px'
        },
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

            rootBackground: '#fff',
            backgroundBlendColor: '',

            textYellow: '#fcf6ba',
            textCyan: '#99faff',
            textCyanLight: '#defdff',

            primary: "$gray900",
            secondary: "$gray700",
            tertiary: "$gray500",
            link: "$blue500",
            border: "$gray900",

            blue500: "hsl(205,90%,45%)",

            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'white',

            tileUrl: 'url("tile_light.png")'

        },
        fontSizes: {
            1: '13px',
            2: '15px',
            3: '17px',
            4: '19px',
            5: '21px',
            6: '23px',
            7: '25px',
            8: '27px',
        },
    },
    media: {
        dark: "(prefers-color-scheme: dark)",
    },
});

export const darkTheme = createTheme({
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
        backgroundBlendColor: '$gray50',
        primary: "$gray50",
        secondary: "$gray200",
        tertiary: "$gray300",
        link: "$blue500",
        border: "$gray100",

        loContrast: 'hsl(206,10%,5%)',
        hiContrast: 'white',
        tileUrl: 'url("tile_dark.png")'
    },
});

export const globalStyles = globalCss({
    body: {
        margin: 0,
        padding: 0,
        backgroundImage: '$tileUrl',
        backgroundRepeat: 'repeat',
        transition: '250ms',
        transitionTimingFunction: 'ease-out',
        // backgroundSize: '2%',
        backgroundSize: '$sizes$tileSize',
        // background: '$backgroundBlendColor', /** This controls blend color with the tiles */
        backgroundBlendMode: 'multiply'
    },
    "@dark": {
        // notice the `media` definition on the stitches.config.ts file
        ":root:not(.light)": {
            ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
                const currentColor = darkTheme.colors[currentColorKey];
                const currentColorValue =
                    currentColor.value.substring(0, 1) === "$"
                        ? `$colors${currentColor.value}`
                        : currentColor.value;

                return {
                    [currentColor.variable]: currentColorValue,
                    ...varSet,
                };
            }, {}),
        },
    },
});

globalStyles();