import DottedTopBorderBox from '@/components/dotted-top-border-box';
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

export interface HeatMapItem {
  isActive: boolean
  severity?: ItemSeverity
}

export type HeatMapRow = HeatMapItem[];

interface Props {
  data: HeatMapRow[]
  highlightSeverity?: ItemSeverity
}

const AlarmHeatMap = ({ data, highlightSeverity }: Props) => {
  return (
    <DottedTopBorderBox>
      <Wrapper>
        <Table borderColor="cyan1" backgroundColor="cyan11" >
          <TableBody>
            {data.map((dataGridRow: HeatMapRow, i) => (
              <TableRow key={`${i}datagridrow`}>
                {dataGridRow.map((dataGridItem: HeatMapItem, i) => (
                  <TableCell key={`${i}heat-map-row-cell`} size="1" backgroundColor="rootBackground" align="center">
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
      </Wrapper>
    </DottedTopBorderBox>
  );
};

const Wrapper = styled('div', {
  height: '120px',
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
