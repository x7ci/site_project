import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import { Table, TableBody, TableCell, TableRow } from "@/components/stitches";
import useRandomRange from "@/helpers/hooks/useRandomRange";
import { styled } from "stitches.config";
import { Text } from '../../../components/stitches/Text';

const TableData2 = () => {
    const outputRange = useRandomRange({ minValue: 1100, maxValue: 1400, updateInterval: 5000 });
    const steamPressure = useRandomRange({ minValue: 60, maxValue: 75, updateInterval: 5000 });
    const steamTemp = useRandomRange({ minValue: 250, maxValue: 300, updateInterval: 5000 });
    const turbineSpeed = useRandomRange({ minValue: 5122, maxValue: 10000, updateInterval: 5000 });
    const turbineHotspot = useRandomRange({ minValue: 80, maxValue: 90, updateInterval: 5000, digits: 1 });
    const mainBearingTemp = useRandomRange({ minValue: 40, maxValue: 60, updateInterval: 5000 });

    return (
        <Wrapper>
            <DottedTopBorderBox />
            <TableBodyWrapper>
                <Table size="1">
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">TOTAL_THREADS</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">32</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">--</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">FREQ_GOVERNOR</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">convervative</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">--</Text>
                            </TableCell>
                        </TableRow>
                        {/* <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">IO_SCHED</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">mq-deadline</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">--</Text>
                            </TableCell>
                        </TableRow> */}
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">OUTPUT_RANGE</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">{outputRange}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">mw</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">STEAM_PRESSURE</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="orange1">{steamPressure}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">bar</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">STEAM_TEMP</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">{steamTemp}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">°c</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">TURBINE_SPEED</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">{turbineSpeed}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">rpm</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">TURBINE_VIBR</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">41</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">hz</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">TURBINE_HOTSPOT</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="orange1">{turbineHotspot}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">°c</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">MAIN_BEARING_TEMP</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">{mainBearingTemp}</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">°c</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">TOTAL_PWR</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">13931</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">mWh</Text>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <Text size="4" color="gray10">UPTIME</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="cyan">1</Text>
                            </TableCell>
                            <TableCell>
                                <Text size="4" color="gray10">days</Text>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableBodyWrapper>
            <DottedTopBorderBox />
        </Wrapper>
    );
};

const Wrapper = styled('div', {
    background: '$cyan2',
    display: 'flex',
    flexDirection: 'column',
});

const TableBodyWrapper = styled('div', {
    // flex: 1,

    // overflow: 'auto', // Enables scroll
    // maxHeight: 210, // Enables scroll
});

export default TableData2;
