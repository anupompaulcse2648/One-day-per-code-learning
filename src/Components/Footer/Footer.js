import React from "react";
import logo from "../../logo.png";
import { NavLink } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-purple-500">
      <div className="w-4/6 m-auto">
        <div className="footer-top flex justify-between pt-10">
          <div className="logo-details w-2/6">
            <img className="w-32" src={logo} alt="" />
            <p className="text-white mt-3">
              Learn Hub is a popular online learning platform that gives people
              a chance to develop their careers and explore a wide variety of
              hobbies. From web development to public speaking, they offer a
              broad range of courses.
            </p>
          </div>

          <div className="contact">
            <a
              className="text-white block pb-3"
              href="mailto: contact@learnhub.com?body=My custom mail body"
            >
              <HiOutlineMail className="inline-block mr-2"></HiOutlineMail>
              contact@learnhub.com
            </a>
            <a className="text-white block pb-5" href="tel:+880 1825662235">
              <FiPhone className="inline-block mr-2"></FiPhone>
              +880 125662235
            </a>
            <div className="flex">
              <a href="facebook.com" className="text-white pr-4">
                <BsFacebook></BsFacebook>
              </a>
              <a href="instragram.com" className="text-white pr-4">
                <BsInstagram></BsInstagram>
              </a>
              <a href="linkedin.com" className="text-white pr-4">
                <BsLinkedin></BsLinkedin>
              </a>
              <a href="twitter.com" className="text-white">
                <BsTwitter></BsTwitter>
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8" />
        <div className="footer-bottom flex justify-between pb-10">
          <div className="footer-link">
            <NavLink to="/home" className="text-white no-underline ">
              Home
            </NavLink>
            <NavLink to="/courses" className="text-white no-underline ml-6">
              Courses
            </NavLink>
            <NavLink to="/cart" className="text-white no-underline ml-6">
              Cart
            </NavLink>

            <NavLink to="/about" className="text-white no-underline ml-6">
              About
            </NavLink>
          </div>
          <div>
            <p className="text-white">
              Development By{" "}
              <a href="anupom" className="font-bold">
                #Learn-Hub Team
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
