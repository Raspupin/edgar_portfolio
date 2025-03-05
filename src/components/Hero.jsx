import React from "react";
import { Box, Typography, Container } from "@mui/material";

function Hero() {
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        color: "text.primary",
        py: 6,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
      }}
    >
      <Container>
        <Typography variant="h2" sx={{ fontWeight: "bold", mb: 1 }}>
          Edgar Temkin
        </Typography>
        <Typography
          variant="h5"
          sx={{ opacity: 0.8, maxWidth: "600px", mx: "auto" }}
        >
          Junior Game Dev Project Lead | Passionate about Game Development &
          Tech
        </Typography>
      </Container>
    </Box>
  );
}

export default Hero;
