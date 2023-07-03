import React, { useState } from "react";

interface ModeSwitchProps {
    defaultMode?: "light" | "dark" | "system";
}

export const ModeSwitch: React.FC<ModeSwitchProps> = ({
    defaultMode = "system",
}) => {
    const [mode, setMode] = useState(defaultMode);

    return (
        <div className="w-12 h-12 rounded-lg bg-white bg-opacity-100 shadow-inner shadow-slate-900 flex justify-center items-center text-slate-700">
            Icon
        </div>
    );
};
