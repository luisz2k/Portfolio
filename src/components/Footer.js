import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box py={4} textAlign="center">
      <Typography variant="body2" color="textSecondary">
        © 2024 My Portfolio. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <Link href="#" color="inherit">
          Privacy Policy
        </Link>{" "}
        |{" "}
        <Link href="#" color="inherit">
          Terms of Service
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
