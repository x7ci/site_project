import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import { styled } from "stitches.config";
import { Text } from '../../../components/ThemedElements';


interface Props {

}

const TableData = ({ }: Props) => {
    return (
        <Wrapper>
            <DottedTopBorderBox>
                <Table>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10"> CORE_TEMP_AVG</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">179.6</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">°F</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">CORE_THRE_AVG</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">33</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">%</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">CORE_LOAD_MAX</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">96</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">%</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">CACHE_LAT</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">68</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">ms</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">DRAM_LAT</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">22</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">ms</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">WATER_PUMP_SP</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">724</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">rpm</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">YAW_AXIS_DEG</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">16</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">°</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">CURR_OUTPUT</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="orange1">121.88</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">w</Text>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>
                            <Text size="4" color="gray10">MAX_OUTPUT</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="cyan">130</Text>
                        </TableCell>
                        <TableCell>
                            <Text size="4" color="gray10">w</Text>
                        </TableCell>
                    </TableRow>
                </Table>
            </DottedTopBorderBox>
            <DottedTopBorderBox />
        </Wrapper>
    );
};

TableData.defaultProps = {

}

const Wrapper = styled('div', {
    background: '$cyan2',

});

const Table = styled('table', {
    paddingLeft: '10px',
    paddingRight: '10px',
});

const TableRow = styled('tr', {
    transition: '250ms',
    '&:hover': {
        background: '$cyan4'
    },
    // '&:nth-child(odd)': {
    //     background: '$cyan4'
    // }
});

const TableCell = styled('td', {

});


export default TableData;
