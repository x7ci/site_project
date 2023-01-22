import { createStitches, createTheme, globalCss } from "@stitches/react";

export const { styled, getCssText } = createStitches({
    theme: {
        colors: {
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

            gray900: "hsl(205,5%,7%)",
            gray700: "hsl(205,5%,25%)",
            gray500: "hsl(205,5%,35%)",
            gray300: "hsl(205,5%,45%)",
            gray100: "hsl(205,5%,55%)",
            gray50: "hsl(205,5%,95%)",
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
        // backgroundSize: '2%',
        backgroundSize: '25px',
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