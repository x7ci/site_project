/* eslint-disable react/jsx-key */
import BorderContainer from '@/components/BorderContainer';
import { Table, TableBody, TableCell, TableRow } from '@/components/stitches';
import { keyframes } from '@stitches/react';
import { styled } from 'stitches.config';

interface Props {

}

const DataGrid = ({ }: Props) => {
  return (
    <Wrapper>
      <Table borderColor="cyan1" backgroundColor="cyan3" >
        <TableBody>
          {[...Array(6)].map((_, i) => (
            <TableRow key={`${i}datagridrow`}>
              {[...Array(27)].map((_, i) => (
                <TableCell key={`${i}datagridrowcell`} size="1" backgroundColor="rootBackground" align="center">
                  <DataBoxWrapper>
                    <AnimatingBox animation={i === 3 ? 'scale' : undefined} />
                    {i % 4 === 0 && (
                      <Dot />
                    )}
                  </DataBoxWrapper>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

DataGrid.defaultProps = {

};

const Wrapper = styled('div', {

});

const DataBoxWrapper = styled('div', {
  position: 'relative',
  background: '',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const DataBox = styled('div', {
  width: '14px',
  height: '14px',
  border: '1px solid $cyan1',
  '&:before': {
    content: '',
    position: 'absolute',
    background: '$cyan1',
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
});

const flashAnimation = keyframes({
  '0%': {
    background: '$cyan3',
    // transform: 'translateX(-5px)'
  },
  '100%': {
    transform: 'none',
    background: 'unset',
  },
});

const scaleAnimation = keyframes({
  '0%': {
    scale: 0,
    opacity: 1,
    // transform: 'translateX(-5px)'
  },
  '50%': {
    opacity: 1,
    // transform: 'translateX(-5px)'
  },
  '100%': {
    scale: 2.5,
    opacity: 0,
  },
});

const AnimatingBox = styled('div', {
  position: 'absolute',
  opacity: 0,
  border: '1px solid $cyan3',
  // background: 'red',
  width: '10px',
  height: '10px',
  variants: {
    animation: {
      scale: {
        animation: `${scaleAnimation} 1000ms ease-out`,
        animationIterationCount: '2',

      }
    },
    visibility: {
      hide: {
        display: 'none',
      }
    }
  }
});

const Dot = styled('div', {
  background: '$cyan1',
  width: '4px',
  height: '4px',
  borderRadius: '50%',
  // position: 'absolute',
  // top: '50%',
  // left: '50%',
  // transform: 'translate(-50%, -50%)',
});

export default DataGrid;
