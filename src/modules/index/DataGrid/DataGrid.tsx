import { Table, TableBody, TableCell, TableRow } from '@/components/stitches';
import { type ComponentProps, keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

export type DotColor = ComponentProps<typeof Dot>['background'];

export interface DataGridItem {
  enabled: boolean
  color?: DotColor | undefined
  active: boolean
}

export type DataGridRow = DataGridItem[];

interface Props {
  data: DataGridRow[]
}

const DataGrid = ({ data }: Props) => {
  return (
    <Wrapper>
      <Table borderColor="cyan1" backgroundColor="cyan3" >
        <TableBody>
          {data.map((dataGridRow: DataGridRow, i) => (
            <TableRow key={`${i}datagridrow`}>
              {dataGridRow.map((dataGridItem: DataGridItem, i) => (
                <TableCell key={`${i}datagridrowcell`} size="1" backgroundColor="rootBackground" align="center">
                  <DataBoxWrapper>
                    <AnimatingBox animation={(dataGridItem.enabled && dataGridItem.active) ? 'scale' : undefined} />
                    {(dataGridItem.enabled && dataGridItem.color) && (
                      <Dot background={dataGridItem.color} />
                    )}
                  </DataBoxWrapper>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

DataGrid.defaultProps = {

};

const Wrapper = styled('div', {

});

const DataBoxWrapper = styled('div', {
  position: 'relative',
  background: '',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DataBox = styled('div', {
  width: '14px',
  height: '14px',
  border: '1px solid $cyan1',
  '&:before': {
    content: '',
    position: 'absolute',
    background: '$cyan1',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
});

const flashAnimation = keyframes({
  '0%': {
    background: '$cyan3',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    transform: 'none',
    background: 'unset',
  },
});

const scaleAnimation = keyframes({
  '0%': {
    scale: 0,
    opacity: 1,
    // transform: 'translateX(-5px)'
  },
  '50%': {
    opacity: 1,
    // transform: 'translateX(-5px)'
  },
  '100%': {
    scale: 2.5,
    opacity: 0,
  },
});

const AnimatingBox = styled('div', {
  position: 'absolute',
  opacity: 0,
  border: '1px solid $cyan3',
  width: '10px',
  height: '10px',
  variants: {
    animation: {
      scale: {
        animation: `${scaleAnimation} 1500ms ease-out infinite 0s;`,
      }
    },
    visibility: {
      hide: {
        display: 'none',
      }
    }
  }
});

const Dot = styled('div', {
  background: '$cyan1',
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  variants: {
    background: {
      cyan1: {
        background: '$cyan1'
      },
      yellow: {
        background: '$yellow'
      },
      red1: {
        background: '$red1'
      }
    }
  }
});

export default DataGrid;
