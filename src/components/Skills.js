import React from "react";
import { Box, Typography, Chip, Grid } from "@mui/material";

const skills = [
  "Python",
  "C",
  "HTML",
  "CSS",
  "JavaScript",
  "C#",
  "Java",
  "React.js",
  "Node.js",
];

const Skills = () => {
  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom align="center" mb={8}>
        Skills
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map((skill, index) => (
          <Grid item key={index}>
            <Chip
              label={skill}
              color="primary"
              sx={{
                padding: "5px",
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
