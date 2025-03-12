import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Container,
  CardMedia,
  Button,
  Link,
  IconButton,
} from "@mui/material";
import GetAppIcon from "@mui/icons-material/GetApp";
import projectsData from "../data/projectData.json";

function ProjectItemDetails() {
  const { name } = useParams(); // Get project ID from URL
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.name === name); // Find project by Name

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
    <Container sx={{ mt: 4, mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack on mobile, row on larger screens
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
        <Box
          sx={{
            flex: 1, // Image takes equal space
            display: "flex",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            image={project.image}
            alt={project.name}
            sx={{
              width: { xs: "100%", md: 350 },
              height: "auto",
              objectFit: "cover",
              borderRadius: 2,
              boxShadow: 2,
            }}
          />
        </Box>

        {/* Middle: Project Details */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ color: "background.paper", fontWeight: "bold", mb: 2 }}
          >
            {project.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "background.paper", mt: 2 }}>
            {project.description}
          </Typography>

          {/* Container for Project specs */}
          <Container sx={{ flex: 1, textAlign: "left", mt: 5, mb: 1 }}>
            <Typography
              variant="body1"
              sx={{ color: "background.paper", mt: 2 }}
            >
              Genre: {project.genre}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "background.paper", mt: 2 }}
            >
              Publisher: {project.publisher}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "background.paper", mt: 2 }}
            >
              Release Date: {project.releaseDate}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "background.paper", mt: 2 }}
            >
              Platform: {project.platform}
            </Typography>
            {/* LinkedIn Icon */}
            <IconButton
              component={Link}
              href={project.storeLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my App Store page"
              sx={{ mt: { xs: 1, md: 0 } }} // Adds space below LinkedIn icon on small screens
            >
              <GetAppIcon sx={{ color: "background.paper", fontSize: 32 }} />
              <Typography variant="body1" sx={{ color: "background.paper" }}>
                App Store Page
              </Typography>
            </IconButton>
          </Container>

          {/* Back Button */}
          <Button
            variant="contained"
            sx={{ mt: 3 }}
            onClick={() => navigate("/")}
          >
            Back to Projects
          </Button>
        </Box>

        {/* Right Side: Embedded YouTube Short */}
        {project.video && (
          <Box
            sx={{
              flex: 1, // Video takes equal space
              display: "flex",
              justifyContent: "center",
            }}
          >
            <iframe
              width="315" // Adjusted for Shorts format
              height="560"
              src={project.video}
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default ProjectItemDetails;
