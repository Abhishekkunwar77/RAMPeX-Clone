import React from "react";
import one from "../assets/1.png"
import two from "../assets/2.png"
import three from "../assets/3.png"
import four from "../assets/4.png"
import five from "../assets/5.png"
import six from "../assets/6.png"
import seven from "../assets/7.jpeg"
import eight from "../assets/8.jpg"
import nine from "../assets/9.png"
import ten from "../assets/10..avif"
import eleven from "../assets/11.png"
const logos = [
  one,
  two, three, four,five,six,seven,eight,nine,ten,eleven
];

const Collaborators = () => {
  return (
    <section id="partners" className=" py-16 px-6 text-center overflow-hidden mb-[20px]">
      <h2 className="text-3xl font-bold  text-[#0d1a73] mb-10">
        Institutional Collaborators
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll whitespace-nowrap gap-10">
          {[...logos, ...logos].map((logo, idx) => (
            <img
              key={idx}
              src={logo}
              alt={`Logo ${idx + 1}`}
              className="w-[] h-[80px] inline-block"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborators;
