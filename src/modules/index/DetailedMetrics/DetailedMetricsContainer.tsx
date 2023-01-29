import { Box, ColoredBox, Text } from "@/components/ThemedElements";
import DetailedMetrics from "./DetailedMetrics";

const DetailedMetricsContainer = () => {
    return (
        <Box>
            <ColoredBox color="cyan2" size="max" >
                <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Text color="cyan" weight={2}>PERFORMANCE  </Text>
                        <Text color="cyan" weight={1}>METRICS</Text>
                    </Box>
                    {/* <Box>
                        <Text color="cyan" weight={2}>LIVE DATA</Text>
                    </Box> */}
                </Box>
            </ColoredBox>
            <Box css={{ height: 15 }} />
            <DetailedMetrics />
        </Box>
    )
};

export default DetailedMetricsContainer;