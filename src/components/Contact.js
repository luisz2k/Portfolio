import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Box my={4}>
      <Typography variant="h2" gutterBottom align="center" mb={4}>
        Contact
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Name"
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
            <Button variant="contained" color="primary">
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
