import { ReactNode } from "react";
import { styled } from "stitches.config";
import { Box } from "./ThemedElements";

const sizes = {
    1: 160,
    2: 160,
    3: 300,
    max: '100%'
}

interface Props {
    children: ReactNode
    size?: 1 | 2 | 3 | 'max',
}

const ColoredBox = ({ children, size }: Props) => {
    return (
        <Wrapper css={{ width: sizes[size!] }}>
            <Box css={{ width: 10 }} />
            {children}
            <Box css={{ width: 10 }} />
        </Wrapper>
    )
}

ColoredBox.defaultProps = {
    size: 1
} as Partial<Props>

const Wrapper = styled('div', {
    width: 130,
    display: 'flex',
    background: '$cyan'
    // justifyContent: 'center',
    // alignItems: 'center',
});

export default ColoredBox;