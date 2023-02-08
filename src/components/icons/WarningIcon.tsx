import { Box } from '../stitches';

export interface Props {
  color?: string
}

const WarningIcon = ({ color }: Props) => {
  return (
    <Box
      as="svg"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="22"
      css={{ fill: color, scale: 0.7 }}
    >
      <Box
        as="path"
        d="M12 1.96L1.29 21h21.42zm0 4.08L19.29 19H4.71z"
        css={{ fill: color }}
      />
      <Box
        as="path"
        d="M11 10h2v5h-2zm0 6h2v2h-2z"
        css={{ fill: color }}
      />
    </Box>
  );
};

export default WarningIcon;
