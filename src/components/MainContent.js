import React from "react";
import { Container } from "@mui/material";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
// import Testimonials from "./Testimonials"; // Uncomment if needed
import Contact from "./Contact";

const MainContent = () => {
  return (
    <Container>
      <Home />
      <Projects />
      <Skills />
      {/* <Testimonials /> */}
      <Contact />
    </Container>
  );
};

export default MainContent;
