import { ReactNode, useEffect, useRef } from "react";
import { styled } from "stitches.config";

interface Props {
    children: ReactNode
}

const BorderContainer = ({ children }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.onmousemove = (e) => {
                const x = e.pageX - containerRef.current!.offsetLeft
                const y = e.pageY - containerRef.current!.offsetTop

                containerRef.current!.style.setProperty('--x', `${x}px`)
                containerRef.current!.style.setProperty('--y', `${y}px`)
            };
        }
    }, []);

    return (
        <Container ref={containerRef}>
            {children}
        </Container>
    )
}

const Container = styled('div', {
    '--x': '50%',
    '--y': '50%',
    position: 'relative',
    appearance: 'none',
    padding: '10px',
    color: 'white',
    border: '2px solid transparent', // chjange rootbackground below:::
    background: 'linear-gradient($rootBackground, $rootBackground) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), #00C9A7, #845EC2) border-box'
});

export default BorderContainer;