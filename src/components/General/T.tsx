import { color, type FontWeight, letterSpacing, size } from '@/helpers/CssVariables';
import type { ElementType, ComponentPropsWithoutRef, PropsWithChildren, CSSProperties } from 'react';

interface PolymorphicAsProp<E extends ElementType> {
  as?: E
}

type PolymorphicProps<E extends ElementType> = PropsWithChildren<ComponentPropsWithoutRef<E> & PolymorphicAsProp<E>>;

type TextType = 'p' | 'span';

const defaultElement: TextType = 'span';

const properties = {
  color,
  size,
  letterSpacing,
};

type CustomTextProps<E extends ElementType = TextType> = PolymorphicProps<E> & {
  color?: keyof typeof properties.color
  size?: keyof typeof properties.size
  letterSpacing?: keyof typeof properties.letterSpacing
  weight?: FontWeight
  uppercase?: boolean
};

export default function T({
  as,
  children,
  color = 'initial',
  size = 'initial',
  letterSpacing = 'initial',
  weight = 'initial',
  uppercase,
  style,
  ...restProps
}: CustomTextProps) {
  const Component = as ?? defaultElement;

  const stylePresets: CSSProperties = {
    color: properties.color[color],
    fontSize: properties.size[size],
    letterSpacing: properties.letterSpacing[letterSpacing],
    textTransform: uppercase ? 'uppercase' : undefined,
    fontWeight: weight
  };

  return (
    <Component
      style={{ ...stylePresets, ...style }}
      {...restProps}
    >
      {children}
    </Component>
  );
}
