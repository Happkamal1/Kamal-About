import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaDocker,
  FaJs,
  FaCss3,
  FaHtml5,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiGraphql } from "react-icons/si";

const Skills = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-12 px-6">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* HTML Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-100 transition-all duration-300">
          <FaHtml5 className="text-5xl text-blue-500 mb-4 hover:text-blue-700" />
          <h3 className="text-xl font-semibold text-gray-800">HTML</h3>
          <p className="text-gray-500">
            HTML stands for HyperText Markup Language to create the layout of web pages.
          </p>
        </div>

        {/* CSS Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-300">
          <FaCss3 className="text-5xl text-green-600 mb-4 hover:text-green-800" />
          <h3 className="text-xl font-semibold text-gray-800">CSS</h3>
          <p className="text-gray-500">
            CSS stands for Cascading Style Sheets, used for styling web pages.
          </p>
        </div>

        {/* JavaScript Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-yellow-100 transition-all duration-300">
          <FaJs className="text-5xl text-yellow-600 mb-4 hover:text-yellow-800" />
          <h3 className="text-xl font-semibold text-gray-800">JavaScript</h3>
          <p className="text-gray-500">
            JavaScript is a scripting language used to create interactive web pages.
          </p>
        </div>

        {/* React Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-100 transition-all duration-300">
          <FaReact className="text-5xl text-blue-500 mb-4 hover:text-blue-700" />
          <h3 className="text-xl font-semibold text-gray-800">React</h3>
          <p className="text-gray-500">
            React is a frontend library for building user interfaces.
          </p>
        </div>

        {/* Node.js Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-300">
          <FaNodeJs className="text-5xl text-green-600 mb-4 hover:text-green-800" />
          <h3 className="text-xl font-semibold text-gray-800">Node.js</h3>
          <p className="text-gray-500">
            Node.js is a JavaScript runtime for scalable server-side applications.
          </p>
        </div>

        {/* MongoDB Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-green-100 transition-all duration-300">
          <SiMongodb className="text-5xl text-green-800 mb-4 hover:text-green-600" />
          <h3 className="text-xl font-semibold text-gray-800">MongoDB</h3>
          <p className="text-gray-500">
            MongoDB is a NoSQL database used for modern applications.
          </p>
        </div>

        {/* Express.js Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300">
          <SiExpress className="text-5xl text-gray-800 mb-4 hover:text-gray-600" />
          <h3 className="text-xl font-semibold text-gray-800">Express.js</h3>
          <p className="text-gray-500">
            Express.js is a minimalist web framework for Node.js.
          </p>
        </div>

        {/* GitHub Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-gray-100 transition-all duration-300">
          <FaGithub className="text-5xl text-black mb-4 hover:text-gray-600" />
          <h3 className="text-xl font-semibold text-gray-800">Git & GitHub</h3>
          <p className="text-gray-500">
            Git and GitHub are used for version control and collaboration.
          </p>
        </div>

        {/* Docker Card */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 hover:bg-blue-100 transition-all duration-300">
          <FaDocker className="text-5xl text-blue-500 mb-4 hover:text-blue-700" />
          <h3 className="text-xl font-semibold text-gray-800">Docker</h3>
          <p className="text-gray-500">
            Docker is a containerization tool for microservices architecture.
          </p>
        </div>
      </div>

      {/* Technologies Proficiency */}
      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Technologies Proficiency
        </h2>
        <div className="space-y-6">
          {/* React.js Progress Bar */}
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-700">React.js</span>
            <div className="w-3/4 bg-gray-200 h-2 rounded-full">
              <div
                className="bg-blue-600 h-2 rounded-full hover:bg-blue-700 transition-all"
                style={{ width: "90%" }}
              ></div>
            </div>
          </div>

          {/* Node.js Progress Bar */}
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-700">Node.js</span>
            <div className="w-3/4 bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-600 h-2 rounded-full hover:bg-green-700 transition-all"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>

          {/* MongoDB Progress Bar */}
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-700">MongoDB</span>
            <div className="w-3/4 bg-gray-200 h-2 rounded-full">
              <div
                className="bg-green-800 h-2 rounded-full hover:bg-green-900 transition-all"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>

          {/* Express.js Progress Bar */}
          <div className="flex justify-between items-center">
            <span className="text-xl text-gray-700">Express.js</span>
            <div className="w-3/4 bg-gray-200 h-2 rounded-full">
              <div
                className="bg-gray-800 h-2 rounded-full hover:bg-gray-900 transition-all"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
