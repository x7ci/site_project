import React, { type ReactNode, useRef } from 'react';
import { styled } from 'stitches.config';

interface Props {
  children: ReactNode
}

const HoverTransformContainer = ({ children }: Props) => {
  const animatedBoxRef = useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!animatedBoxRef.current) return;

    const bounds: DOMRect = animatedBoxRef.current.getBoundingClientRect();

    const mouseX: number = e.clientX;
    const mouseY: number = e.clientY;
    const leftX: number = mouseX - bounds.x;
    const topY: number = mouseY - bounds.y;

    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };

    const distance: number = Math.sqrt(center.x ** 2 + center.y ** 2);

    animatedBoxRef.current.style.transform = `rotate3d(${center.y / 100}, ${-center.x / 100}, 0, ${Math.log(distance) * 2}deg)`;
  };

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!animatedBoxRef.current) return;

    animatedBoxRef.current.style.transform = 'unset';
  };

  return (
    <Wrapper>
      <AnimatedBox
        ref={animatedBoxRef}
        onMouseLeave={onMouseLeave}
        onMouseMove={onMouseMove}
      >
        {children}
      </AnimatedBox>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  perspective: '4000px',
});

const AnimatedBox = styled('div', {
  transition: '150ms'
});

export default HoverTransformContainer;
