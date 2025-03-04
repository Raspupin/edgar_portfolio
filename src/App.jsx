import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function App() {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          bgcolor: "background.default",
          color: "text.primary",
          height: "100vh",
        }}
      >
        <Typography variant="h4">Testing Material UI Theme</Typography>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary" sx={{ ml: 2 }}>
          Secondary Button
        </Button>
      </Box>
    </div>
  );
}

export default App;
