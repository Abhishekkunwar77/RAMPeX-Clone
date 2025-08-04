import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="bg-[#1A0052] text-white  text-center md:text-left"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl  font-semibold text-gray-300 mb-4 text-center">
          About Us
        </h2>
        <h3 className="text-xl mt-[50px] text-white mb-8 text-center">
          Empower Your Future : Transform Your Skills, Elevate Your Career, and
          Become a Leader in the Tech Industry.
        </h3>

        <div className="relative max-w-5xl mx-auto">
          <FaQuoteLeft className="ml-[-40px] text-4xl text-[#280b64]" />
          <p className="text-[18px] text-white leading-loose text-center">
            RAMPeX Technologies, a dynamic and forward-thinking IT training
            initiative, specializes in comprehensive skill development and
            cutting-edge technology training. Our programs cater to students at
            all levels, starting from the basics and progressing to expertise,
            aligning with our Personalized Learning Path (PLP) strategy. This
            strategy ensures we deliver customized and innovative learning
            experiences, ultimately fostering expert development and
            facilitating job placement in the IT industry.
            <br />
            Our initiative name, RAMPeX, reflects our commitment to helping
            students boost their skills to expertise level and rebooting the new
            learning experience. We believe that, with the right training and
            support, every student has the potential to become an expert in
            their field.
          </p>
          <div className="flex justify-end">
            <FaQuoteRight className="mb-[20px] text-4xl text-[#482C91]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
