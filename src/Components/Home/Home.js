import React from "react";
import { Link } from "react-router-dom";
import image from "../../hero-image.png";
import { MdOutlineDeveloperBoard } from "react-icons/md";
import { SiMicrosoftsharepoint, SiAdobeindesign } from "react-icons/si";

const Home = () => {
  return (
    <div>
      <div className=" hero-home  bg-purple-200">
        <div className="flex w-4/6 m-auto pt-10 items-center justify-between">
          <div className="information pr-20">
            <h1 className="text-5xl leading-14 font-bold pb-4">
              Start Your Learning Our{" "}
              <span className="text-purple-500">Experts Trainers</span>
            </h1>
            <p className=" text-base leading-14">
              Build yor skill from world-class universities and companies, you
              can learn online and earn certificates and degree
            </p>
            <Link to="./courses">
              <button className="bg-purple-600 py-2 px-5 text-white mt-5 cursor-pointer">
                Discover
              </button>
            </Link>
          </div>
          <div className="hero-image">
            <img className="w-full" src={image} alt="" />
          </div>
        </div>
      </div>
      <div className="services-container ">
        <div className="services w-4/6 m-auto my-10 ">
          <h1 className="text-4xl font-bold ">Our Top Course Categories</h1>
          <div className="grid grid-cols-3 gap-16 mt-10">
            <Link to="./development">
              <div className="development bg-purple-100 hover:bg-purple-500 hover:text-white p-10 text-left">
                <MdOutlineDeveloperBoard className="text-white text-6xl mb-4 bg-purple-400 rounded p-3 "></MdOutlineDeveloperBoard>

                <h4 className="text-2xl mb-2 font-semibold">Web Development</h4>
                <p className="mb-2">
                  Web development is the work involved in developing a Web site
                  for the Internet (World Wide Web) or an intranet (a private
                  network)....
                </p>
                <p className="font-bold">More Than 8+ Courses</p>
              </div>
            </Link>
            <Link to="./design">
              <div className="design  bg-purple-100 hover:bg-purple-500 hover:text-white hover:shadow-lg  p-10 text-left">
                <SiAdobeindesign className="text-white text-6xl mb-4 bg-purple-400 rounded p-3 "></SiAdobeindesign>

                <h4 className="text-2xl mb-2 font-semibold">
                  {" "}
                  Graphics Design
                </h4>
                <p className="mb-2">
                  Graphic design is a craft where professionals create visual
                  content to communicate messages. By applying visual hierarchy
                  and page...
                </p>
                <p className="font-bold">More Than 4+ Courses</p>
              </div>
            </Link>
            <Link to="./software">
              <div className="design  bg-purple-100 hover:bg-purple-500 hover:text-white hover:shadow-lg  p-10 text-left">
                <SiMicrosoftsharepoint className="text-white text-6xl mb-4 bg-purple-400 rounded p-3 "></SiMicrosoftsharepoint>

                <h4 className="text-2xl mb-2 font-semibold">
                  Software Development
                </h4>
                <p className="mb-2">
                  Software development is the process of conceiving, specifying,
                  designing, programming, documenting, testing, and bug fixing
                  involved in creating...
                </p>
                <p className="font-bold">More Than 7+ Courses</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
