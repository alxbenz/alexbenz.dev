import React from "react";
import { ThemeToggle } from "./ThemeToggle";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
    return (
        <nav className="z-10 px-6 py-2 flex justify-end fixed bg-opacity-90 w-full">
            <ThemeToggle />
        </nav>
    );
};
