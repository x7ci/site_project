import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import ProgressBar from "@/components/ProgressBar";
import { Box, Text } from "@/components/ThemedElements";
import { useEffect, useState } from "react";
import { styled } from "stitches.config";

interface Props {

}

const DetailedMetrics = ({ }: Props) => {
    const [progress1, setProgress1] = useState<number>(30);

    const [progress2, setProgress2] = useState<number>(72);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress1((c) => {
                const randomDouble = Math.random() * 10;
                const shouldIncrease: boolean = Math.random() < 0.5;

                if (c > 45)
                    return (c - randomDouble);

                if (c < 13)
                    return (c + randomDouble);

                if (shouldIncrease) {
                    return (c + randomDouble);
                }

                return (c - randomDouble);
            })

            setProgress2((c) => {
                const randomDouble = Math.random() * 10;
                const shouldIncrease: boolean = Math.random() < 0.5;

                if (c > 85)
                    return (c - randomDouble);

                if (c < 56)
                    return (c + randomDouble);

                if (shouldIncrease) {
                    return (c + randomDouble);
                }

                return (c - randomDouble);
            })
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <Wrapper>
            <DottedTopBorderBox>
                <MetricGroupWrapper>
                    <Box css={{ height: 10 }} />

                    <MetricGroup>
                        <Dot />
                        <Text weight='3' size={4} color="cyanLight" >IDX_21321_LOAD</Text>
                        <ProgressBar percent={progress1} />
                    </MetricGroup>
                    <MetricGroup>
                        <Dot color='orange1' />
                        <Text weight='3' size={4} color="cyanLight" >IDX_75322_LOAD</Text>
                        <ProgressBar percent={progress2} filledColor="$orange1" />
                    </MetricGroup>

                    <Box css={{ height: 5 }} />
                </MetricGroupWrapper>
                <DottedTopBorderBox />
            </DottedTopBorderBox>
        </Wrapper>
    )
}

DetailedMetrics.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
    minWidth: '250px',
});

const MetricGroupWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: '$cyan2',
    height: '60px',
    paddingLeft: '10px',
    paddingRight: '10px',
});

const MetricGroup = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
})

const Dot = styled('div', {
    height: '8px',
    width: '8px',
    backgroundColor: '$cyan',
    borderRadius: '50%',
    variants: {
        color: {
            orange1: {
                backgroundColor: '$orange1',
            }
        }
    }
});

export default DetailedMetrics;