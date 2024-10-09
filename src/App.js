import React from "react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import AIAutomation from "./pages/AIAutomation"; // Import the new component

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
      fontSize: "6rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: {
            background: "linear-gradient(135deg, #1a1a1a, #2b2b2b)",
            color: "white",
            margin: 0,
            fontFamily: "Roboto, sans-serif",
            minHeight: "100vh",
          },
        }}
      />
      <Router basename="/Portfolio">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/ai-automation" element={<AIAutomation />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
