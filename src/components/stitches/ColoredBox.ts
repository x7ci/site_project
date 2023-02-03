import { styled } from "stitches.config";

export const ColoredBox = styled('div', {
    width: 150,
    paddingLeft: '10px',
    paddingRight: '10px',
    variants: {
        color: {
            cyan: {
                background: '$cyan1',
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
});
