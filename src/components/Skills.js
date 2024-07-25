import React from "react";
import { Box, Typography, Chip, Grid } from "@mui/material";

const skills = [
  "Python",
  "JavaScript",
  "React.js",
  "Node.js",
  "Material-UI",
  "Vapi AI",
  "Twilio",
  "Zoho CRM",
  "Dialogflow",
];

const Skills = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom align="center">
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip label={skill} color="primary" />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
