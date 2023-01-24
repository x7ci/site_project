import { styled } from "stitches.config";

export const Text = styled('span', {
    color: '$primary',
    background: 'unset',
    variants: {
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
            yellow: {
                color: '$textYellow'
            },
            cyan: {
                color: '$textCyan',
            },
            cyanLight: {
                color: '$textCyanLight',
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
    fontSize: '$fontSizes$2',
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
        backgroundColor: '$rootBackground',
        zIndex: -1,
    },
    "&:hover": {
        color: '$textYellow',
        "&:before": {
            transition: '250ms',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
        }
    },
    "&:active": {
        color: '$textYellow',
        "&:before": {
            backgroundColor: 'rgba(0, 0, 0, 0.0)',
        }
    }
});
