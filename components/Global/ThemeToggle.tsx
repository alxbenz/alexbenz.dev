"use client";

import useTheme from "@/hooks/useTheme";
import React from "react";

interface ThemeToggleProps {}

export const ThemeToggle: React.FC<ThemeToggleProps> = () => {
    const [theme, setTheme] = useTheme();

    return (
        <div className="dark:text-slate-300">
            <button className="m-4" onClick={() => setTheme("light")}>
                light
            </button>
            <button className="m-4" onClick={() => setTheme("dark")}>
                dark
            </button>
            <button className="m-4" onClick={() => setTheme("system")}>
                system
            </button>
        </div>
    );
};
