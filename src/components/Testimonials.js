import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

const testimonials = [
  {
    quote: "The AI assistant has transformed our front desk operations.",
    author: "Dr. John Smith, Dental Clinic XYZ",
  },
  {
    quote:
      "The AI receptionist has greatly improved our customer support efficiency.",
    author: "Jane Doe, Tech Startup ABC",
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom align="center">
        Testimonials
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((testimonial, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Paper elevation={3} style={{ padding: 16 }}>
              <Typography variant="body1" paragraph>
                "{testimonial.quote}"
              </Typography>
              <Typography variant="body2" color="textSecondary" align="right">
                - {testimonial.author}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials;
