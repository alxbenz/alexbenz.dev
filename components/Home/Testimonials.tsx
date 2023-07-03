import { TestimonialsEntity } from "@/types";
import React from "react";
import { Review } from "../Icons/Review";
import { Background } from "../Global/Background";

interface TestimonialsProps {
    testimonials: TestimonialsEntity[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
    return (
        <div className="">
            {testimonials.map((testimonial) => (
                <div
                    key={testimonial.name}
                    className="relative flex justify-start flex-wrap  mt-6 flex-col bg-slate-100 p-4 rounded dark:bg-slate-900"
                >
                    <Review className="text-yellow-300 absolute top-0 left-0 w-12 h-12 dark:text-yellow-500" />
                    <div className="italic z-10 mt-4">
                        {!!testimonial.statement &&
                            testimonial.statement.map((statement, index) => (
                                <p className="mt-1" key={index}>
                                    {statement}
                                </p>
                            ))}
                    </div>
                    <div className="mt-4">
                        <span className="font-semibold mr-4">
                            {testimonial.name}
                        </span>
                        {testimonial.company}
                    </div>
                </div>
            ))}
        </div>
    );
};
