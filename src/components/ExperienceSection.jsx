"use client";

import { motion } from "framer-motion";
import { Briefcase, Code, Laptop, Calendar, ExternalLink } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    role: "Associate Product Engineer Intern",
    company: "DeltaX",
    logo: "/company/deltax.png",
    icon: Code,
    period: "Jan 2026 – Present",
    description:
      "Contributed to full-stack product lifecycles, implementing modern UI frameworks and enhancing system architecture for better performance.",
    skills: ["C#", "MS SQL", "ASP.NET", "Vue.js"],
  },
  {
    role: "Java Fullstack Internship",
    company: "Infosys Springboard",
    logo: "/company/infosys_springboard.png",
    icon: Laptop,
    period: "Nov 2025 – Jan 2026",
    description:
      "Engineered responsive interfaces and robust backend services, focusing on seamless API integration and database optimization.",
    skills: ["React.js", "Tailwind CSS", "PostgreSQL", "Spring Boot"],
  },
  {
    role: "Software Development Engineer",
    company: "Bluestock",
    logo: "/company/bluestock.png",
    icon: Briefcase,
    period: "Oct 2025 – Nov 2025",
    description:
      "Architecting scalable web solutions and optimizing networking layers to handle real-time stock market data with high efficiency.",
    skills: [
      "HTTP Networking",
      "Stock Market",
      "Bootstrap CSS",
      "Tailwind CSS",
    ],
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative overflow-hidden" // Deep Violet Background
    >
      {/* Premium Mesh Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%]  rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional journey, focusing on full-stack
            development and modern web technologies.
          </p>
        </div>

        <div className="relative">
          {/* High-Contrast Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-primary/60 to-transparent -translate-x-1/2" />

          <div className="space-y-12 md:space-y-[-20px]">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center justify-between md:justify-normal group ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Point (Static, No Blink) */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#0a0515] border-4 border-primary z-20 shadow-[0_0_10px_rgba(var(--primary),0.5)] transition-transform duration-300 group-hover:scale-125" />

                  {/* Card Container */}
                  <div className="w-full ml-12 md:ml-0 md:w-[45%]">
                    <div className="group relative p-px rounded-2xl bg-white/5 hover:bg-gradient-to-br hover:from-primary/50 hover:to-transparent transition-all duration-500">
                      <div className="p-7 rounded-2xl bg-[#120a26]/80 backdrop-blur-xl border border-white/5 shadow-2xl transition-all duration-300 group-hover:-translate-y-1">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-5">
                          <div className="flex items-center gap-4">
                            <div className="relative w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-white/10 p-2 flex items-center justify-center">
                              {exp.logo ? (
                                <Image
                                  src={exp.logo}
                                  alt={exp.company}
                                  width={40}
                                  height={40}
                                  className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                              ) : (
                                <Icon className="text-primary w-7 h-7" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-bold text-xl text-white group-hover:text-primary transition-colors">
                                {exp.role}
                              </h3>
                              <p className="text-primary/80 font-semibold text-sm tracking-wide uppercase">
                                {exp.company}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Date Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 text-slate-300 text-xs font-medium mb-5 border border-white/10">
                          <Calendar size={14} className="text-primary" />
                          {exp.period}
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                          {exp.description}
                        </p>

                        {/* Skills/Tags */}
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 group-hover:border-primary/30 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
