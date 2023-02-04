import { styled } from 'stitches.config';

interface Props {
  width?: string
  height?: string
}

const FilledBox = ({ width, height }: Props) => {
  return (
    <ColorBox style={{ width, height }} />
  );
};

FilledBox.defaultProps = {
  width: '5px',
  height: '20px'
};

const ColorBox = styled('div', {
  backgroundColor: '$hiContrast',
});

export default FilledBox;
