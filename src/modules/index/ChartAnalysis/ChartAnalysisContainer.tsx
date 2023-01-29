import LiveDataCircle from "@/components/LiveDataCircle";
import { Box, ColoredBox, Text } from "@/components/ThemedElements";
import { styled } from "stitches.config";
import ChartAnalysis from "./ChartAnalysis";

const ChartAnalysisContainer = () => {
    return (
        <Wrapper>
            <ColoredBox color="cyan2" size="max" >
                <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Text color="cyan" weight={2}>HEALTH </Text>
                        <Text color="cyan" weight={1}>MONITOR</Text>
                    </Box>
                    <TitleTextRow>
                        <Text color="cyan" weight={2}>LIVE DATA</Text>
                        <LiveDataCircle />
                    </TitleTextRow>
                </Box>
            </ColoredBox>
            <Box css={{ height: 15 }} />
            <ChartAnalysis />

        </Wrapper>
    )
};

const Wrapper = styled('div', {
    // flex: 1.5,
});

const TitleTextRow = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    gap: '6px',
    alignItems: 'center',
})

export default ChartAnalysisContainer;