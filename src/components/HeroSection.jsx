"use client";

import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold tracking-tight">
            <span className="text-[#2C245F] bg-clip-text ">
              Hello, I&apos;m{" "}
            </span>
            <TypeAnimation
              sequence={[
                "Kowshik",
                2000,
                "Web Developer",
                1500,
                "Software Engineer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Passionate full-stack developer who loves crafting clean,
            user-friendly web experiences. Driven to build scalable
            applications and keep growing with new technologies.
          </p>

          <div className="cosmic-button w-max py-3 m-auto opacity-0 animate-fade-in-delay-4 hover:shadow-[0_0_10px_#3d366d] cursor-pointer">
            <a href="#projects">View My Work</a>
          </div>
        </div>
      </div>

      <a href="#about">
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </a>
    </section>
  );
};
