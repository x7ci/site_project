import { useTheme } from "@/contexts/ThemeProvider/ThemeProvider";
import { useState, useEffect } from "react";

const ThemeToggle = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    const toggleTheme = () => {
        const targetTheme = resolvedTheme === "light" ? "dark" : "light";

        setTheme(targetTheme);
    };

    return (
        <button onClick={toggleTheme}>
            Switch theme
        </button>
    );
};

export default ThemeToggle;