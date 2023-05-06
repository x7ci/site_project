import { T } from '@/components/stitches';
import { styled } from 'stitches.config';
import { sample } from 'lodash';
import { type UnitCodeData, type UnitCodeRow, UnitCode, unitCodeColors } from './alarm-view.types';

export const generateUnitCodes = (): UnitCodeData => {
  const data: UnitCodeData = [];

  for (let j = 0; j < 4; j++) {
    const unitCodeRow: UnitCodeRow = [];

    for (let k = 0; k < 4; k++) {
      const randomUnitCode = sample(Object.values(UnitCode)) as UnitCode;
      const isEVC: boolean = Math.random() > 0.8;
      unitCodeRow.push(isEVC ? UnitCode.EVC : randomUnitCode);
    }

    data.push(unitCodeRow);
  }

  return data;
};

interface Props {
  data?: UnitCodeData
}

const AlarmViewCodeGrid = ({ data }: Props) => {
  return (
    <Wrapper>
      <UnitRowContainer>
        {data?.map((unitCodeRow: UnitCodeRow, i: number) => (
          <UnitRow key={`${unitCodeRow.toString()}-${i}`}>
            {unitCodeRow.map((unitCode, j) => (
              <SingleUnit key={`${unitCode}-MC${j}`} variant={unitCodeColors[unitCode].variant}>
                <T size="4" weight={3}>
                  {unitCode} - MC1
                </T>
              </SingleUnit>
            ))}
          </UnitRow>
        ))}
      </UnitRowContainer>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  maxWidth: 'calc($sizes$tileSize * 9)',
  opacity: .90,
});

export const SingleUnit = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: 58,
  '@bp570': {
    width: 48,
  },
  alignItems: 'center',
  flexWrap: 'wrap',
  height: 17,

  [`& ${T}`]: {
    fontFamily: '$fonts$petch',
    fontSize: 9,
    // letterSpacing: .2,
  },

  variants: {
    variant: {
      primary: {
        background: 'unset',
      },
      secondary: {
        background: '$cyan10',
      },
      cyanPrimary: {
        background: '$cyan8',

        [`& ${T}`]: {
          color: '$cyan1'
        }
      },
      cyanSecondary: {
        [`& ${T}`]: {
          color: '$cyan1'
        }
      },
      orangePrimary: {
        [`& ${T}`]: {
          color: '$orange1'
        }
      },
      yellowSecondary: {
        [`& ${T}`]: {
          color: '$yellow1'
        }
      }
    }
  }
});

const UnitRow = styled('div', {
  display: 'flex',
  gap: 8,
  justifyContent: 'space-between',
});

const UnitRowContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export default AlarmViewCodeGrid;
