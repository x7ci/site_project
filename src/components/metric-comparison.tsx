import { styled } from 'stitches.config';
import { T2 } from '@/components/stitches';
import { useState, type ComponentProps } from 'react';

export enum MetricColor {
  orange = 'orange',
  cyan = 'cyan',
}

type MetricColorTypes = {
  [key in MetricColor]: {
    normal: ComponentProps<typeof T2>['color']
    dark: ComponentProps<typeof T2>['color']
    label: ComponentProps<typeof T2>['color']
  };
};

const metricColor: MetricColorTypes = {
  orange: {
    normal: 'orange1',
    dark: 'orange3',
    label: 'cyan9'
  },
  cyan: {
    normal: 'cyan1',
    dark: 'cyan6',
    label: 'cyan9'
  }
};

interface Metric {
  value: string | number
  label: string
}

interface Props {
  firstMetric: Metric
  secondMetric: Metric
  color: MetricColor
}

const MetricComparison = ({ firstMetric, secondMetric, color }: Props) => {
  const [secondMetricHover, setSecondMetricHover] = useState<boolean>(false);

  return (
    <Wrapper>
      <InlineElement>
        <NumberColumn>
          <T2 size="13" color={secondMetricHover ? metricColor[color].dark : metricColor[color].normal}>{firstMetric.value}</T2>
          <T2 size="8" color={metricColor[color].label}>{firstMetric.label}</T2>
        </NumberColumn>
      </InlineElement>

      <InlineElement css={{ w: 5 }} />
      <T2 size="13" color={metricColor[color].normal}>/</T2>
      <InlineElement css={{ w: 5 }} />
      <InlineElement>

        <NumberColumn onMouseEnter={() => setSecondMetricHover(true)} onMouseLeave={() => setSecondMetricHover(false)} >
          <T2 size="13" color={secondMetricHover ? metricColor[color].normal : metricColor[color].dark}>{secondMetric.value}</T2>
          <T2 size="8" color={metricColor[color].label}>{secondMetric.label}</T2>
        </NumberColumn>
      </InlineElement>
    </Wrapper>
  );
};

MetricComparison.defaultProps = {

} as Partial<Props>;

const Wrapper = styled('div', {
  display: 'flex',
  // justifyContent: 'center',
  alignItems: 'flex-start '
});

const NumberColumn = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 1,
});

const InlineElement = styled('div', {
  display: 'inline-block',
});

export default MetricComparison;
