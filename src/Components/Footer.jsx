import React from 'react';
import { FaGithub, FaLinkedin, FaFacebookSquare, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold">Contact</h3>
            <p className="text-gray-400 mt-2">Feel free to reach out via email or social media!</p>
            <p className="mt-4 text-gray-400">Email: <span className="text-blue-500">kg9118545@gmail.com</span></p>
          </div>
          
          <div className="flex space-x-6 justify-center md:justify-start">
            <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/kamal-gupta-32724a230" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100077256217404" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaFacebookSquare size={24} />
            </a>
            <a href="https://www.instagram.com/happykamal_1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-gray-500 text-sm">
          <ul className="space-x-8">
            <li className="inline-block text-xl"><a href="#home" className="hover:text-blue-500 transition-colors duration-300">Home</a></li>
            <li className="inline-block text-xl"><a href="#education" className="hover:text-blue-500 transition-colors duration-300">Education</a></li>
            <li className="inline-block text-xl"><a href="#skills" className="hover:text-blue-500 transition-colors duration-300">Skills</a></li>
            <li className="inline-block text-xl"><a href="#experience" className="hover:text-blue-500 transition-colors duration-300">Experience</a></li>
            <li className="inline-block text-xl"><a href="#projects" className="hover:text-blue-500 transition-colors duration-300">Projects</a></li>
            <li className="inline-block text-xl"><a href="#contact" className="hover:text-blue-500 transition-colors duration-300">Contact</a></li>
          </ul>
        </div>

        <div className="mt-4 text-center text-gray-500 text-xs">
          <p>&copy; 2024 Kamal Gupta. All rights reserved.</p>
          <p>Designed with ❤️ by Kamal Gupta</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
