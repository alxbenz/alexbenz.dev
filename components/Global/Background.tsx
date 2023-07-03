"use client";

import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import options from "@/resources/particles";

export const Background: React.FC = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine); // TODO improve file size
    }, []);

    return (
        <Particles id="tsparticles" init={particlesInit} options={options} />
    );
};
