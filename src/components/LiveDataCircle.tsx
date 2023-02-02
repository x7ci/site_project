import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { styled } from "stitches.config";

const LiveDataCircle = () => {
    const animationControls = useAnimation();

    useEffect(() => {
        const interval = setInterval(animationSequence, 3300);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const animationSequence = async () => {
        animationControls.set({
            scale: 1,
            opacity: 1
        });

        await animationControls.start({
            scale: 3,
            opacity: 0,
        });

        await animationControls.start({
            scale: 1,
            opacity: 0
        });
    };

    return (
        <Wrapper>
            <CircleBorderAnimated
                animate={animationControls}
                transition={{
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

const Wrapper = styled('div', {
    position: 'relative',
});

const CircleBorderAnimated = styled(motion.div, {
    position: 'absolute',
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