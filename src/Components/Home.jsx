import React from "react";
import { ReactTyped } from "react-typed";
import Logo from "../../public/kamal.jpg";
import { FaFacebookSquare, FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa6";

const Home = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        {/* Text Content */}
        <div className="md:w-1/2 mt-12 md:mt-16 order-2 lg:order-1 text-center md:text-left">
          <span className="text-xl">Welcome to My World</span>
          <div className="flex space-x-2 text-2xl lg:text-4xl">
            <h1>Hello, I'm a</h1>
            <ReactTyped
              className="text-red-700 font-bold"
              strings={["Developer.", "Engineer.", "Designer."]}
              typespeed={50}
              backspeed={40}
              loop={true}
            />
          </div>
          <p className="text-lg md:text-md text-justify mt-4">
            I am a passionate MERN stack developer constantly striving to innovate and create solutions that make a difference. I specialize in full-stack development, with deep expertise in JavaScript technologies like MongoDB, Express, React, and Node.js. I am always looking for new challenges to enhance my skills and deliver impactful, scalable applications.
          </p>

          {/* Social Links */}
          <div className="flex items-center flex-col lg:flex-row space-y-4 lg:space-y-0 text-center justify-between mt-6">
            <div className="space-y-2">
              <h1 className="text-black-950 font-extrabold text-xl">Find Me On</h1>
              <ul className="flex space-x-4">
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077256217404&mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                    aria-label="Facebook"
                  >
                    <FaFacebookSquare className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/kamal-gupta-32724a230?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/happykamal_1?igsh=MW5yMmZzNDJ4NHQ4Nw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                    aria-label="Instagram"
                  >
                    <FaInstagram className="text-3xl cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://youtube.com/@happykamal_1?si=h5IR8QTKmnrS_Hn7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-effect"
                    aria-label="YouTube"
                  >
                    <FaYoutube className="text-3xl cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Tech Stack Icons */}
            <div className="space-y-2">
              <h1 className="text-black-950 font-extrabold text-xl">Currently Working On</h1>
              <div className="flex space-x-4">
                <a
                  href="https://www.mongodb.com/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  aria-label="MongoDB"
                >
                  <SiMongodb className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </a>
                <a
                  href="https://expressjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  aria-label="Express.js"
                >
                  <SiExpress className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </a>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  aria-label="React.js"
                >
                  <SiReact className="text-3xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </a>
                <a
                  href="https://nodejs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-effect"
                  aria-label="Node.js"
                >
                  <FaNodeJs className="text-2xl md:text-4xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center mt-8 order-1">
          <img
            src={Logo}
            alt="Profile Picture of Kamal"
            className="rounded-full lg:w-[520px] lg:h-[520px] w-[340px] h-[340px] mx-auto"
          />
        </div>
      </div>
      <hr className="my-8 border-t-2 border-gray-300" />
    </div>
  );
};

export default Home;
