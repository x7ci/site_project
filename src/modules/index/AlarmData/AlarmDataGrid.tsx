import { Box, Text } from '@/components/stitches';
import { chakraPetch } from '@/helpers/Fonts';
import { styled } from 'stitches.config';

interface Props {

}

const AlarmData = ({ }: Props) => {
  return (
    <Wrapper>
      <UnitRowContainer>
        <UnitRow>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - MC1
            </Text>
          </SingleUnit>
          <SingleUnit variant="cyanSecondary">
            <Text size="4" weight={3}>
              AXH - MC2
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              AVC - MC3
            </Text>
          </SingleUnit>
          <SingleUnit variant="orangePrimary">
            <Text size="4" weight={3}>
              ERR - MC4
            </Text>
          </SingleUnit>
        </UnitRow>

        <UnitRow>

          <SingleUnit variant="yellowSecondary">
            <Text size="4" weight={3}>
              OBX - MD1
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - MD2
            </Text>
          </SingleUnit>
          <SingleUnit variant="secondary">
            <Text size="4" weight={3}>
              DCX - MD3
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - MD4
            </Text>
          </SingleUnit>
        </UnitRow>

        <UnitRow>

          <SingleUnit variant="secondary">
            <Text size="4" weight={3}>
              DCX - ME1
            </Text>
          </SingleUnit>
          <SingleUnit variant="orangePrimary">
            <Text size="4" weight={3}>
              ERR - ME2
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - ME3
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - ME4
            </Text>
          </SingleUnit>
        </UnitRow>

        <UnitRow>
          <SingleUnit variant="cyanSecondary">
            <Text size="4" weight={3}>
              AXH - MF1
            </Text>
          </SingleUnit>
          <SingleUnit>
            <Text size="4" weight={3}>
              EVC - MF2
            </Text>
          </SingleUnit>
          <SingleUnit variant="cyanPrimary" >
            <Text size="4" weight={3}>
              CTA - MF3
            </Text>
          </SingleUnit>
          <SingleUnit variant="secondary">
            <Text size="4" weight={3}>
              DCX - MF4
            </Text>
          </SingleUnit>
        </UnitRow>
      </UnitRowContainer>

    </Wrapper>
  );
};

const Wrapper = styled('div', {
  maxWidth: 'calc($sizes$tileSize * 9)',
  opacity: .85,
});

const SingleUnit = styled('div', {
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
  // gap: 3,
});

export default AlarmData;
