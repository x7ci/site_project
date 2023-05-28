import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, WidgetWrapper, T } from '@/components/stitches';
import ModelRender from './model-render';

const ModelRenderContainer = () => {
  return (
    <>
      <WidgetWrapper>
        <ColoredBox color="cyan14" size="max" height={20} >
          <Box css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box>
              <T color="cyan1" weight={2}>MODEL </T>
              <T color="cyan1" weight={1} >RENDER</T>
            </Box>
            <Box>
              <T color="cyan1" weight={2}>ID: 34-842 </T>
            </Box>
          </Box>
        </ColoredBox>
        <Box css={{ height: 10 }} />
        <CornerDotsBox />
        <ModelRender />
      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

export default ModelRenderContainer;
