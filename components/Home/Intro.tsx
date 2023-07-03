import React, { createElement } from "react";
import { GitHub } from "../Icons/GitHub";
import { Mail } from "../Icons/Mail";
import { Xing } from "../Icons/Xing";
import { LinkedIn } from "../Icons/LinkedIn";
import { Background } from "../Global/Background";
import { Logo } from "../Global/Logo";

import { Headline } from "../Global/Headline";
import { Content, Information, Intro as IntroInterface } from "@/types";
import { GradientBall } from "../Global/GradientBall";

interface IntroProps {
    intro: IntroInterface;
    information: Information;
}

export const Intro: React.FC<IntroProps> = ({ intro, information }) => {
    const getIcon = (id: string) => {
        const classes = "w-5 h-5 mr-1 fill-white opacity-50";
        switch (id) {
            case "GitHub":
                return <GitHub className={classes} />;
            case "Xing":
                return <Xing className={classes} />;
            case "LinkedIn":
                return <LinkedIn className={classes} />;
            case "Mail":
                return <Mail className={classes} />;
        }
    };
    return (
        <div className="relative text-white md:w-1/2 md:fixed md:h-screen flex items-center justify-center md:justify-end overflow-auto">
            <div className="background bg-gradient-to-br from-stone-800 to-slate-900 fixed w-full h-full -z-20" />
            <div className="fixed h-full w-full">
                <Background />
                <GradientBall />
            </div>

            <aside className="px-6 py-6 max-w-lg lg:max-w-sm w-full relative lg:mr-24">
                <div className="flex justify-start items-center mt-24">
                    <div className="h-16 w-16">
                        <Logo />
                    </div>
                    <span className="ml-6 font-semibold text-lg mb-4 tracking-wid">
                        alexbenz.dev
                    </span>
                </div>
                <Headline content={intro.h2} type="orange" className="mt-16" />
                <h3 className="mt-8 font-light ">{intro.p}</h3>

                <div className="mt-8 flex flex-wrap justify-center items-center [&>a+a]:ml-6">
                    {information.links.map((link) => (
                        <a
                            href={link.url}
                            key={link.id}
                            className="flex items-center underline hover:no-underline"
                        >
                            {getIcon(link.id)}
                            {link.id}
                        </a>
                    ))}
                </div>
                <div className="mt-16 text-center text-xs opacity-50">
                    powered by next.js, tailwindcss, typescript
                </div>
            </aside>
        </div>
    );
};
