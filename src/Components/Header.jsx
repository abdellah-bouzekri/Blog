import React, { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex justify-start">
          <img
            src="https://images.unsplash.com/photo-1559656428-6f31733e0937?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fExPR08lMjBwaW5rfGVufDB8fDB8fHww"
            alt="Logo"
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover "
          />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 text-slate-100 transform-cpu">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex">
          <ul className="flex gap-6  text-slate-200 font-medium">
            <li className="hover:text-pink-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link to="/addNewPost">Blog</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link to="/more">More</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col w-full items-center gap-4 text-slate-300 font-medium ">
            <li className="hover:text-pink-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-pink-600">
              <a href="#">Blog</a>
            </li>
            <li className="hover:text-pink-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-pink-600">
              <Link to="/more">More</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
