import React from "react";
import Navbar from "./components/Navbar";
import Splash from "./components/Splash";
import AboutUs from "./components/AboutUs";
import Clientele from "./components/Clientele";
import WhatWeDo from "./components/WhatWeDo";
import Courses from "./components/Courses";
import Collaborators from "./components/Collaborators";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans overflow-x-hidden">
      <Navbar />
      <Splash />
      <AboutUs />
      <Clientele />
      <WhatWeDo />
      <Courses />
      <Collaborators />
      <Footer />
    </div>
  );
}

export default App;
