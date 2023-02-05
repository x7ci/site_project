/* eslint-disable react/jsx-key */
import BorderContainer from '@/components/BorderContainer';
import { Box, ColoredBox, Text } from '@/components/stitches';
import { styled } from 'stitches.config';
import DataGrid from './DataGrid';

interface Props {

}

const DataGridContainer = ({ }: Props) => {
  return (
    <Wrapper>
      <ColoredBox color="cyan2" size="max" >
        <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Text color="cyan" weight={2}>MODEL </Text>
            <Text color="cyan" weight={1} >RENDER</Text>
          </Box>
          <Box>
            <Text color="cyan" weight={2}>ID: 34-842 </Text>
          </Box>
        </Box>
      </ColoredBox>
      <Box css={{ height: 15 }} />
      {/* <BorderContainer>
      </BorderContainer> */}

      <DataGrid />
    </Wrapper>
  );
};

DataGridContainer.defaultProps = {

};

const Wrapper = styled('div', {
  minWidth: '300px'

});

export default DataGridContainer;
