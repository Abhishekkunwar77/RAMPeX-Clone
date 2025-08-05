import React from "react";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="bg-[#01205B] text-white pt-30 pb-4 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 grid-cols-1 gap-17 text-sm">
        {/* Logo + Tagline */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-5xl font-bold mb-2">RAMPeX</h3>
          <p className="mb-4 text-gray-300">Reboot your learning experience</p>
          <div className="flex space-x-4">
            <a
              target="_blank"
              href="https://x.com/RAMPeXTech?mx=2"
              className="border-2 border-blue-700 bg-[#1DA1F2] p-4  rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaTwitter className=" text-white text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/rampextech/"
              className="border-2 border-blue-700 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-4 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaInstagram className="text-white text-2xl" />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/rampextechnologies"
              className="border-2 border-blue-700 bg-[#0077B5] p-4 rounded-full transition-transform duration-300 hover:scale-110"
            >
              <FaLinkedin className="text-white text-2xl" />
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-semibold text-2xl mb-3">Company</h4>
          <ul className="space-y-3 text-gray-300 font-semibold">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#">Happy Moments</a>
            </li>
            <li>
              <a href="#">Training Gallery</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-2xl mb-3">QuickLinks</h4>
          <ul className="space-y-3 text-gray-300 font-semibold">
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#">Testimonials</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold text-2xl mb-3">Services</h4>
          <ul className="space-y-3 text-gray-300 font-semibold">
            <li>
              <a href="#">Inovative Products</a>
            </li>
            <li>
              <a href="#">Excellence Center</a>
            </li>
            <li>
              <a href="#">Placements Assistance</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className='mt-[-80px]'>
          <h4 className="font-semibold text-2xl mb-3">Contact Info</h4>
          <ul className="space-y-3 text-gray-300 ">
            <li>
              <strong>Email</strong>
              <br />
              info@rampex.in
            </li>
            <li>
              <strong>Phone</strong>
              <br />
              +91 89038 69600
              <br />
              +91 85259 00818
            </li>
            <li>
              <strong>Address</strong>
              <br />
              Chennai, Tamil Nadu, India
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-600 pt-4 text-center text-gray-400 text-md">
        Copyright © 2025 Rampex Technologies
      </div>
    </footer>
  );
};

export default Footer;
