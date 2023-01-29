import { styled } from "stitches.config";

export const Box = styled('div');

export const ColoredBox = styled('div', {
    width: 150,
    paddingLeft: '10px',
    paddingRight: '10px',
    variants: {
        color: {
            cyan: {
                background: '$cyan',
            },
            cyan2: {
                background: '$cyan2',
            },
            cyan3: {
                background: '$cyan3',
            }
        },
        size: {
            1: {
                width: 140,
            },
            2: {
                width: 200,
            },
            3: {
                width: 370,
            },
            4: {
                width: 520,
            },
            'max': {
                width: 'calc(100% - 20px)',
            },
        }
    }
})

export const Text = styled('span', {
    color: '$primary',
    background: 'unset',
    variants: {
        background: {
            cyan: {
                background: '$cyan'
            }
        },
        size: {
            1: {
                fontSize: '$1',
            },
            2: {
                fontSize: '$2',
            },
            3: {
                fontSize: '$3',
            },
            4: {
                fontSize: '$4',
            },
            5: {
                fontSize: '$5',
            },
            6: {
                fontSize: '$6',
            },
            7: {
                fontSize: '$7',
            },
            8: {
                fontSize: '$8',
            },
            9: {
                fontSize: '$9',
            },
            10: {
                fontSize: '$10',
            },
            11: {
                fontSize: '$11',
            },
            12: {
                fontSize: '$12',
            },
        },
        weight: {
            1: {
                fontWeight: '300'
            },
            2: {
                fontWeight: '400'
            },
            3: {
                fontWeight: '700'
            },
        },
        color: {
            gray1: {
                color: '$gray1',
            },
            gray2: {
                color: '$gray2',
            },
            gray3: {
                color: '$gray3',
            },
            gray4: {
                color: '$gray4',
            },
            gray5: {
                color: '$gray5',
            },
            gray6: {
                color: '$gray6',
            },
            gray7: {
                color: '$gray7',
            },
            gray8: {
                color: '$gray8',
            },
            gray9: {
                color: '$gray9',
            },
            gray10: {
                color: '$gray10',
            },
            gray11: {
                color: '$gray11',
            },
            gray12: {
                color: '$gray12',
            },
            yellow: {
                color: '$yellow'
            },
            cyan: {
                color: '$cyan',
            },
            cyan2: {
                color: '$cyan2',
            },
            cyan3: {
                color: '$cyan3',
            },
            cyanLight: {
                color: '$cyanLight',
            },
            orange1: {
                color: '$orange1',
            }
        }
    },
});

export const SlicedButton = styled('button', {
    weight: {
        1: {
            fontWeight: '300'
        },
        2: {
            fontWeight: '400'
        },
        3: {
            fontWeight: '700'
        },
    },
    border: 0,
    padding: '6px 32px 6px 32px',
    position: 'relative',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
    fontSize: '$fontSizes$6',
    transition: '200ms',
    zIndex: 1,
    whiteSpace: 'nowrap',
    color: '$gray12',
    "&:before": {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: '0px',
        transform: 'skewX(-35deg)',
        // backgroundColor: 'rgba(0, 0, 0, 0.3)',
        backgroundColor: '$navigationBarBackground',
        zIndex: -1,
        '@bp3': {
            transform: 'unset'
        },
    },
    "&:hover": {
        color: '$yellow',
        "&:before": {
            transition: '250ms',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
    },
    "&:active": {
        color: '$yellow',
        "&:before": {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
        }
    }
});
