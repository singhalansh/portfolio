import React from "react";

function LeftNav() {
  return (
    <nav className="flex items-center justify-between w-full px-8 py-6 ml-60">
      <ul className="flex gap-10 text-gray-700 font-medium text-lg">
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
    </nav>
  );
}

export default LeftNav;
