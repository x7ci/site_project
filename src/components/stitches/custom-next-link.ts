import Link from 'next/link';
import { styled } from 'stitches.config';

export const CustomNextLink = styled(Link, {
  color: 'unset',
  fontFamily: 'inherit',
  textDecoration: 'none',

  variants: {
    disable: {
      true: {
        pointerEvents: 'none'
      }
    }
  }
});
