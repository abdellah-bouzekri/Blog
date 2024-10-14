import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center  items-center">
      <footer className="flex list-none p-4 font-bold flex-col gap-4 text-2xl text-stone-500 antialiased animate-pulse">
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
        <span>2024@</span>
      </footer>
    </div>
  );
};

export default Footer;
