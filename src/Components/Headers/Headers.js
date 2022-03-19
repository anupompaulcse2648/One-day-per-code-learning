import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.png";
import "./Headers.css";
import "../../index.css";
const Headers = () => {
  return (
    <div className="bg-purple-200 drop-shadow-sm ">
      {/* Nav Container */}
      <nav className="w-4/6 flex justify-between items-center pt-4 pb-4 m-auto">
        {/* Nav Logo */}
        <div className="">
          <NavLink to="/home">
            <img className="w-32" src={logo} alt="" />
          </NavLink>
        </div>
        {/* Nav Link */}
        <div>
          <NavLink
            to="/home"
            className="text-purple-500 font-bold no-underline  px-6 py-2 hover:bg-purple-600 hover:text-white transition-all"
          >
            Home
          </NavLink>
          <NavLink
            to="/courses"
            className="text-purple-500 font-bold no-underline  px-6 py-2 hover:bg-purple-600 hover:text-white transition-all"
          >
            Courses
          </NavLink>
          <NavLink
            to="/details"
            className="text-purple-500 font-bold no-underline  px-6 py-2 hover:bg-purple-600 hover:text-white transition-all"
          >
            Details Courses
          </NavLink>

          <NavLink
            to="/about"
            className="text-purple-500 font-bold no-underline  px-6 py-2 hover:bg-purple-600 hover:text-white transition-all"
          >
            About
          </NavLink>
          <NavLink
            to="/login"
            className="text-purple-500 font-bold no-underline  px-6 py-2 hover:bg-purple-600 hover:text-white transition-all"
          >
            Login
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Headers;
