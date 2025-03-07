import React from "react";
import { Box, Typography, Container, CardMedia } from "@mui/material";
import ContactMe from "./ContactMe";
function About({ data }) {
  return (
    <Container sx={{ mt: 4, display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 1000,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // Responsive layout
            alignItems: "center",
            gap: 3,
            maxWidth: "100%",
            p: 3,
            bgcolor: "text.primary", // Uses theme background
            borderRadius: 3,
            boxShadow: 8, // Consistent shadow style
            border: "5px solid",
            borderColor: "background.paper", // Uses primary color from theme
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              top: 0,
              bottom: 0,
              width: "50px",
              background:
                "linear-gradient(to right, rgba(129, 129, 129, 0.1), transparent)",
              zIndex: -1,
            },
            "&::before": {
              left: 25,
            },
            "&::after": {
              right: 25,
              background:
                "linear-gradient(to left, rgba(129, 129, 129, 0.1), transparent)",
            },
          }}
        >
          {/* Left Side: Image */}
          <CardMedia
            component="img"
            image={data.imageURL}
            alt="Profile"
            sx={{
              width: { xs: "100%", md: 300 },
              height: { xs: "auto", md: 300 },
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 2, // Slight shadow for depth
            }}
          />

          {/* Right Side: Description */}
          <Typography
            variant="body1"
            sx={{
              color: "background.paper", // Theme text color
              textAlign: "justify",
              fontFamily: "Inter, sans-serif", // Uses your chosen font
              lineHeight: 1.6, // Improves readability
            }}
          >
            {data.description}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "80%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ContactMe data={data} />
        </Box>
      </Box>
    </Container>
  );
}

export default About;
