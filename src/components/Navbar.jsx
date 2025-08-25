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

  useEffect(() => {
    const handleScroll = () => {      
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`${isScrolled && "opacity-80 transition-opacity duration-1000"} fixed top-5 left-1/2 translate-x-[-50%] flex justify-between items-center outline-none z-100 px-10 py-4 bg-gray-900 w-3/4 border border-blue-950 rounded-[50px]`}>
        <a href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="logo" className="w-28"/>
        </a>

        {/* desktop nav */}
        <div className="text-shadow-amber-50">
          {navItems.map((item, key) => (
            <a key={key} href={item.href} className="mx-8 hover:text-fuchsia-300 transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>
    </nav>
  );
};
