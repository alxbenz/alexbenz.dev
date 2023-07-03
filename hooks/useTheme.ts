import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";;

const defaultTheme = "light";

function useTheme() {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        let currentTheme = theme;

        if (currentTheme === "system") {
            currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        }

        const root = window.document.documentElement;

        root.classList.remove("dark", "light", "system");
        root.classList.add(currentTheme);

        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        setTheme(currentTheme ? (currentTheme as Theme) : defaultTheme);
    }, []);

    return [theme, setTheme] as const;
}

export default useTheme;
