import { ReactNode } from "react";
import { styled } from "stitches.config";

interface Props {
    children: ReactNode
    withHorizontalLine: boolean
}

const DottedTopBorderBox = ({ children, withHorizontalLine }: Props) => {
    return (
        <Wrapper>
            <DottedBorderBox>
                <DottedSeparatedBarWrapper>
                    {withHorizontalLine && (
                        <HorizontalLineWrapper>
                            <HorizontalLine />
                        </HorizontalLineWrapper>
                    )}
                    <DottedSeparatedBar>
                        <Dot />
                        <Dot />
                    </DottedSeparatedBar>
                </DottedSeparatedBarWrapper>
                {children}
            </DottedBorderBox>
        </Wrapper>
    )
}

DottedTopBorderBox.defaultProps = {
    withHorizontalLine: false
} as Partial<Props>

const Wrapper = styled('div', {

});

const DottedBorderBox = styled('div', {
    // border: '2px solid #fff'
    // height: '$sizes$tileSize',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
});

const DottedSeparatedBarWrapper = styled('div', {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
});

const DottedSeparatedBar = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
});

const Dot = styled('div', {
    height: '3px',
    width: '3px',
    backgroundColor: '$textCyan',
    borderRadius: '50%',
    display: 'inline-block'
});

const HorizontalLineWrapper = styled('div', {
    position: 'relative'
});

const HorizontalLine = styled('div', {
    height: '2px',
    position: 'absolute',
    top: 0,
    right: 50,
    left: 50,
    bottom: 0,
    borderRadius: '4px',
    backgroundColor: '$textCyan',
});

export default DottedTopBorderBox;