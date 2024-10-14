import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full  p-8">
      <footer className="flex flex-col justify-center items-center gap-6 text-xl text-white">
        <ul className="flex flex-col items-center gap-4">
          <li className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-300">
            <Link to="/">Home</Link>
          </li>
          <li className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-300">
            <Link to="/addNewPost">Blog</Link>
          </li>
          <li className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-300">
            <Link to="/about">About</Link>
          </li>
          <li className="transform transition-transform duration-500 hover:scale-110 hover:text-yellow-300">
            <Link to="/more">More</Link>
          </li>
        </ul>

        <span className="text-white text-lg mt-4 animate-pulse">
          © 2024 | Your Website
        </span>
      </footer>
    </div>
  );
};

export default Footer;
