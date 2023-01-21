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
        }
    },
});
