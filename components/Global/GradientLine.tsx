import React from "react";

export const GradientLine = () => {
    return (
        <div className="absolute bottom-0 left-0 z-20 flex h-8 items-end overflow-hidden">
            <div className="-mb-px flex h-px w-screen">
                <div className="w-full flex-none blur-sm [background-image:linear-gradient(90deg,#fbbf2400_0%,#fbbf24_33%,#4c1d95_66%,#4c1d9500_100%)]"></div>
                <div className="-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,#fbbf2400_0%,#fbbf24_33%,#4c1d95_66%,#4c1d9500_100%)]"></div>
            </div>
        </div>
    );
};
