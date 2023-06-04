import CornerDotsBox from '@/components/ui/corner-dots-box';
import { Box, ColoredBox, WidgetWrapper, T } from '@/components/stitches';
import ModelRender from './model-render';
import WidgetHeader from '@/components/widget/widget-header';

const ModelRenderContainer = () => {
  return (
    <>
      <WidgetWrapper>

        <WidgetHeader>
          <WidgetHeader.SpaceBetween>
            <Box>
              <T color="cyan1" weight={2}>MODEL </T>
              <T color="cyan1" weight={1} >RENDER</T>
            </Box>
            <Box>
              <T color="cyan1" weight={2}>ID: 34-842 </T>
            </Box>
          </WidgetHeader.SpaceBetween>
        </WidgetHeader>

        <Box css={{ h: 10 }} />

        <CornerDotsBox />

        <ModelRender />

      </WidgetWrapper>
      <CornerDotsBox />
    </>
  );
};

export default ModelRenderContainer;
