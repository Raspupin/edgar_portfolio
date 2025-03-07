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
import { Link } from "react-router-dom";

function Navbar({ data }) {
  return (
    <AppBar position="static" sx={{ bgcolor: "primary.main" }}>
      <Toolbar>
        <IconButton
          component={LinkMUI}
          href={data.linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ mt: { xs: 1, md: 0 } }} // Adds space below LinkedIn icon on small screens
          aria-label="Visit my LinkedIn profile"
        >
          <LinkedInIcon sx={{ color: "background.paper", fontSize: 32 }} />
        </IconButton>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Edgar Temkin
        </Typography>
        <Box>
          <Button component={Link} to="/" color="inherit">
            Projects
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
