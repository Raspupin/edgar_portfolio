import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import ProjectItem from "./ProjectItem";
import projectsData from "../data/projectData.json";

// Example projects (you can add more later)
function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        py: 2,
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
          left: 10,
        },
        "&::after": {
          right: 10,
          background:
            "linear-gradient(to left, rgba(129, 129, 129, 0.1), transparent)",
        },
      }}
    >
      <Container sx={{ py: 6 }}>
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            mb: 4,
            fontWeight: "bold",
            color: "text.primary",
          }}
        >
          Projects
        </Typography>

        {/* Responsive Flexbox Layout */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5, // Spacing between items
          }}
        >
          {projects.map((project) => (
            <Box
              key={project.id}
              sx={{ width: { xs: "100%", sm: "48%", md: "30%" } }}
            >
              <ProjectItem image={project.image} name={project.name} />
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Projects;
