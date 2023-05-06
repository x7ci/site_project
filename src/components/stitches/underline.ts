import { styled } from 'stitches.config';

export const Underline = styled('div', {
  display: 'inline-block',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    width: '100%',
    transform: 'scaleX(0)',
    height: '2px',
    bottom: 0,
    left: 0,
    backgroundColor: '$yellow1',
    transformOrigin: 'bottom left',
    transition: 'transform 0.25s ease-out',
  },

  '&:hover:after': {
    transform: 'scaleX(1)',
    transformOrigin: 'bottom right'
  }
});
