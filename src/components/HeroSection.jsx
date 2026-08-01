"use client";

import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import Image from "next/image";

export const HeroSection = () => {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const halfwayPoint = window.innerHeight / 5;
      setShowScroll(window.scrollY < halfwayPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-4 sm:px-6 overflow-x-hidden"
    >
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm
            <span className="block mt-2 text-[#2b2559]">
              <span className="inline-block">
                <TypeAnimation
                  sequence={[
                    "Kowshik",
                    2000,
                    "Web Developer",
                    1500,
                    "Software Engineer",
                    1500,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-md">
            <span className="block md:hidden">
              Full-stack developer building clean and scalable web applications.
            </span>

            <span className="hidden md:block">
              Passionate full-stack developer who loves building clean,
              user-friendly web experiences. Focused on creating scalable
              applications and continuously learning new technologies.
            </span>
          </p>

          {/* BUTTONS */}
          <div className="flex justify-center md:justify-start gap-3">
            <a
              href="/Kowshik_Resume.pdf"
              target="_blank"
              className="px-4 sm:px-6 py-3 rounded-lg bg-[#2b2559] text-white font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              View Resume
            </a>

            <a
              href="#contact"
              className="px-4 sm:px-6 py-3 rounded-lg bg-emerald-50 text-[#2b2559] font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-[370px] md:h-[370px] rounded-full overflow-hidden shadow-xl">
            <Image
              src="/display_picture.png"
              alt="Kowshik"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      {showScroll && (
        <a
          href="#about"
          className="hidden lg:block absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary" />
          </div>
        </a>
      )}
    </section>
  );
};
