import React from "react";

const Experience = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 sm:px-6 lg:px-20 my-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300">
          Experience
        </h2>
        <p className="text-xl text-gray-500 mt-4">
          Here's a glimpse of my professional journey, where I've had the opportunity to grow and deliver impactful projects.
        </p>
      </div>

      {/* Work Experience Section */}
      <div className="space-y-8 sm:space-y-12 lg:space-y-16">
        {/* Example Job 1 */}
        <div className="border-l-4 border-blue-500 pl-6 hover:bg-blue-50 transition-all duration-300 p-4 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
            Full Stack Developer As Intern
          </h3>
          <p className="text-lg text-gray-700">MTBT Technologies | September 2024 - Present</p>
          <ul className="list-disc ml-6 mt-2 text-lg">
            <li>Developed and maintained web applications using the MERN stack (MongoDB, Express, React, Node.js).</li>
            <li>Collaborated with the design team to implement responsive user interfaces.</li>
            <li>Optimized performance and reduced load time by 30% using lazy loading and code splitting techniques.</li>
            <li>Worked in an Agile environment, participating in daily standups, sprint planning, and code reviews.</li>
          </ul>
          <p className="mt-2 font-semibold">Technologies Used:</p>
          <ul className="flex flex-wrap space-x-4 mt-1">
            <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">React</li>
            <li className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-all duration-300">Node.js</li>
            <li className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-all duration-300">MongoDB</li>
            <li className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all duration-300">Express.js</li>
            <li className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all duration-300">Git</li>
          </ul>
        </div>

        {/* Example Job 2 */}
        <div className="border-l-4 border-green-500 pl-6 hover:bg-green-50 transition-all duration-300 p-4 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300">
            Summer Intern
          </h3>
          <p className="text-lg text-gray-700">Techsima Private Limited | July 2023 - September 2023</p>
          <ul className="list-disc ml-6 mt-2 text-lg">
            <li>Built responsive user interfaces using HTML, CSS, and JavaScript.</li>
            <li>Integrated API data into frontend components to display dynamic content.</li>
            <li>Collaborated with senior developers to optimize website performance.</li>
            <li>Assisted in debugging and improving legacy code for better maintainability.</li>
          </ul>
          <p className="mt-2 font-semibold">Technologies Used:</p>
          <ul className="flex flex-wrap space-x-4 mt-1">
            <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">HTML</li>
            <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">CSS</li>
            <li className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200 transition-all duration-300">JavaScript</li>
            <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">React</li>
            <li className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all duration-300">Git</li>
          </ul>
        </div>
      </div>

      {/* Optional: Key Projects Section */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 hover:text-blue-600 transition-colors duration-300">Key Projects</h3>
        <ul className="space-y-6 mt-4">
          {/* Example Project 1 */}
          <li className="p-4 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50 transition-all duration-300">
            <h4 className="text-xl font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-300">
              Project Name: Netflix Frontend Clone
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              A frontend Netflix Clone webpage that allows users to see the layout and a simple clone of the site.
            </p>
            <p className="mt-2 font-semibold">Technologies Used:</p>
            <a
              target="_blank"
              href="https://nelflexx.netlify.app"
              className="flex text-blue-600 font-bold hover:text-blue-800 transition-colors duration-300"
            >
              See Our Project To Server
            </a>
            <ul className="flex flex-wrap space-x-4 mt-1">
              <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">HTML</li>
              <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">CSS</li>
              <li className="bg-yellow-100 p-2 rounded-lg hover:bg-yellow-200 transition-all duration-300">JavaScript</li>
            </ul>
          </li>

          {/* Example Project 2 */}
          <li className="p-4 rounded-lg border-l-4 border-green-500 hover:bg-green-50 transition-all duration-300">
            <h4 className="text-xl font-semibold text-gray-800 hover:text-green-500 transition-colors duration-300">
              Project Name: Education Website
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              An education platform where users can see courses, pricing, and share information regarding courses.
            </p>
            <p className="mt-2 font-semibold">Technologies Used:</p>
            <ul className="flex flex-wrap space-x-4 mt-1">
              <li className="bg-blue-100 p-2 rounded-lg hover:bg-blue-200 transition-all duration-300">React</li>
              <li className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-all duration-300">Node.js</li>
              <li className="bg-green-100 p-2 rounded-lg hover:bg-green-200 transition-all duration-300">MongoDB</li>
              <li className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all duration-300">Express.js</li>
              <li className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-all duration-300">JWT Authentication</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
