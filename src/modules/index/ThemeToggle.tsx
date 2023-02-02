import { SlicedButton } from "@/components/ThemedElements";
import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import useIsMounted from "@/helpers/hooks/useIsMounted";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const { setTheme, resolvedTheme } = useTheme();
    
    const isMounted = useIsMounted();

    if (!isMounted) return null;

    const toggleTheme = () => {
        const targetTheme = resolvedTheme === "light" ? "dark" : "light";

        setTheme(targetTheme);
    };

    return (
        <SlicedButton onClick={toggleTheme}>
            switch theme ({resolvedTheme})
        </SlicedButton>
    );
};

export default ThemeToggle;