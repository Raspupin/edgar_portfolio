import React from "react";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function ProjectItem({ image, name }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        bgcolor: "background.paper",
        boxShadow: 5,
        borderRadius: 1,
        borderBottomRightRadius: 40,
        borderBottomLeftRadius: 40,
        p: 2,
        borderColor: "primary.main",
        borderTop: 30,
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt={name}
        sx={{
          height: 200,
          objectFit: "cover",
          borderRadius: 2,
          borderBottom: 8,
          borderBottomColor: "primary.main",
        }}
      />
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", color: "text.primary" }}
        >
          {name}
        </Typography>
      </Box>
    </Card>
  );
}

export default ProjectItem;
