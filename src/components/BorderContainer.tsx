import { type ReactNode, useEffect, useRef } from 'react';
import { styled } from 'stitches.config';

interface Props {
  children: ReactNode
}

const BorderContainer = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.onmousemove = (e) => {
        if (containerRef.current) {
          const x = e.pageX - containerRef.current.offsetLeft;
          const y = e.pageY - containerRef.current.offsetTop;

          containerRef.current.style.setProperty('--x', `${x}px`);
          containerRef.current.style.setProperty('--y', `${y}px`);
        }
      };
    }
  }, []);

  return (
    <Container ref={containerRef}>
      {children}
    </Container>
  );
};

const Container = styled('div', {
  '--x': '50%',
  '--y': '50%',
  display: 'flex',
  padding: '10px',
  color: 'white',
  border: '1px solid transparent', // Change rootbackground below
  background: 'linear-gradient($rootBackground, $rootBackground) padding-box, radial-gradient(farthest-corner at var(--x) var(--y), $cyan9, rgba(0,0,0,0)) border-box'
});

export default BorderContainer;
