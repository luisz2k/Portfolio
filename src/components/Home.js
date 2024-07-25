import React from "react";
import { Box, Typography, Avatar, Grid, Link } from "@mui/material";

const Home = () => {
  return (
    <Box my={12}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box textAlign="left">
            <Box mb={4}>
              <Typography variant="h1" gutterBottom>
                Luis Zhang
              </Typography>
            </Box>
            <Box mb={4}>
              <Typography variant="h2" gutterBottom>
                AI Consultant & Frontend Developer
              </Typography>
            </Box>
            <Box mb={10}>
              <Typography variant="body1" paragraph>
                I specialize in creating AI voice assistants for reception
                duties and have extensive experience as a frontend developer.
              </Typography>
            </Box>
            <Grid container spacing={2}>
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
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Avatar
            alt="Profile Picture"
            src={`${process.env.PUBLIC_URL}/profile-photo.jpg`} // TODO: replace this with a better photo lol
            sx={{ width: 400, height: 400 }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
