import { Box, type CssProps } from '../stitches';
import { type theme } from 'stitches.config';

export interface Props {
  color?: keyof typeof theme.colors
  css?: CssProps
  scale?: number
  width?: number
  height?: number
}

const CurvedProgress = ({ color = 'cyan1', css, width = 200, height = 210, scale = 1 }: Props) => {
  return (
    <>
      <Box
        as="svg"
        viewBox="0 0 760 760"
        css={{ fill: `$${color}`, width, height, ...css, transform: 'rotate(-119deg)' }}
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="10%" x2="100%" y2="0%">
            <Box as="stop" offset="50%" css={{ stopColor: 'rgb(255, 255, 0)', stopOpacity: 1 }} />
            <Box as="stop" offset="0%" css={{ stopColor: 'rgb(255, 0, 0)', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <Box
          as="path"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M173.252 60.0094C173.446 61.4761 175.102 62.2413 176.351 61.4476C233.539 25.0909 301.341 4.04307 374.04 4.04307C578.392 4.04307 744.052 170.35 744.052 375.5C744.052 376.002 744.051 376.504 744.049 377.005C744.044 378.125 744.948 379.038 746.068 379.038V379.038C747.173 379.038 748.072 378.147 748.076 377.043C748.078 376.529 748.079 376.014 748.079 375.5C748.079 168.117 580.616 0 374.04 0C300.535 0 231.982 21.2857 174.163 58.0521C173.504 58.4712 173.15 59.2351 173.252 60.0094V60.0094Z"
          fill="#323755"
          css={{
            scale,
            strokeWidth: 15,
            stroke: 'url(#grad1)',
            fill: 'url(#grad1)'
          }}
        />
      </Box>
    </>

  );
};

export default CurvedProgress;
