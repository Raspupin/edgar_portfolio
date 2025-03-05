import React from "react";
import { Typography, Container } from "@mui/material";

function About() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        About Me
      </Typography>
      <Typography variant="body1">This is the About page.</Typography>
    </Container>
  );
}

export default About;
