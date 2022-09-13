import { useState } from "react";
import "../assets/css/menubar.css";

const MenuBar = function () {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-gray-400 py-8">
      <div className="ml-9 text-4xl text-slate-200 lg:text-[#F05454]">
        <h1>Jam.Dev</h1>
      </div>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden mr-8">
          <div
            className="HAMBURGER-ICON space-y-2 cursor-pointer"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600 cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li
                className="border-b border-gray-400 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a href="#about">About</a>
              </li>
              <li
                className="border-b border-gray-400 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a href="#skills">Skills</a>
              </li>
              <li
                className="border-b border-gray-400 my-8 uppercase"
                onClick={() => setIsNavOpen(false)}
              >
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-10 lg:flex mr-12 text-slate-200 text-xl">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuBar;
