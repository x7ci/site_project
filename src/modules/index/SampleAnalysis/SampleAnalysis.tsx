import { Box, Text } from "@/components/ThemedElements";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image'
import { styled } from "stitches.config";
import DottedTopBorderBox from "@/components/DottedTopBorderBox";
import { motion } from 'framer-motion';
import dayjs, { Dayjs } from 'dayjs';
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";

const SampleAnalysis = () => {
    const [date, setDate] = useState<Dayjs>();

    const [hover, setHover] = useState<boolean>(false);

    const [fps, setFps] = useState<number>(34.413244);

    useEffect(() => {
        setDate(dayjs())

        const interval = setInterval(() => {
            setFps((c) => {
                const randomDouble = Math.random();
                const shouldIncrease: boolean = Math.random() < 0.5;

                if (c > 36)
                    return (c - randomDouble);

                if (c < 28)
                    return (c + randomDouble);

                if (shouldIncrease) {
                    return (c + randomDouble);
                }

                return (c - randomDouble);
            })
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const { resolvedTheme } = useTheme();

    const isLight: boolean = resolvedTheme === 'light';

    const srcPath = `/quark_${isLight ? 'light' : 'dark'}.gif`

    return (
        <DottedTopBorderBox>
            <Wrapper>
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
                            <Text size={3} color="gray8">UNIT TEST: OK</Text>
                            <Text size={3} color="gray8">FPS: {fps}</Text>
                        </TextGroupWrapper>
                        <TextGroupWrapper align="right">
                            <Text size={3} color="gray8">S-RENDER REACT </Text>
                            <Text size={3} color="gray8">V. 2.9.83 ALPHA </Text>
                        </TextGroupWrapper>
                    </TextRowWrapper>
                </TextWrapper>
                <ImageWrapper onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
                    <DottedCircle
                        animate={{
                            scale: hover ? [1, 1, 1] : [1.05, 1, 1.05],
                        }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        color={hover ? "cyanCustom" : undefined}
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
                                scale: [.8, 1, .8],
                            }}
                            transition={{ repeat: Infinity, duration: 4 }}
                        >
                            <Image
                                src={srcPath}
                                alt="Sample analysis"
                                width={250}
                                height={250}
                                draggable={false}
                                style={{ userSelect: 'none' }}
                            />
                        </Box>
                    </Box>
                </ImageWrapper>
            </Wrapper>
            <DottedTopBorderBox />
        </DottedTopBorderBox>
    );
};

const Wrapper = styled('div', {
    background: '$cyan2',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
});

const ImageWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '360px',
    height: '300px',
});

const DottedCircle = styled(motion.div, {
    position: 'absolute',
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    border: '3px dotted $cyan3',
    transition: '200ms',
    variants: {
        color: {
            cyan3: {
                border: '3px dotted $cyan3',
            },
            cyanCustom: {
                border: '3px dotted $cyan',
            }
        }
    }
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