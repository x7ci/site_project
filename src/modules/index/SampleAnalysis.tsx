import { Box, SlicedButton, Text } from "@/components/ThemedElements";
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import { useState, useEffect } from "react";
import Image from 'next/image'
import { styled } from "stitches.config";
import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import { keyframes } from "@stitches/react";
import { motion } from 'framer-motion';
import dayjs, { Dayjs } from 'dayjs';

const SampleAnalysis = () => {
    const [date, setDate] = useState<Dayjs>();

    useEffect(() => {
        setDate(dayjs())
    }, []);

    return (
        <Wrapper>
            <DottedTopBorderBox>
                <TextWrapper>
                    <TextRowWrapper>
                        <TextGroupWrapper>
                            <Text size={3} color="gray8">ID 255212</Text>
                            <Text size={3} color="gray8">DATA SET: POLARIS </Text>
                            <Text size={3} color="gray8">UNIT GROUP: M22 </Text>
                        </TextGroupWrapper>
                        <TextGroupWrapper align="right">
                            <Text size={3} color="gray8">{date?.toISOString()}</Text>
                            <Text size={3} color="gray8">[UP TO DATE]</Text>
                        </TextGroupWrapper>
                    </TextRowWrapper>
                    <TextRowWrapper>
                        <TextGroupWrapper>
                            <Text size={3} color="gray8">RFC 123</Text>
                        </TextGroupWrapper>
                        <TextGroupWrapper align="right">
                            <Text size={3} color="gray8">RFC 123</Text>
                        </TextGroupWrapper>
                    </TextRowWrapper>
                </TextWrapper>
                <ImageWrapper>
                    <DottedCircle
                        animate={{
                            scale: [1.05, 1, 1, 1.05],
                            borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                    />
                    <Box
                        as={motion.div}
                        animate={{
                            rotate: [0, 20, 0],
                        }}
                        transition={{ repeat: Infinity, duration: 8 }}
                    >

                        <Box
                            as={motion.div}
                            animate={{
                                scale: [.9, 1, 1, .9],
                                borderRadius: ["50%", "50%", "50%", "50%", "50%"],
                            }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >

                            <Image
                                src="/quark.gif"
                                alt="Sample analysis"
                                width={250}
                                height={250}
                                draggable={false}
                                style={{ userSelect: 'none' }}
                            />
                        </Box>
                    </Box>
                </ImageWrapper>
            </DottedTopBorderBox>
            <DottedTopBorderBox />
        </Wrapper>
    );
};

const Wrapper = styled('div', {
    width: '390px',
    height: '300px',
    background: '$cyan2',
});

const ImageWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '390px',
    height: '300px',
});

const DottedCircle = styled(motion.div, {
    position: 'absolute',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    border: '3px dotted $cyan3',
});

const TextWrapper = styled('div', {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    padding: '8px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
});

const TextRowWrapper = styled('div', {
    display: 'flex',
    justifyContent: 'space-between'
});

const TextGroupWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '3px',
    variants: {
        align: {
            right: {
                alignItems: 'flex-end'
            }
        }
    }
});



export default SampleAnalysis;