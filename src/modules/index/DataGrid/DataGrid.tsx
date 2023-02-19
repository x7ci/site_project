import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { Table, TableBody, TableCell, TableRow } from '@/components/stitches';
import { type ComponentProps, keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

export type DotColor = ComponentProps<typeof Dot>['background'];

export enum ItemSeverity {
  high = 3,
  medium = 2,
  low = 1
}

type SeverityColorTypes = {
  [key in ItemSeverity]: DotColor;
};

const severityColor: SeverityColorTypes = {
  [ItemSeverity.low]: 'cyan1',
  [ItemSeverity.medium]: 'yellow1',
  [ItemSeverity.high]: 'red1',
};

export interface DataGridItem {
  isActive: boolean
  severity?: ItemSeverity
}

export type DataGridRow = DataGridItem[];

interface Props {
  data: DataGridRow[]
  highlightSeverity?: ItemSeverity
}

const DataGrid = ({ data, highlightSeverity }: Props) => {
  return (
    <DottedTopBorderBox>
      <Wrapper>
        <Table borderColor="cyan1" backgroundColor="cyan11" >
          <TableBody>
            {data.map((dataGridRow: DataGridRow, i) => (
              <TableRow key={`${i}datagridrow`}>
                {dataGridRow.map((dataGridItem: DataGridItem, i) => (
                  <TableCell key={`${i}datagridrowcell`} size="1" backgroundColor="rootBackground" align="center">
                    <DataBoxWrapper>
                      {highlightSeverity && (
                        <AnimatingBox
                          animation={(dataGridItem.severity === highlightSeverity) ? 'scale' : undefined}
                          css={{ animationDelay: `${(i * 5)}0ms` }} /** Delay animation relative to DataGridItem postion */
                        />
                      )}
                      {(dataGridItem.isActive) && (
                        <Dot background={dataGridItem.severity ? severityColor[dataGridItem.severity] : undefined} />
                      )}
                    </DataBoxWrapper>
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Wrapper>
    </DottedTopBorderBox>

  );
};

const Wrapper = styled('div', {
  // background: '$cyan14',
  // padding: 10,
  height: '120px',
});

const DataBoxWrapper = styled('div', {
  position: 'relative',
  // background: '',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const flashAnimation = keyframes({
  '0%': {
    background: '$cyan9',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    transform: 'none',
    background: 'unset',
  },
});

const scaleAnimation = keyframes({
  '0%': {
    // scale: 0,
    opacity: 1,
    // transform: 'translateY(0px)'
  },
  '50%': {
    opacity: 1,
    // transform: 'translateY(0px)'
  },
  '100%': {
    // scale: 1.5,
    // transform: 'translateY(-5px)',
    opacity: 0,
  },
});

const AnimatingBox = styled('div', {
  position: 'absolute',
  opacity: 0,
  border: '2px solid $cyan8Opaque',
  // background: '$cyan8',
  width: '17.5px',
  height: '17.5px',
  variants: {
    animation: {
      scale: {
        animation: `${scaleAnimation} 2000ms ease-out infinite 0s;`,
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
      yellow1: {
        background: '$yellow1'
      },
      red1: {
        background: '$red1'
      }
    }
  }
});

export default DataGrid;
