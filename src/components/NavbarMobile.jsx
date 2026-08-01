"use client";
import { AlignRight, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
function NavbarMobile() {
  const [isOpen, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  function handleClick(href) {
    setOpen(false);

    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  return (
    <nav className="lg:hidden fixed bottom-0 w-full mbl-bg z-50 p-6">
      <div className="flex justify-between align-middle">
        <a href="/">
          <img src="/logo.png" alt="logo" className="w-4/12" />
        </a>
        <span
          onClick={() => setOpen((prev) => !prev)}
          className="cursor-pointer"
        >
          {isOpen ? <X /> : <AlignRight />}
        </span>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="mt-5"
          >
            {navItems.map((item, key) => (
              <li
                key={key}
                className="py-4 mx-5 text-center"
                onClick={() => handleClick(item.href)}
              >
                {item.name}
                <hr />
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarMobile;
