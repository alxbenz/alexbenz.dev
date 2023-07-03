import classNames from "classnames";
import React from "react";

interface HeadlineProps {
    type?: "orange" | "purple" | "gray";
    content: string;
    className?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
    type = "gray",
    content,
    className = "",
}) => {
    const spanClasses = classNames(
        "bg-gradient-to-tr bg-clip-text font-normal text-transparent",
        {
            "from-yellow-400 to-orange-400": type === "orange",
            "from-purple-600 to-violet-800 dark:from-purple-500 dark:to-violet-500":
                type === "purple",
            "from-zinc-500 to-slate-600": type === "gray",
        }
    );

    const replacedContent = content.replace(
        /<span>/,
        `<span class="${spanClasses}">`
    );

    return (
        <h2
            className={
                "font-display text-4xl/tight font-extralight tracking-wide " +
                className
            }
            dangerouslySetInnerHTML={{ __html: replacedContent }}
        ></h2>
    );
};
