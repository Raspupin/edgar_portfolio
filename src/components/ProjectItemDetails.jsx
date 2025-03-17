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
  const { name } = useParams(); // Get project Name from URL
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
        {/* Left Side: Video */}
        {project.video && (
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <iframe
              width="100%" // Ensures responsiveness
              height="auto"
              style={{
                aspectRatio: "9 / 16", // Maintains Shorts aspect ratio
                maxWidth: "280px", // Limits max width on mobile
                borderRadius: "8px", // Adds subtle rounded corners
              }}
              src={project.video}
              title={project.name}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        )}

        {/* Middle: Project Details */}
        <Box sx={{ flex: 1, textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{
              color: "background.paper",
              fontWeight: "bold",
              mb: 2,
              textAlign: "center",
            }}
          >
            {project.name}
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "background.paper", mt: 2, textAlign: "center" }}
          >
            {project.description}
          </Typography>

          {/* Container for Project specs */}
          <Box sx={{ flex: 1, textAlign: "center", mt: 5, mb: 1 }}>
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
            {/* Appstore Icon */}
            <Box
              sx={{
                textAlign: "center",
                justifyContent: "center",
                mt: 2,
              }}
            >
              <IconButton
                component={Link}
                href={project.storeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit my App Store page"
                sx={{
                  mt: { xs: 1, md: 0 },
                  color: "primary.main",
                  backgroundColor: "background.paper",
                  borderRadius: "3px",
                  "&:hover": {
                    transform: "scale(1.01)",
                    backgroundColor: "background.paper",
                  },
                }} // Adds space below LinkedIn icon on small screens
              >
                <GetAppIcon sx={{ color: "primary.main", fontSize: "20px" }} />
                <Typography variant="body1" sx={{ color: "primary.main" }}>
                  App Store Page
                </Typography>
              </IconButton>
            </Box>
          </Box>

          {/* Back Button */}

          <Button
            variant="contained"
            sx={{
              mt: 3,
              border: "1px solid",
              textTransform: "none",
              fontSize: "1.005rem",
              width: "80%",
              "&:hover": {
                transform: "scale(1.01)",
              },
            }}
            onClick={() => navigate("/")}
          >
            Back to Projects
          </Button>
        </Box>

        {/* Right Side: Image */}
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
      </Box>
    </Container>
  );
}

export default ProjectItemDetails;
