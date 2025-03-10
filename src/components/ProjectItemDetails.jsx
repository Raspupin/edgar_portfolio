import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Typography, Container, CardMedia, Button } from "@mui/material";
import projectsData from "../data/projectData.json";

function ProjectItemDetails() {
  const { name } = useParams(); // Get project ID from URL
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.name === name); // Find project by ID

  if (!project) {
    return (
      <Container sx={{ mt: 4, textAlign: "center" }}>
        <Typography sx={{ m: 2, p: 2 }} variant="h4">
          Project Not Found
        </Typography>
        <Button variant="contained" onClick={() => navigate("/")}>
          Back to Projects
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 3,
          p: 3,
          bgcolor: "primary.main",
          borderRadius: 3,
          boxShadow: 8,
          border: "5px solid",
          borderColor: "background.paper",
        }}
      >
        {/* Left Side: Image */}
        <CardMedia
          component="img"
          image={project.image}
          alt={project.name}
          sx={{
            width: { xs: "100%", md: 400 },
            height: "auto",
            objectFit: "cover",
            borderRadius: 2,
            boxShadow: 2,
          }}
        />

        {/* Right Side: Details */}
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "background.paper", fontWeight: "bold" }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "background.paper", mt: 2 }}>
            {project.description}
            {project.video && (
              <Box sx={{ mt: 3, width: "100%", textAlign: "center" }}>
                <iframe
                  width="560"
                  height="315"
                  src={project.video}
                  title="Project Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            )}
          </Typography>

          {/* Back Button */}
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => navigate("/")}
          >
            Back to Projects
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default ProjectItemDetails;
