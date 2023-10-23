import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link to={`/`} className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to={`/signup`} className="text-white hover:text-gray-300">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to={`/login`} className="text-white hover:text-gray-300">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
