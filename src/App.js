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
