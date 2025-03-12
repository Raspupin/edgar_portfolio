import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Link as LinkMUI,
  IconButton,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link, useLocation } from "react-router-dom";

function Navbar({ data }) {
  const location = useLocation();
  const isProjectsActive = location.pathname.startsWith("/projects");
  const isAboutActive = location.pathname === "/about";
  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.main", zIndex: 1100 }}>
      <Toolbar>
        <IconButton
          component={LinkMUI}
          href={data.linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: { xs: 1, md: 0 } }} // Adds space below LinkedIn icon on small screens
          aria-label="Visit my LinkedIn profile"
        >
          <LinkedInIcon
            sx={{
              color: "background.paper",
              fontSize: 32,
              "&:hover": { transform: "scale(1.15)" },
            }}
          />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Edgar Temkin
        </Typography>
        <Box sx={{ gap: 3 }}>
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            sx={{
              fontWeight: isProjectsActive ? "bold" : "normal",
              borderBottom: isProjectsActive ? "2px solid" : "none",
              backgroundColor: isProjectsActive
                ? "background.paper"
                : "primary.main",
              color: isProjectsActive ? "primary.main" : "background.paper",
              transition: "transform 0.2s ease, background-color 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
              border: "1px solid",
              mr: 2,
              textTransform: "none",
              fontSize: "1.005rem",
            }}
          >
            Projects
          </Button>
          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              fontWeight: isAboutActive ? "bold" : "normal",
              borderBottom: isAboutActive ? "2px solid" : "none",
              backgroundColor: isAboutActive
                ? "background.paper"
                : "primary.main",
              color: isAboutActive ? "primary.main" : "background.paper",
              transition: "transform 0.2s ease, background-color 0.3s ease",
              "&:hover": {
                transform: "scale(1.1)",
              },
              border: "1px solid",
              textTransform: "none",
              fontSize: "1.005rem",
            }}
          >
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
