import { styled } from "stitches.config";

export const Table = styled('table', {
    borderCollapse: 'collapse',
    display: 'table',
    width: '100%',
    overflow: 'auto',

    variants: {
        size: {
            1: {
                height: '210px'
            }
        }
    }
});

export const TableBody = styled('tbody', {

});

export const TableRow = styled('tr', {
    transition: '250ms',
    '&:hover': {
        background: '$cyan4'
    },
    // '&:nth-child(odd)': {
    //     background: '$cyan2'
    // }
});

export const TableCell = styled('td', {
    padding: '0px 12px 0px 12px',

    variants: {
        size: {
            'unset': {
                padding: 'unset',
            }
        }
    }
});
