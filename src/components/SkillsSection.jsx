"use client";
import { motion } from "framer-motion";

const skills = [
  {
    name: "C",
    image: "https://img.icons8.com/color/96/c-programming.png", // shiny C
  },
  {
    name: "C#",
    image: "https://img.icons8.com/color/96/c-sharp-logo.png", // C# logo
  },
  {
    name: "Java",
    image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", // glossy Java
  },
  {
    name: "Python",
    image: "https://img.icons8.com/color/96/python.png", // shiny Python
  },
  {
    name: "JavaScript",
    image: "https://img.icons8.com/color/96/javascript.png", // shiny JS
  },
  {
    name: "HTML5",
    image: "https://img.icons8.com/color/96/html-5.png", // glossy HTML5
  },
  {
    name: "CSS3",
    image: "https://img.icons8.com/color/96/css3.png", // glossy CSS3
  },
  {
    name: "Tailwind CSS",
    image: "https://img.icons8.com/color/96/tailwind_css.png",
  },
  {
    name: "React.js",
    image: "https://img.icons8.com/plasticine/100/react.png", // glowing React
  },
  {
    name: "Next.js",
    image: "https://img.icons8.com/fluency/96/nextjs.png", // minimal glossy Next.js
  },
  {
    name: "Node.js",
    image: "https://img.icons8.com/color/96/nodejs.png", // shiny Node
  },
  {
    name: "Express.js",
    image: "https://img.icons8.com/fluency/96/express-js.png", // sleek Express
  },
  {
    name: "Flask",
    image: "https://img.icons8.com/nolan/96/flask.png", // glowing Flask
  },
  {
    name: "Servlet",
    image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", // using shiny Java
  },
  {
    name: "MySQL",
    image: "https://img.icons8.com/color/96/mysql-logo.png", // shiny MySQL
  },
  {
    name: "MongoDB",
    image: "https://img.icons8.com/color/96/mongodb.png", // glossy MongoDB
  },
  {
    name: "JDBC",
    image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png", // shiny Java
  },
  {
    name: "Git",
    image: "https://img.icons8.com/color/96/git.png", // glowing Git
  },
  {
    name: "Framer Motion",
    image: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    name: "Azure",
    image: "https://img.icons8.com/color/96/azure-1.png", // shiny Azure
  },
  {
    name: "GitHub",
    image: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl p-10 bg-[radial-gradient(circle_at_center,_#3d366d,_#0e0928)]">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // triggers when 20% of element is in view
          className="flex justify-center gap-18 flex-wrap"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i) => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: i * 0.2, // stagger
                    duration: 0.3,
                  },
                }),
              }}
              className="flex flex-col items-center transition-shadow duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-11 md:h-14 mb-2"
              />
              <span className="text-sm font-medium text-green-50">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
