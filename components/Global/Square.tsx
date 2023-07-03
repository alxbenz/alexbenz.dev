"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";

interface SquareProps {
    filled?: boolean;
    delay?: number;
}

export const Square: React.FC<SquareProps> = ({ filled, delay = 0 }) => {
    const [classes, setClasses] = useState(
        classNames(
            "square w-0 h-0 border-[8px] rounded-sm transition-all border-gray-300"
        )
    );

    useEffect(() => {
        if (filled) {
            setTimeout(() => {
                setClasses(
                    classNames(
                        "square w-0 h-0 border-[8px] rounded-sm transition-all border-orange-400"
                    )
                );
            }, delay);
        }
    }, [filled, delay]);

    return (
        <div
            className={classes}
            style={{ transitionDelay: `${delay}ms` }}
        ></div>
    );
};
