import React from "react";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0D47A1",
    },
    secondary: {
      main: "#42A5F5",
    },
    background: {
      default: "#212121",
      paper: "#424242",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "Roboto Slab, Arial",
    h1: {
      fontWeight: 600,
      fontSize: "6rem", // Optional: Set specific font size
    },
    h2: {
      fontSize: "3.5rem", // Optional: Set specific font size
    },
    h3: {
      fontSize: "3rem", // Optional: Set specific font size
    },
    h4: {
      fontSize: "2rem", // Optional: Set specific font size
    },
    body1: {
      fontSize: "1rem", // Optional: Set specific font size
    },
    body2: {
      fontSize: "0.875rem", // Optional: Set specific font size
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        <Home />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
