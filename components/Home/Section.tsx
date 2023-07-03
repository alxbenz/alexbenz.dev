import React from "react";
import { Headline } from "../Global/Headline";

interface SectionProps {
    h2: string;
    sub: string;
    p: string[];
    children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ h2, sub, p, children }) => {
    return (
        <section className="py-12">
            <div className="mx-6 md:mx-12">
                <Headline content={h2} type="purple" />
                <p className="font-semibold mt-6 text-slate-700 dark:text-slate-300">
                    {sub}
                </p>
                {p.map((paragraph, index) => (
                    <p
                        className="mt-3 text-slate-700 dark:text-slate-300"
                        key={index}
                    >
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="mx-6 mt-12 md:mx-12">{children}</div>
        </section>
    );
};
