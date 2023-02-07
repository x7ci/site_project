import BorderContainer from '@/components/BorderContainer';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import DataGrid, { type DataGridRow } from './DataGrid';
import { sample } from 'lodash';
import { useEffect, useState } from 'react';

const generateDataGrid = () => {
  const data: DataGridRow[] = [];

  for (let i = 0; i < 6; i++) {
    const dataGridRow: DataGridRow = [];

    for (let j = 0; j < 27; j++) {
      const enabled: boolean = Math.random() > 0.68;

      const active: boolean = Math.random() > 0.8;

      const isRed: boolean = Math.random() > 0.9;

      dataGridRow.push({
        enabled,
        active,
        color: isRed ? 'red1' : sample(['cyan1', 'yellow']),
      });
    }

    data.push(dataGridRow);
  }

  return data;
};

const DataGridContainer = () => {
  const [data, setData] = useState<DataGridRow[]>([]);

  useEffect(() => {
    setData(generateDataGrid());
  }, []);

  const warnings: number = data.filter((dataGridRow) => dataGridRow.filter((dataGridItem) => dataGridItem.color === 'red1')).length;

  return (
    <Wrapper>
      <ColoredBox color="cyan2" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan" weight={2}>ACTIVE </Text>
            <Text color="cyan" weight={1} >NODES</Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />

      <BorderContainer>
        <DataGrid data={data} />
      </BorderContainer>
    </Wrapper>
  );
};

DataGridContainer.defaultProps = {

};

const Wrapper = styled('div', {
  // minWidth: '500px'
});

export default DataGridContainer;
