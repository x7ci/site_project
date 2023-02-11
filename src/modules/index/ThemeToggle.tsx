import { SlicedButton } from '@/components/stitches/SlicedButton';
import { useTheme } from '@/contexts/ThemeProvider/ThemeProvider';
import useIsMounted from '@/helpers/hooks/useIsMounted';

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const isMounted = useIsMounted();

  if (!isMounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  return (
    <SlicedButton
      onClick={toggleTheme}
      variant={{ '@bp3': 'standard' }}
      fontSize={5}
      weight={3}
      color="cyan8"
    >
      SWITCH THEME ({resolvedTheme?.toUpperCase()})
    </SlicedButton>
  );
};

export default ThemeToggle;
