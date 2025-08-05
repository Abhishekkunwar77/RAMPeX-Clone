import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/Logo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  const scrollToSection = (id, name) => {
    setActiveNav(name);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false); // Close menu on mobile after click
  };

  const handleLogoClick = () => {
    window.location.href = "/";
  };


  const navItems = [
    { name: "HOME", id: "/" },
    { name: "ABOUT", id: "about" },
    { name: "WHAT WE DO", id: "whatwedo" },
    { name: "COURSES", id: "courses" },
    { name: "PARTNERS", id: "partners" },
    { name: "CONTACT US", id: "footer" },
  ];

  return (
    <nav
      style={{ fontFamily: "'Montserrat', sans-serif" }}
      className="fixed w-full bg-white  z-50 top-0"
    >
      <div className="flex justify-between items-center px-5 py-1.5">
        <div
          className="w-[178px] h-[64px] ml-[37px] cursor-pointer"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="RAMPeX Logo"
            className="w-full h-[70px] object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 pr-6 text-[14px]  font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`cursor-pointer transition-colors duration-200 ${
                activeNav === item.name ? "text-blue-600" : "text-black"
              } hover:text-blue-600`}
              onClick={() => scrollToSection(item.id, item.name)}
            >
              {item.name}
            </li>
          ))}
        </ul>

        {/* Hamburger Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer z-[100] pr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg transform transition-transform duration-300 z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden flex flex-col items-center pt-24 gap-6`}
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              className={`list-none text-xl font-semibold cursor-pointer ${
                activeNav === item.name ? "text-blue-600" : "text-black"
              } hover:text-blue-600`}
              onClick={() => scrollToSection(item.id, item.name)}
            >
              {item.name}
            </li>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
