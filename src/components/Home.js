import React from "react";
import { Box, Typography, Avatar, Grid, Link, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
                AI Engineer & Frontend Developer
              </Typography>
            </Box>
            <Box mb={10}>
              <Typography variant="body1" paragraph>
                I specialise in seamlessly integrating AI into business
                operations and have extensive experience as a frontend
                developer.
              </Typography>
            </Box>
            <Grid container spacing={4}>
              <Grid item>
                <Link
                  href="https://www.linkedin.com/in/luis-zhang-a45a1b183/"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton color="primary">
                    <LinkedInIcon fontSize="large" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://github.com/luisz2k"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton color="primary">
                    <GitHubIcon fontSize="large" />
                  </IconButton>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="https://www.youtube.com/channel/UCd8HJ1dH1CoNZqu388Opn-w"
                  color="inherit"
                  target="_blank"
                  rel="noopener"
                >
                  <IconButton color="primary">
                    <YouTubeIcon fontSize="large" />
                  </IconButton>
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
