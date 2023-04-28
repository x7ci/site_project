import { type HTMLAttributes, type DetailedHTMLProps } from 'react';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  w?: number | string
  h?: number | string
}

const Box = ({ w, h, children, ...divProps }: Props) => {
  return (
    <div style={{ width: w, height: h }} {...divProps}>
      {children}
    </div>
  );
};

export default Box;
