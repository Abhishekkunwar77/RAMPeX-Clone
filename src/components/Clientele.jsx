import React from "react";
import c1 from "../assets/c1.png";
import c2 from "../assets/c2.png";
import c3 from "../assets/c3.png";
import c4 from "../assets/c4.png";

const benefits = [
  {
    image: c1,
    title: "Explore New Skills",
    desc: "Learn essential emerging skills for career growth and industry competitiveness.",
  },
  {
    image: c2,
    title: "Learn from Tech Titans",
    desc: "Learn from industry professionals and technology experts with real-world experience.",
  },
  {
    image: c3,
    title: "Practical Experience",
    desc: "Engage in hands-on learning with real-world applications for job market readiness.",
  },
  {
    image: c4,
    title: "Career Advancement Support",
    desc: "Enhance your career prospects with resume building and mock interviews for a smooth transition.",
  },
];

const Clientele = () => {
  return (
    <section className="bg-[#e7e9ee] py-16 px-4">
      <h2 className="text-4xl font-bold text-center text-[#3a0ca3] mb-2">
        Clientele Benefits
      </h2>
      <div className="w-40 h-1 bg-[#3a0ca3] mx-auto mb-10"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {benefits.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-16 w-16 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
            <p className="text-sm text-gray-800 max-w-[260px]">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clientele;
