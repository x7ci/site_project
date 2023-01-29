import { motion } from "framer-motion";
import { styled } from "stitches.config";
import { Box } from "./ThemedElements";

interface Props {

}

const LiveDataCircle = ({ }: Props) => {
    return (
        <Wrapper>
            <CircleBorderAnimated
                animate={{
                    scale: [2, 2, 1],
                    opacity: [.8, 0, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'easeOut',
                }}
            />
            <CircleBorder>
                <Circle />
            </CircleBorder>
        </Wrapper>
    )
}

LiveDataCircle.defaultProps = {

}

const Wrapper = styled('div', {
    position: 'relative',
});

const CircleBorderAnimated = styled(motion.div, {
    position: 'absolute',
    // top: 0,
    // bottom: 0,
    // left: 0,
    // right: 0,
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid rgba(216, 60, 60, 0.5)',
    transition: '200ms',
    variants: {
        color: {
            cyan3: {
                border: '3px dotted $cyan3',
            },
            cyanCustom: {
                border: '3px dotted rgba(153, 250, 255, .9)',
            }
        }
    },
});

export const CircleBorder = styled('div', {
    position: 'relative',
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '2px solid rgba(216, 60, 60, 0.5)',
    transition: '200ms',
    variants: {
        color: {
            cyan3: {
                border: '3px dotted $cyan3',
            },
            cyanCustom: {
                border: '3px dotted rgba(153, 250, 255, .9)',
            }
        }
    },
});


const Circle = styled('div', {
    background: 'rgba(216, 60, 60, 0.8)',
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});


export default LiveDataCircle;