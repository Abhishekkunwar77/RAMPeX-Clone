import React from "react";
import splashImage from "../assets/splashImage.png";

const milestones = [
  { count: "10K+", label: "Students Empowered" },
  { count: "100+", label: "Trainings Completed" },
  { count: "30+", label: "Partnerships" },
  { count: "25+", label: "Industrial Trainers" },
];

const Splash = () => {
  return (
    <>
      {/* Splash Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center px-10 pt-20 pb-10 bg-[#f7f7fb]">
        {/* Left Side */}
        <div className="md:w-[58%] text-left mb-[40px] md:mb-[75px]">
          <h1 className="ml-[27px] text-[36px] md:text-[47px] font-extrabold text-[#041C59] ">
            <span className="block whitespace-nowrap">
              Reboot Your Learning Experience
            </span>
            <span className="block whitespace-nowrap">
              Supercharge Your Tech Knowledge
            </span>
            <span className="block whitespace-nowrap">
              Unleash Your Tech Genius with Us
            </span>
          </h1>

          <p className="mt-[10px] ml-[30px] text-[16px] md:text-[18px] font-bold text-black whitespace-nowrap">
            Empowering Future Professionals through the Fusion of Academic
            Excellence and Industry Insight
          </p>

          <div className="flex gap-6 mt-10 ml-[72px] mb-[25px]">
            <button
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#3e0099] hover:bg-[#32007a] hover:cursor-pointer text-white font-semibold px-12 py-3.5 rounded-full transition-all duration-300 text-lg shadow-lg"
            >
              Read More
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("footer")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="border-2 border-[#3e0099] hover:cursor-pointer text-[#3e0099] font-semibold px-12 py-3.5 rounded-full hover:bg-[#f3e8ff] transition-all duration-300 text-lg shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div className="mb-45 md:mt-0 flex justify-center">
          <img
            src={splashImage}
            alt="Splash"
            className="ml-[145px] w-[340px] h-[270px] mb-[15px] rounded-lg object-cover"
          />
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-[#f7f7fb] mt-[-200px] pb-16 px-6 text-center ">
        <h2 className="text-3xl md:text-4xl font-bold text-[#250562] mb-10">
          Milestones Achieved
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 ">
          {milestones.map((milestone, index) => (
            <div key={index}>
              <div className="text-4xl md:text-5xl font-extrabold text-[#250562] ">
                {milestone.count}
              </div>
              <p className="mt-2 text-[#003366] text-sm md:text-base font-medium">
                {milestone.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Splash;
