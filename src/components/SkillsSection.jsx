"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const skillCategories = {
  Languages: [
    { name: "C", image: "https://img.icons8.com/color/96/c-programming.png" },
    { name: "C#", image: "https://img.icons8.com/color/96/c-sharp-logo.png" },
    {
      name: "Java",
      image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
    },
    { name: "Python", image: "https://img.icons8.com/color/96/python.png" },
    {
      name: "JavaScript",
      image: "https://img.icons8.com/color/96/javascript.png",
    },
  ],

  Frontend: [
    { name: "HTML5", image: "https://img.icons8.com/color/96/html-5.png" },
    { name: "CSS3", image: "https://img.icons8.com/color/96/css3.png" },
    {
      name: "Tailwind CSS",
      image: "https://img.icons8.com/color/96/tailwind_css.png",
    },
    {
      name: "React.js",
      image: "https://img.icons8.com/plasticine/100/react.png",
    },
    { name: "Next.js", image: "https://img.icons8.com/fluency/96/nextjs.png" },
    { name: "Vue.js", image: "https://img.icons8.com/color/96/vue-js.png" },
  ],

  Backend: [
    { name: "Node.js", image: "https://img.icons8.com/color/96/nodejs.png" },
    {
      name: "Express.js",
      image: "https://img.icons8.com/fluency/96/express-js.png",
    },
    { name: "Flask", image: "https://img.icons8.com/nolan/96/flask.png" },
    {
      name: "Servlet",
      image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
    },
    {
      name: "ASP.NET",
      image: "https://img.icons8.com/color/96/net-framework.png",
    },
    {
      name: "JDBC",
      image: "https://img.icons8.com/color/96/java-coffee-cup-logo.png",
    },
  ],

  Databases: [
    { name: "MySQL", image: "https://img.icons8.com/color/96/mysql-logo.png" },
    { name: "MongoDB", image: "https://img.icons8.com/color/96/mongodb.png" },
    {
      name: "MS SQL Server",
      image: "https://img.icons8.com/color/96/microsoft-sql-server.png",
    },
    {
      name: "PostgreSQL",
      image: "https://img.icons8.com/color/96/postgreesql.png",
    },
  ],

  Tools: [
    { name: "Git", image: "https://img.icons8.com/color/96/git.png" },

    {
      name: "GitHub",
      image: "https://img.icons8.com/ios-filled/100/ffffff/github.png",
    },

    { name: "Azure", image: "https://img.icons8.com/color/96/azure-1.png" },

    {
      name: "Framer Motion",
      image: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    },

    {
      name: "Bitbucket",
      image: "https://img.icons8.com/color/96/bitbucket.png",
    },

    {
      name: "Postman",
      image:
        "https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png",
    },

    {
      name: "Stripe",
      image: "https://img.icons8.com/color/96/stripe.png",
    },
  ],
};

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Languages");
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };
  return (
    <section id="skills" className="py-24 px-4">
      <div
        className="container mx-auto max-w-5xl p-10 rounded-2xl
      bg-[radial-gradient(circle_at_center,_#3d366d,_#0e0928)]
      border border-white/10 shadow-xl"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`px-4 py-2 rounded-lg text-sm transition
              ${
                activeTab === category
                  ? "bg-primary text-white"
                  : "bg-white/10 text-gray-200 hover:bg-white/20"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-15 mx-auto max-w-4xl"
        >
          {skillCategories[activeTab].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.08 }}
              className="flex flex-col items-center justify-center
      w-24 h-24 p-3 rounded-xl
      bg-white/5 backdrop-blur-md
      border border-white/10
      hover:border-primary/50 hover:shadow-lg
      transition-all duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="h-10 mb-2 object-contain"
              />

              <span className="text-xs font-medium text-gray-200 text-center">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
