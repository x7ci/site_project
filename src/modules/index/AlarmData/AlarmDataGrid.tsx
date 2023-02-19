import { Text } from '@/components/stitches';
import { chakraPetch } from '@/helpers/Fonts';
import { styled } from 'stitches.config';
import { sample } from 'lodash';
import { type UnitCodeData, type UnitCodeRow, UnitCode, unitCodeColors } from './AlarmDataTypes';

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

const AlarmDataGrid = ({ data }: Props) => {
  return (
    <Wrapper>
      <UnitRowContainer>
        {data?.map((unitCodeRow: UnitCodeRow, i: number) => (
          <UnitRow key={`${unitCodeRow.toString()}-${i}`}>
            {unitCodeRow.map((unitCode, j) => (
              <SingleUnit key={`${unitCode}-MC${j}`} variant={unitCodeColors[unitCode].variant}>
                <Text size="4" weight={3}>
                  {unitCode} - MC1
                </Text>
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
  opacity: .85,
});

export const SingleUnit = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: 58,
  alignItems: 'center',
  flexWrap: 'wrap',
  height: 17,

  [`& ${Text}`]: {
    // letterSpacing: .2,
    ...chakraPetch.style,
    fontSize: 9,
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

        [`& ${Text}`]: {
          color: '$cyan1'
        }
      },
      cyanSecondary: {
        [`& ${Text}`]: {
          color: '$cyan1'
        }
      },
      orangePrimary: {
        [`& ${Text}`]: {
          color: '$orange1'
        }
      },
      yellowSecondary: {
        [`& ${Text}`]: {
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

export default AlarmDataGrid;
