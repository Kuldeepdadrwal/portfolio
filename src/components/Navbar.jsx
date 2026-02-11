import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["Home", "About", "Education", "Skills", "Projects", "Achievements", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-black/80 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
    >
      <div className="px-4 sm:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-xl font-bold text-white tracking-wide">
          Kuldeep Dadrwal
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 text-xl">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-white focus:outline-none"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>


      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >

        <ul className="flex flex-col items-center gap-6 py-6 bg-black/90 backdrop-blur-md text-lg">
          {navItems.map((item) => (
            <li key={item}>
              <a
                onClick={() => setMenuOpen(false)}
                href={`#${item.toLowerCase()}`}
                className="hover:text-cyan-400 transition font-medium"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
