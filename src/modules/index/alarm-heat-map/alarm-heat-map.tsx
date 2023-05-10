import { Table, TableBody, TableCell, TableRow } from '@/components/stitches';
import { type ComponentProps, keyframes } from '@stitches/react';
import { styled } from 'stitches.config';
import TimeDescription from './time-description';
import WeekDaysDescription from './week-days-description';

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

export interface HeatMapCell {
  isActive: boolean
  severity?: ItemSeverity
}

export interface HeatMapRow {
  day: string
  data: HeatMapCell[]
}

interface Props {
  data: HeatMapRow[]
  highlightSeverity?: ItemSeverity
}

const AlarmHeatMap = ({ data, highlightSeverity }: Props) => {
  return (
    <Wrapper>
      <TableContainer flex="column">
        <TimeDescription />
        <TableContainer flex="row">
          <Table borderColor="cyan1" backgroundColor="cyan11" >
            <TableBody>
              {data.map((heatMapRow: HeatMapRow, heatMapRowIndex: number) => (
                <TableRow
                  key={`${heatMapRowIndex}heatmaprow`}
                >
                  {heatMapRow.data.map((dataGridItem: HeatMapCell, i) => (
                    <TableCell
                      key={`${i}heat-map-row-cell`}
                      size="1"
                      backgroundColor="rootBackground"
                    >
                      <DataBoxWrapper>
                        {(dataGridItem.isActive) && (
                          <Dot background={dataGridItem.severity ? severityColor[dataGridItem.severity] : undefined} />
                        )}
                        {highlightSeverity && (
                          <AnimatingBox
                            animation={(dataGridItem.severity === highlightSeverity) ? 'scale' : undefined}
                            css={{ animationDelay: `${(i * 5)}0ms` }} /** Delay animation relative to HeatMapItem postion */
                          />
                        )}
                      </DataBoxWrapper>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <WeekDaysDescription days={data.map((dataGridRow) => dataGridRow.day)} />
        </TableContainer>
      </TableContainer>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  minWidth: '540px',
  overflowX: 'auto',
});

const TableContainer = styled('div', {
  display: 'flex',
  gap: '7px',
  rowGap: '2px',

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

const DataBoxWrapper = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const scaleAnimation = keyframes({
  '0%': {
    // scale: 0,
    opacity: 1,
  },
  '50%': {
    opacity: 1,
  },
  '100%': {
    // scale: 1.5,
    opacity: 0,
  },
});

const AnimatingBox = styled('div', {
  position: 'absolute',
  opacity: 0,
  border: '1.7px solid $cyan8Opaque',
  background: '$cyan12',
  left: '-1px',
  right: '-1px',
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
  zIndex: 1,
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

export default AlarmHeatMap;
