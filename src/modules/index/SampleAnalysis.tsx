import { SlicedButton } from "@/components/ThemedElements";
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import { useState, useEffect } from "react";
import Image from 'next/image'
import { styled } from "stitches.config";
import DottedTopBorderBox from "@/components/DottedTopBorderBox";

const SampleAnalysis = () => {
    return (
        <Wrapper>
            <DottedTopBorderBox>
                <ImageWrapper>
                    <Image
                        src="/quark.gif"
                        alt="Sample analysis"
                        width={270}
                        height={270}
                        draggable={false}
                        style={{ userSelect: 'none' }}
                    />
                </ImageWrapper>
            </DottedTopBorderBox>
            <DottedTopBorderBox />
        </Wrapper>
    );
};

const Wrapper = styled('div', {
    width: '300px',
    height: '300px',
});

const ImageWrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '300px',
    height: '300px',
});

export default SampleAnalysis;