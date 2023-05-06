import { SlicedButton } from '@/components/stitches/sliced-button';
import { useTheme } from '@/contexts/theme-provider/theme-provider';
import { useEffect, useState } from 'react';

const ThemeToggleButton = () => {
  const { setTheme, resolvedTheme } = useTheme();

  const [currentTheme, setCurrentTheme] = useState<string>();

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === 'light' ? 'dark' : 'light';

    setTheme(targetTheme);
  };

  useEffect(() => {
    setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  return (
    <SlicedButton
      onClick={toggleTheme}
      variant={{ '@bp3': 'standard' }}
      fontSize={5}
      weight={3}
      color="cyan8"
    >
      SWITCH THEME ({currentTheme?.toUpperCase() ?? '------'})
    </SlicedButton>
  );
};

export default ThemeToggleButton;
