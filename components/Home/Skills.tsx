import { SkillsEntity } from "@/types";
import React from "react";
import { Headline } from "../Global/Headline";
import { Square } from "../Global/Square";

interface SkillsProps {
    skills: SkillsEntity[];
    useSquares?: boolean;
}

export const Skills: React.FC<SkillsProps> = ({
    skills,
    useSquares = true,
}) => {
    const getSquares = (percentage: number) => (
        <>
            <Square filled={percentage >= 0} />
            <Square filled={percentage >= 20} delay={50} />
            <Square filled={percentage >= 40} delay={100} />
            <Square filled={percentage >= 60} delay={150} />
            <Square filled={percentage >= 80} delay={200} />
        </>
    );

    return (
        <div className="">
            {skills.map((skill) =>
                skill.top ? (
                    <div
                        key={skill.label}
                        className="flex justify-between flex-wrap items-center mt-6"
                    >
                        <div className="w-[100%] font-bold mb-1">
                            {skill.label}
                        </div>
                        {!!skill.percentage && (
                            <div className="w-[33%] flex [&>*+*]:ml-1">
                                {getSquares(skill.percentage)}
                            </div>
                        )}
                        <div className="w-[33%]">{skill.level}</div>
                        <div className="w-[34%]">{skill.period}</div>
                    </div>
                ) : null
            )}
        </div>
    );
};
