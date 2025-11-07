"use client";
import { useEffect, useState } from "react";
const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        isScrolled && "opacity-80 transition-opacity duration-1000"
      } md:fixed hidden top-5 left-1/2 translate-x-[-50%] md:flex justify-between items-center outline-none z-100 px-10 py-4 bg-gray-900 w-3/4 border border-blue-950 rounded-[50px]`}
    >
      <a
        href="/"
        className="flex items-center space-x-2"
        onClick={() => setActiveItem("")}
      >
        <img src="/logo.png" alt="logo" className="w-28" />
      </a>

      <div className="text-shadow-amber-50">
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            onMouseEnter={(e) => {
              e.target.style.textShadow = "0 0 2px #f0abfc";
            }}
            onMouseLeave={(e) => {
              e.target.style.textShadow = "none";
            }}
            className={`mx-8 transition-colors duration-300 ${
              activeItem === item.href ? "text-fuchsia-300" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};
