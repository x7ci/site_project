import { styled } from "stitches.config";
import { Text } from './ThemedElements';

interface Props {

}

const SlicedButton = ({ }: Props) => {
    return (
        <SlicedButton2>
            <Text style={{ fontSize: 13 }} >home</Text>
        </SlicedButton2>
    )
}

// SlicedButton.defaultProps = {
//     width: '5px',
//     height: '20px'
// }

const SlicedButton2 = styled('button', {
    border: 0,
    padding: '6px 30px 6px 30px',
    position: 'relative',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
    "&:before": {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: '0px',
        transform: 'skewX(-30deg)',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: -1,
    }
});

const SlicedButton3 = styled('button', {
    border: 0,
    padding: '2px 3px 2px 3px',
    position: 'relative',
    background: 'transparent',
    cursor: 'pointer',
    fontFamily: 'inherit',
    "&:before": {
        content: '',
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        borderRadius: '0px',
        transform: 'skewX(-30deg)',
        backgroundColor: '$rootBackground',
        zIndex: -1,
    }
});

export default SlicedButton;