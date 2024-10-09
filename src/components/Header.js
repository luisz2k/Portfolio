import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: "linear-gradient(135deg, #1a1a1a, #2b2b2b)",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Typography variant="h5" style={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/ai-automation">
          AI Automation
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
