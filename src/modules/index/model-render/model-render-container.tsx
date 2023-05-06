import DottedTopBorderBox from '@/components/dotted-top-border-box';
import { Box, ColoredBox, DashboardComponentWrapper, T } from '@/components/stitches';
import ModelRender from './model-render';

const ModelRenderContainer = () => {
  return (
    <>
      <DashboardComponentWrapper>
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
        <DottedTopBorderBox />
        <ModelRender />
      </DashboardComponentWrapper>
      <DottedTopBorderBox />
    </>
  );
};

export default ModelRenderContainer;
