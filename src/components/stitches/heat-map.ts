import { styled } from 'stitches.config';

export const TableDescriptionCell = styled('div', {
  size: '20px',
  display: 'flex',
  justifyContent: 'right',
  alignItems: 'center',
  textAlign: 'center',

  variants: {
    align: {
      right: {
        justifyContent: 'right',
      },
      center: {
        justifyContent: 'center',
      }
    }
  }
});

export const DescriptionContainer = styled('div', {
  display: 'flex',
  variants: {
    flex: {
      row: {
        flexDirection: 'row'
      },
      column: {
        flexDirection: 'column'
      }
    }
  }
});
