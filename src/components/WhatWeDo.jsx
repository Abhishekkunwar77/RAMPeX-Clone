import React from "react";
import w1 from "../assets/w1.png"
import w2 from "../assets/w2.png"
import w3 from "../assets/w3.png"
import w4 from "../assets/w4.png"
const items = [
  {
    title: "PLP Training Program",
    desc: "Customized training programs designed to transform every learner into a success story",
    icon: w1
  },
  {
    title: "Stack Training",
    desc: "On-demand domain and tech stack training to meet industry needs, anytime, anywhere",
    icon: w2
  },
  {
    title: "Super Dream Offer",
    desc: "Empowering talent to crack top-tier companies and achieve dream packages",
    icon: w3
  },
  {
    title: "Faculty Enhancement Program",
    desc: "Redefining teaching with innovative methodologies and real-world applications",
    icon: w4
  },
];

const WhatWeDo = () => {
  return (
      <section
        className="bg-[#071e57] text-white py-15 scroll-mt-20"
        id="whatwedo"
      >
        <div className="text-center max-w-4xl mx-auto mb-12 ">
          <h2 className="text-3xl  mb-4">What We Do</h2>
          <h3 className="text-2xl font-semibold">
            <span className="ml-[-1000px] border-l-4 border-[#143075] pl-4 inline-block">
              Center of Excellence
            </span>
          </h3>
          <p className="ml-[-320px] mt-4 text-lg font-medium ">
            Employability Training : Evolving from a Student to a Highly
            Sought-After Professional in Your Chosen Field.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  max-w-6xl mx-auto text-center">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-4 px-4"
            >
              <img src={item.icon} alt={item.title} className="w-16 h-16" />
              <h4 className="text-lg ">{item.title}</h4>
              <p className="text-[13px] opacity-80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
  );
};

export default WhatWeDo;
