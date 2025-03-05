import { Typography, Container } from "@mui/material";
import React from "react";

function Projects() {
  return (
    <Container>
      <Typography variant="h4" sx={{ mt: 4 }}>
        Projects Page
      </Typography>
      <Typography variant="body1">
        This is where projects will be displayed.
      </Typography>
    </Container>
  );
}

export default Projects;
