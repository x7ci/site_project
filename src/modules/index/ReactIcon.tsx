import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import { useState, useEffect } from "react";
import Image from 'next/image';

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    const isLight: boolean = resolvedTheme === 'light';

    return (
        <>
            {mounted && (
                <Image
                    src="/react_hexagon.png"
                    alt="Picture of the author"
                    width={43}
                    draggable={false}
                    style={{ userSelect: 'none', filter: isLight ? 'invert(1)' : undefined }}
                    height={46}
                />
            )}
        </>
    );
};

export default ThemeToggle;