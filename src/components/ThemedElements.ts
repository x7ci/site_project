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
    padding: '6px 30px 6px 30px',
    position: 'relative',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
    "&:before": {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: '0px',
        transform: 'skewX(-35deg)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: -1,
    },
    "&:hover": {
        transition: '300ms',
        color: '$textYellow',
        "&:before": {
            transition: '200ms',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',

        }
    },
    "&:active": {
        transition: '300ms',
        color: '$textYellow',
        "&:before": {
            transition: '200ms',
            backgroundColor: 'rgba(0, 0, 0, 0.1)',

        }
    }
});
