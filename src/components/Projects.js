import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CardActions,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "AI Voice Assistant",
    description:
      "Developed multiple AI voice assistants tailored for different roles and responsibilities. The inbound agent handles customer service inquiries and appointment scheduling, while the outbound agent manages telemarketing cold calls and follow-up calls, ensuring efficient and targeted communication across various business functions.",
    technologies: ["Python", "Vapi AI", "Make.com", "Twilio", "Google Sheets"],
    image: "/project1.jpeg",
    audio: "/demo.wav",
  },
  {
    title: "Restaurant Order System",
    description:
      "Full-stack restaurant ordering system that streamlines the entire order management process. The system allows customers to browse the menu, add dishes to their cart, and place orders seamlessly. It also enables wait staff to manage pending orders efficiently, kitchen staff to update the status of orders in real-time, and managers to easily update the menu.",
    technologies: ["Python", "Flask", "React", "Redux", "Bootstrap", "Cypress"],
    image: "/project2.png",
  },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom align="center" mb={8}>
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
                <Typography variant="h4" component="div" mb={4}>
                  {project.title}
                </Typography>
                <Typography variant="body2" mb={2}>
                  {project.description}
                </Typography>
                <Typography variant="body2" mb={4}>
                  {project.technologies.join(", ")}
                </Typography>
                {project.audio && (
                  <audio controls>
                    <source src={project.audio} type="audio/wav" />
                    Your browser does not support the audio element.
                  </audio>
                )}
              </CardContent>
              <CardActions>
                <Button>Share</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
