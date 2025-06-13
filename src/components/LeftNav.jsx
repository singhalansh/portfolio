import React, { useState } from "react";

function LeftNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between w-full px-4 sm:px-6 lg:px-8 py-4 lg:py-6 lg:ml-60">
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex gap-6 xl:gap-10 text-gray-700 font-medium text-base xl:text-lg">
        <li>
          <a href="#about" className="hover:text-black transition-colors">
            About Me
          </a>
        </li>
        <li>
          <a href="#portfolio" className="hover:text-black transition-colors">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
        </li>
        <li>
          <a
            href="#achievements"
            className="hover:text-black transition-colors"
          >
            Achievements
          </a>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-[#f8f8f8] border-t border-gray-200 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 visible transform translate-y-0"
            : "opacity-0 invisible transform -translate-y-4"
        }`}
        style={{ zIndex: 40 }}
      >
        <ul className="flex flex-col p-4 space-y-4">
          <li>
            <a
              href="#about"
              className="block py-2 text-gray-700 font-medium text-base hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#portfolio"
              className="block py-2 text-gray-700 font-medium text-base hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block py-2 text-gray-700 font-medium text-base hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#achievements"
              className="block py-2 text-gray-700 font-medium text-base hover:text-black transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default LeftNav;
