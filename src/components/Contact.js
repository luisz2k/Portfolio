import React, { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message sent successfully!");
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom align="center" mb={4}>
        Contact
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "inherit", // Label color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "inherit", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "primary", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary", // Border color when focused
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              sx={{
                "& .MuiInputLabel-root": {
                  color: "inherit", // Label color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "inherit", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "primary", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary", // Border color when focused
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              multiline
              rows={4}
              sx={{
                "& .MuiInputLabel-root": {
                  color: "inherit", // Label color
                },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "inherit", // Border color
                  },
                  "&:hover fieldset": {
                    borderColor: "primary", // Border color on hover
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary", // Border color when focused
                  },
                },
              }}
            />
            <Box textAlign="center" mt={2}>
              <Button variant="contained" color="primary" type="submit">
                Send
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
