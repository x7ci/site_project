import { Box, ColoredBox, Text } from "@/components/stitches";
import { styled } from "stitches.config";
import SampleAnalysis from "./SampleAnalysis";

const SampleAnalysisContainer = () => {
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
            <SampleAnalysis />
        </Wrapper>
    )
};

const Wrapper = styled('div', {
    // flex: 1,
});

export default SampleAnalysisContainer;