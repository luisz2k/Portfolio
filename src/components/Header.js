import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

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
        <Button color="inherit">Home</Button>
        <Button color="inherit">Projects</Button>
        <Button color="inherit">Skills</Button>
        <Button color="inherit">Contact</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
