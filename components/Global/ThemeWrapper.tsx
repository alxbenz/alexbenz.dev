"use client";

import useTheme from "@/hooks/useTheme";
import React from "react";

interface ThemeWrapperProps {
    children: React.ReactNode;
}

export const ThemeWrapper: React.FC<ThemeWrapperProps> = ({ children }) => {
    const [theme] = useTheme();

    return <div className={theme as string}>{children}</div>;
};
