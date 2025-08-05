import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
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
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co4,
    title: "Python",
    subtitle: "Simple, Versatile, and Powerful Programming",
    bullets: [
      "Learn Python for web development, data science, automation, and more.",
      "Python Developer, Data Scientist, Automation Engineer.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co5,
    title: "Data Structures and Algorithms (DSA)",
    subtitle: "Efficient Problem Solving",
    bullets: [
      "Understand and implement core data structures and algorithms for efficient problem solving.",
      "Software Engineer, Algorithm Engineer, Systems Architect.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co6,
    title: "Computer Science Core Subjects",
    subtitle: "Essential CS Knowledge",
    bullets: [
      "Cover the core subjects of computer science, including operating systems, networking, computation.",
      "Software Engineer, Network Engineer, Systems Analyst.",
      "Enterprise solutions, finance, mobile development.",
    ],
  },
  {
    image: co7,
    title: " DBMS and MySQL",
    subtitle: "Database Design and Management",
    bullets: [
      "Learn the fundamentals of DBMS and gain practical skills in MySQL.",
      "Database Administrator, Backend Developer, Data Analyst.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co8,
    title: "Design and Analysis of Algorithms (DAA)",
    subtitle: "Algorithmic Efficiency",
    bullets: [
      "Master the design and analysis of algorithms to solve complex computational problems.",
      "Algorithm Engineer, Software Developer, Systems Architect.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co9,
    title: "MERN Stack",
    subtitle: "Revolutionizing Full-Stack Development",
    bullets: [
      "Master MongoDB, ExpressJS, React, and Node for full-stack development.",
      "Full-Stack Developer, Backend Developer, Database Administrator.",
      "Tech startups, e-commerce, social media platforms with effectiveness.",
    ],
  },
  {
    image: co10,
    title: "MEAN Stack",
    subtitle: "Embracing Scalable Applications",
    bullets: [
      "Learn MongoDB, Express.js, Angular, and Node.js for scalable applications.",
      "Full-Stack Developer, Frontend Developer, Backend Developer.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co11,
    title: "Java Full Stack",
    subtitle: "Harness the Power of Java",
    bullets: [
      "Craft end-to-end solutions, blending front-end and back-end development with Java.",
      "Full-Stack Developer, Backend Developer, Java Developer, Software Architect.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co12,
    title: "Python Full Stack",
    subtitle: "Unleashing Simplicity and Versatility",
    bullets: [
      "Create full-stack solutions with Python, focusing on simplicity and rapid prototyping.",
      "Full-Stack Developer, Backend Developer, Frontend Developer, Data Scientist, DevOps Engineer.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co7,
    title: " DBMS and MySQL",
    subtitle: "Database Design and Management",
    bullets: [
      "Learn the fundamentals of DBMS and gain practical skills in MySQL.",
      "Database Administrator, Backend Developer, Data Analyst.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co8,
    title: "Design and Analysis of Algorithms (DAA)",
    subtitle: "Algorithmic Efficiency",
    bullets: [
      "Master the design and analysis of algorithms to solve complex computational problems.",
      "Algorithm Engineer, Software Developer, Systems Architect.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co9,
    title: "MERN Stack",
    subtitle: "Revolutionizing Full-Stack Development",
    bullets: [
      "Master MongoDB, ExpressJS, React, and Node for full-stack development.",
      "Full-Stack Developer, Backend Developer, Database Administrator.",
      "Tech startups, e-commerce, social media platforms with effectiveness.",
    ],
  },
  {
    image: co7,
    title: " DBMS and MySQL",
    subtitle: "Database Design and Management",
    bullets: [
      "Learn the fundamentals of DBMS and gain practical skills in MySQL.",
      "Database Administrator, Backend Developer, Data Analyst.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co8,
    title: "Design and Analysis of Algorithms (DAA)",
    subtitle: "Algorithmic Efficiency",
    bullets: [
      "Master the design and analysis of algorithms to solve complex computational problems.",
      "Algorithm Engineer, Software Developer, Systems Architect.",
      "Enterprise solutions, finance, mobile development with efficiency",
    ],
  },
  {
    image: co9,
    title: "MERN Stack",
    subtitle: "Revolutionizing Full-Stack Development",
    bullets: [
      "Master MongoDB, ExpressJS, React, and Node for full-stack development.",
      "Full-Stack Developer, Backend Developer, Database Administrator.",
      "Tech startups, e-commerce, social media platforms with effectiveness.",
    ],
  },
];

const Courses = () => {
  return (
    <section
      id="courses"
      className="scroll-mt-10  py-15  bg-white relative overflow-visible"
    >
      <h2 className="text-3xl font-semibold text-center text-[#143075]  ">
        Courses Offered
      </h2>

      <div className="w-30 mt-1 h-1 bg-[#143075] mx-auto mb-10"></div>

      <div className=" relative w-full max-w-[1340px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          slidesPerGroup={1}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2, slidesPerGroup: 2 },
            1024: { slidesPerView: 3, slidesPerGroup: 3 },
          }}
          className="pb-20"
        >
          {courseData.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white w-full max-w-[450px] min-h-[480px] h-full rounded-xl border border-gray-200 shadow transition duration-300 flex flex-col hover:border-blue-600">
                {/* Image */}
                <div className="flex items-center justify-center py-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-[370px] h-[210px] object-cover rounded mt-4"
                  />
                </div>

                {/* Content */}
                <div className="px-5 pb-5 flex flex-col justify-between flex-grow">
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {course.title}
                    </h3>
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      {course.subtitle}
                    </h4>
                  </div>
                  <ul className="list-disc list-inside text-md text-gray-700 space-y-2 text-left">
                    {course.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows (React Icons) – outside section */}
        <button className="hover:cursor-pointer custom-prev absolute top-[45%] -left-12 z-30 bg-[#143075] text-white p-1 rounded-full  shadow-lg">
          <FaChevronLeft />
        </button>
        <button className="hover:cursor-pointer custom-next absolute top-[45%] -right-12 z-30 bg-[#143075] text-white p-1 rounded-full  shadow-lg">
          <FaChevronRight />
        </button>

        {/* Dots below everything */}
        <div className="custom-pagination flex justify-center mt-10 gap-5" />
      </div>
    </section>
  );
};

export default Courses;
