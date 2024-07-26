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
    youtube: "https://www.youtube.com/embed/7vCGNOhR3e0",
  },
  {
    title: "Restaurant Order System",
    description:
      "Full-stack restaurant ordering system that streamlines the entire order management process. The system allows customers to browse the menu, add dishes to their cart, and place orders seamlessly. It also enables wait staff to manage pending orders efficiently, kitchen staff to update the status of orders in real-time, and managers to easily update the menu.",
    technologies: ["Python", "Flask", "React", "Redux", "Bootstrap", "Cypress"],
    image: "/project2.png",
  },
  {
    title: "TCP Client-Server Messaging Application",
    description:
      "Implemented a client-server model for a simple messaging and online video conferencing application based on Zoom, utilising socket programming in Python for client-server communication and multi-threading for handling multiple client connections concurrently. The application currently supports a range of functions including authentication, broadcasting text messages to all participants and displaying a list of active users.",
    technologies: ["Python", "Socket programming", "Multithreading"],
    image: "/project3.png",
  },
  {
    title: "Mandelbrot",
    description:
      "My first ever university coding project! This involved implementing an algorithm to compute the Mandelbrot set and rendering it efficiently using modern graphics techniques. The tool allows users to zoom in and out, revealing the fractal's intricate and infinite detail.",
    technologies: ["C programming language"],
    image: "/project4.jpg",
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
                {project.youtube && (
                  <iframe
                    width="100%"
                    height="200"
                    src={project.youtube}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
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
