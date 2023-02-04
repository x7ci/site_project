import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import Image from 'next/image';
import useIsMounted from '@/helpers/hooks/useIsMounted';

const ThemeToggle = () => {
  const { resolvedTheme } = useTheme();

  const isMounted = useIsMounted();

  const isLight: boolean = isMounted && resolvedTheme === 'light';

  return (
    <Image
      src="/react_hexagon.png"
      alt="Picture of the author"
      width={43}
      placeholder="empty"
      draggable={false}
      style={{ userSelect: 'none', filter: isLight ? 'invert(1)' : undefined }}
      height={46}
    />
  );
};

export default ThemeToggle;
