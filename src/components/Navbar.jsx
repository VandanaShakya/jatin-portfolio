// Navbar.jsx
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        !navRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Compute header height
  const getNavHeight = () => {
    const el = navRef.current;
    if (!el) return 80;
    return Math.ceil(el.getBoundingClientRect().height);
  };

  // Scroll-to-section handler
  const handleClick = (target) => {
    setIsOpen(false);
    const maps = {
      Home: "home",
      About: "about",
      Services: "services",
      Projects: "projects",
      Contact: "contact",
    };
    const id = maps[target] || target;
    const el = document.getElementById(id);
    if (el) {
      const navHeight = getNavHeight();
      const top =
        el.getBoundingClientRect().top + window.pageYOffset - navHeight - 12;
      window.scrollTo({ top, behavior: "smooth" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const navItems = ["Home", "About", "Projects", "Services", "Contact"];

  return (
    <div className="fixed w-full z-50 top-0 left-0" ref={navRef}>
      <nav
        className={`w-full transition-all duration-500 ease-in-out 
          ${
            scrolled && window.innerWidth >= 768
              ? "bg-black/80 backdrop-blur-sm shadow-md text-white"
              : scrolled && window.innerWidth < 768
              ? "bg-white text-black"
              : "bg-white text-black"
          }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="text-left">
            <h1
              className={`text-2xl md:text-3xl font-light tracking-wider transition-colors duration-300 ${
                scrolled && window.innerWidth >= 768 ? "text-white" : "text-black"
              }`}
            >
              JATIN JAIN
            </h1>
            <div
              className={`w-40 mt-2 h-0.5 mx-0 transition-colors duration-300 ${
                scrolled && window.innerWidth >= 768 ? "bg-white" : "bg-black"
              }`}
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center text-lg">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleClick(item)}
                className={`hover:opacity-70 transition-colors duration-200 ${
                  scrolled ? "text-white" : "text-black"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Hamburger (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded focus:outline-none transition-colors duration-200 text-black"
              aria-label="Open menu"
            >
              <FaBars size={22} />
            </button>
          </div>
        </div>

        {/* Mobile sliding menu */}
        <div
          ref={mobileMenuRef}
          className={`md:hidden fixed top-0 right-0 h-full w-3/4 max-w-xs 
            bg-gradient-to-b from-black via-gray-900 to-black 
            z-50 transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="text-white focus:outline-none"
              aria-label="Close menu"
            >
              <FaTimes size={22} />
            </button>
          </div>

          <div className="flex flex-col items-center space-y-6 mt-8 text-lg text-white">
            {navItems.map((item) => (
              <button
                key={`mobile-${item}`}
                onClick={() => handleClick(item)}
                className="hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
