import React from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const Contact = () => {
  return (
    <Box my={4}>
      <Typography variant="h4" gutterBottom align="center">
        Contact
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={8}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
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
