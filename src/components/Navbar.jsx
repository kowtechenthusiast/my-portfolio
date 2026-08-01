"use client";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("#hero");

  // navbar opacity
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // scroll spy
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveItem(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`${
        isScrolled && "opacity-80 transition-opacity duration-1000"
      } hidden lg:flex fixed top-5 left-1/2 translate-x-[-50%] justify-between items-center outline-none z-100 px-10 py-4 bg-gray-900 w-3/4 border border-blue-950 rounded-[50px]`}
    >
      <a href="/" className="flex items-center space-x-2">
        <img src="/logo.png" alt="logo" className="w-28" />
      </a>

      <div>
        {navItems.map((item, key) => (
          <a
            key={key}
            href={item.href}
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
