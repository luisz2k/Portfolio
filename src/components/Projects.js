import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

const projects = [
  {
    title: "Virtual Receptionist for a Dental Clinic",
    description:
      "Developed an AI voice assistant to handle appointment scheduling, patient reminders, and basic inquiries.",
    technologies: ["Python", "Vapi AI", "Twilio", "Make.com"],
    image: "/project-placeholder.png",
  },
  {
    title: "AI Receptionist for Tech Startup",
    description:
      "Created an AI receptionist to handle incoming calls, provide company information, and route calls to the appropriate departments.",
    technologies: ["Node.js", "Dialogflow", "Twilio"],
    image: "/project-placeholder.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom align="center">
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt={project.title}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" mt={2}>
                  Technologies: {project.technologies.join(", ")}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
