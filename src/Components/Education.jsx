import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech)",
      major: "Computer Science & Engineering",
      school: "GITM (Goel Institute Of Technology And Management)",
      duration: "2025 - 2029",
      description:
        "Specializing in full-stack development, AI/ML, and data structures. Achieved multiple academic distinctions.",
    },
    {
      degree: "Diploma in Computer Science",
      major: "Computer Science & Engineering",
      school:
        "Chatrapati Shauji Maharaj Govt Polytechnic, Ambedkar Nagar, U.P, 224122",
      duration: "2021 - 2024",
      description:
        "Gained proficiency in C, Java, Python, and Cloud Computing while mastering software engineering principles.",
    },
    {
      degree: "High School",
      major: "Science",
      school: "TH S N C P Singh Inter College",
      duration: "2019 - 2021 (Passed)",
      description:
        "Excelled in Physics, Chemistry, Mathematics, and Computer Science. Secured 83.13% with distinction.",
    },
  ];

  return (
    <div className="max-w-screen-2xl mx-auto py-12 px-6 sm:px-10 lg:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-black">
        Education
      </h2>
      <div className="space-y-10">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row items-start md:items-center bg-gray-800 shadow-md rounded-xl p-6 md:p-8 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:bg-gray-700"
          >
            <div className="flex-shrink-0 mr-6 mb-4 md:mb-0">
              <div className="bg-indigo-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <FaGraduationCap size={28} />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-yellow-300">
                {edu.degree}
              </h3>
              <h4 className="text-lg font-medium text-gray-300 mt-1">
                {edu.major} -{" "}
                <span className="text-gray-200 font-semibold">{edu.school}</span>
              </h4>
              <p className="text-sm text-gray-400 font-medium mt-1">
                {edu.duration}
              </p>
              <p className="text-gray-200 mt-4">{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
