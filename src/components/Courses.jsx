import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import co1 from "../assets/co1.png";
import co2 from "../assets/co2.png";
import co3 from "../assets/co3.jpeg";
import co4 from "../assets/co4.jpg";
import co5 from "../assets/co5.png";
import co6 from "../assets/co13.jpeg";
import co7 from "../assets/co7.jpg";
import co8 from "../assets/co8.jpg";
import co9 from "../assets/co9.jpeg";
import co10 from "../assets/co10.jpeg";
import co11 from "../assets/co11.png";
import co12 from "../assets/co12.jpg";

const courseData = [
  {
    image: co1,
    title: "C Programming",
    subtitle: "Foundations of System Programming",
    bullets: [
      "Learn the basics of C programming, including syntax, structures, and memory management.",
      "Systems Programmer, Embedded Systems Developer, Firmware Engineer.",
      "Embedded systems, operating systems, game development.",
    ],
  },
  {
    image: co2,
    title: "C++ Programming",
    subtitle: "Object-Oriented and System-Level Programming",
    bullets: [
      "Master C++ programming, focusing on object-oriented design and system-level programming.",
      "Software Engineer, Game Developer, Systems Programmer.",
      "Game development, software development, finance.",
    ],
  },
  {
    image: co3,
    title: "Java",
    subtitle: "Versatile and Robust Programming",
    bullets: [
      "Explore Java programming for building robust, high-performance applications.",
      "Java Developer, Software Engineer, Backend Developer.",
      "Enterprise solutions, finance, mobile development.",
    ],
  },
  {
    image: co4,
    title: "Python",
    subtitle: "Simple, Versatile, and Powerful Programming",
    bullets: [
      "Learn Python for web development, data science, automation, and more.",
      "Python Developer, Data Scientist, Automation Engineer.",
      "Tech, finance, research, startups.",
    ],
  },
  {
    image: co5,
    title: "Data Structures and Algorithms (DSA)",
    subtitle: "Efficient Problem Solving",
    bullets: [
      "Understand and implement core data structures and algorithms for efficient problem solving.",
      "Software Engineer, Algorithm Engineer, Systems Architect.",
      "Tech, finance, research.",
    ],
  },
  {
    image: co6,
    title: "Computer Science Core Subjects",
    subtitle: "Essential CS Knowledge",
    bullets: [
      "Cover the core subjects of computer science, including operating systems, networking, and theory of computation.",
      "Software Engineer, Network Engineer, Systems Analyst.",
      "Tech, telecommunications, research.",
    ],
  },
  {
    image: co7,
    title: "Database Management Systems (DBMS) and MySQL",
    subtitle: "Database Design and Management",
    bullets: [
      "Learn the fundamentals of DBMS and gain practical skills in MySQL.",
      "Database Administrator, Backend Developer, Data Analyst.",
      "Tech, finance, e-commerce.",
    ],
  },
  {
    image: co8,
    title: "Design and Analysis of Algorithms (DAA)",
    subtitle: "Algorithmic Efficiency",
    bullets: [
      "Master the design and analysis of algorithms to solve complex computational problems.",
      "Algorithm Engineer, Software Developer, Systems Architect.",
      "Tech, finance, research.",
    ],
  },
  {
    image: co9,
    title: "MERN Stack",
    subtitle: "Revolutionizing Full-Stack Development",
    bullets: [
      "Master MongoDB, ExpressJS, React, and Node for full-stack development.",
      "Full-Stack Developer, Backend Developer, Database Administrator.",
      "Tech startups, e-commerce, social media platforms.",
    ],
  },
  {
    image: co10,
    title: "MEAN Stack",
    subtitle: "Embracing Scalable Applications",
    bullets: [
      "Learn MongoDB, Express.js, Angular, and Node.js for scalable applications.",
      "Full-Stack Developer, Frontend Developer, Backend Developer.",
      "Startups, healthcare, finance.",
    ],
  },
  {
    image: co11,
    title: "Java Full Stack",
    subtitle: "Harness the Power of Java",
    bullets: [
      "Craft end-to-end solutions, blending front-end and back-end development with Java.",
      "Full-Stack Developer, Backend Developer, Java Developer, Software Architect.",
      "Opportunities in tech, finance, enterprise solutions, and e-commerce.",
    ],
  },
  {
    image:co12,
    title: "Python Full Stack",
    subtitle: "Unleashing Simplicity and Versatility",
    bullets: [
      "Create full-stack solutions with Python, focusing on simplicity and rapid prototyping.",
      "Full-Stack Developer, Backend Developer, Frontend Developer, Data Scientist, DevOps Engineer.",
      "Tech, startups, research, healthcare, education.",
    ],
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-16 px-4 bg-white">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-10 underline decoration-4 decoration-purple-800">
        Courses Offered
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        slidesPerGroup={1} // 👈 Add this line (or update if it already exists)
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 }, // 👈 This makes it slide 3 at once on large screens
        }}
      >
        {courseData.map((course, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white min-h-[580px] rounded-xl border border-gray-200 shadow hover:shadow-lg transition duration-300 h-full flex flex-col">
              {/* Fixed Image Area */}
              <div className="w-full h-48 overflow-hidden rounded-t-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Locked Content Area */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                {/* Title + Subtitle Centered */}
                <div className="flex flex-col items-center justify-center text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <h4 className="text-sm font-medium text-gray-700 mt-1">
                    {course.subtitle}
                  </h4>
                </div>

                {/* Bullet Points always at bottom */}
                <ul className="mt-6 list-disc list-inside text-sm text-gray-700 space-y-2 text-left">
                  {course.bullets.map((point, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Courses;
