import SquareBoxesIcon from '@/components/icons/SquareBoxesIcon';
import { styled } from 'stitches.config';
import { Text } from '@/components/stitches';
import DottedTopBorderBox from '@/components/DottedTopBorderBox';
import { type ReactNode } from 'react';

interface Props {
  icon: ReactNode
  title: string
}

const SingleDataMetric = ({ icon, title }: Props) => {
  return (
    <Wrapper>
      <TopHeader>
        <DottedTopBorderBox>
          <IconContainer>
            {icon}
          </IconContainer>
          <DottedTopBorderBox />
        </DottedTopBorderBox>

        <DottedTopBorderBox
          onlyRight
          css={{ flex: 1 }}
        >
          <TitleContainer>
            <Text color="cyanLight" size="5" weight={3}>{title}</Text>
          </TitleContainer>
          <DottedTopBorderBox onlyRight />

        </DottedTopBorderBox>

      </TopHeader>

    </Wrapper>
  );
};

SingleDataMetric.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  display: 'flex',
  width: 'calc($sizes$tileSize * 6)'
});

const TopHeader = styled('div', {
  display: 'flex',
  height: '$sizes$tileSize',
  flex: 1,
  alignItems: 'center',
  background: '$cyan4'
});

const IconContainer = styled('div', {
  width: '34px',
  height: '30px',
  background: '$cyan4',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});

const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '$sizes$tileSize',
  // background: 'red',
  // height: '200px',
  // width: '100%',
  // height: 30

});

export default SingleDataMetric;
