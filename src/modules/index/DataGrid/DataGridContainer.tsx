import { Box, ColoredBox, Text, Button } from '@/components/stitches';
import { styled } from 'stitches.config';
import DataGrid, { ItemSeverity, type DataGridRow } from './DataGrid';
import { sample } from 'lodash';
import { useEffect, useState } from 'react';
import { keyframes } from '@stitches/react';
import WarningIcon from '@/components/icons/WarningIcon';
import SquareBoxesIcon from '@/components/icons/SquareBoxesIcon';
import SingleDataMetric from './SingleDataMetric';
import ActivityIcon from '@/components/icons/ActivityIcon';

const generateDataGrid = (): DataGridRow[] => {
  const data: DataGridRow[] = [];

  for (let i = 0; i < 6; i++) {
    const dataGridRow: DataGridRow = [];

    for (let j = 0; j < 27; j++) {
      const isActive: boolean = Math.random() > 0.8;

      const isHighSeverity: boolean = Math.random() > 0.8;

      dataGridRow.push({
        isActive,
        severity: isActive ? (isHighSeverity ? ItemSeverity.high : sample([ItemSeverity.low, ItemSeverity.medium]) ?? ItemSeverity.low) : undefined,
      });
    }

    data.push(dataGridRow);
  }

  return data;
};

const DataGridContainer = () => {
  const [data, setData] = useState<DataGridRow[]>([]);

  const [highlightSeverity, setHighlightSeverity] = useState<ItemSeverity | undefined>(ItemSeverity.high);

  useEffect(() => {
    setData(generateDataGrid());
  }, []);

  const warningCount: number = data.reduce((count, current) => count + current.filter((dataGridItem) => dataGridItem.severity === ItemSeverity.high).length, 0);

  return (
    <Wrapper>
      <ColoredBox color="cyan14" size="max" >
        <Box css={{ display: 'flex', alignItems: 'center' }}>
          <Box>
            <Text color="cyan1" weight={2}>ACTIVE </Text>
            <Text color="cyan1" weight={1} >NODES</Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />

      {/* <BorderContainer>
      </BorderContainer> */}

      <Box css={{ height: 10 }} />

      <ButtonContainer>
        <SquareBoxesIcon color='cyan1' size={32} scale={1} />
        <Button
          type={!highlightSeverity ? 'primary' : 'secondary'}
          onClick={() => setHighlightSeverity(undefined)}
          weight={3}
          fontSize="6"
        >
          RESET
        </Button>
        <Button
          type={highlightSeverity === ItemSeverity.low ? 'primary' : 'secondary'}
          onClick={() => setHighlightSeverity(ItemSeverity.low)}
          weight={3}
          fontSize="6"
        >
          LOW_SEV
        </Button>
        <Button
          type={highlightSeverity === ItemSeverity.medium ? 'primary' : 'secondary'}
          onClick={() => setHighlightSeverity(ItemSeverity.medium)}
          weight={3}
          fontSize="6"
        >
          MED_SEV
        </Button>
        <Button
          type={highlightSeverity === ItemSeverity.high ? 'primary' : 'secondary'}
          onClick={() => setHighlightSeverity(ItemSeverity.high)}
          weight={3}
          fontSize="6"
        >
          HIGH_SEV
        </Button>

      </ButtonContainer>
      <Box css={{ height: 15 }} />

      <DataGrid data={data} highlightSeverity={highlightSeverity} />

      <Box css={{ height: 15 }} />

      {/* <ColoredBox color="cyan14" size="1">

        <WarningFoundWrapper>
          <WarningIcon color="red1" />
          <Text size="4" weight="3" color="red1" >WARNINGS: {warningCount} </Text>
        </WarningFoundWrapper>
      </ColoredBox> */}

      <SingleDataMetric
        icon={<SquareBoxesIcon color='cyan1' scale={0.5} size={16} />}
        title="NODES"
      />

      <Box css={{ height: 20 }} />


      <SingleDataMetric
        icon={<ActivityIcon color='cyan1' scale={.3} size={29} />}
        title="ACTIVE"
      />

      <Box css={{ height: 20 }} />


      <SingleDataMetric
        icon={<WarningIcon color='cyan1' scale={.9} size={21} />}
        title="ALARMS"
      />

    </Wrapper>
  );
};

const ButtonContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
});

const blinkAnimation = keyframes({
  '0%': {
    opacity: '100%',
    // transform: 'translateX(-5px)'
  },
  '50%': {
    opacity: '60%',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    opacity: '100%'
  },
});

const BlinkingOpacity = styled('div', {
  animation: `${blinkAnimation} 2000ms linear infinite 0s;`,
});

const WarningFoundWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const Wrapper = styled('div', {

});

export default DataGridContainer;
