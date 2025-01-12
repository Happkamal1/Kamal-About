import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../public/kamal.jpg";
import { TiThMenuOutline } from "react-icons/ti";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const NavItems = [
    { id: 1, href: "/", text: "Home" },
    { id: 2, href: "/education", text: "Education" },
    { id: 3, href: "/skills", text: "Skills" },
    { id: 4, href: "/experience", text: "Experience" },
    // { id: 5, href: "/", text: "Projects" },
    { id: 6, href: "/contact", text: "Contact" },
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto h-20 px-6 md:px-16 shadow-lg fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500">
      <div className="flex justify-between items-center h-20">
        <div className="flex space-x-4">
          <img
            src={Logo}
            alt="Logo"
            className="h-20 w-20 rounded-full border-4 border-white"
          />
          <div>
            <h1 className="text-3xl font-semibold text-white cursor-pointer">
              Kamal Gupta
            </h1>
            <p className="text-lg text-yellow-300 font-semibold">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div>
          <ul className="hidden md:flex space-x-8">
            {NavItems.map(({ href, id, text  }) => (
              <NavLink
                to={href}
                key={id}
                className="text-white font-semibold text-xl hover:text-yellow-300 transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
              >
                {text}
              </NavLink>
            ))}
          </ul>

          {/* Mobile Hamburger Icon */}
          <div className="md:hidden" onClick={() => setMenu(!menu)}>
            {menu ? (
              <ImCross size={24} color="white" />
            ) : (
              <TiThMenuOutline size={24} color="white" />
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      {menu && (
        <div className="lg:hidden md:hidden flex flex-col items-center justify-center space-y-4 mt-4 bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 p-6 rounded-lg shadow-lg">
          {NavItems.map(({ id, text }) => (
            <li
              key={id}
              className="text-white font-semibold text-xl hover:text-yellow-300 transition duration-300 ease-in-out transform list-none hover:bg-slate-600 scale-105 cursor-pointer  "
              onClick={() => setMenu(false)}
            >
              {text}
            </li>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
