import React from "react";
import { Box, Typography, Avatar, Grid, Link } from "@mui/material";

const Home = () => {
  return (
    <Box my={4} textAlign="center">
      <Avatar
        alt="Profile Picture"
        src="/profile-placeholder.png"
        style={{ width: 100, height: 100, margin: "auto" }}
      />
      <Typography variant="h4" gutterBottom>
        Luis Zhang
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        AI Consultant & Frontend Developer
      </Typography>
      <Typography variant="body1" paragraph>
        I specialize in creating AI voice assistants for reception duties and
        have extensive experience as a frontend developer.
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Link href="#" color="inherit">
            LinkedIn
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            GitHub
          </Link>
        </Grid>
        <Grid item>
          <Link href="#" color="inherit">
            Twitter
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
