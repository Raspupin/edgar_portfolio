import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#31363F", // Lighter Dark Grey
    },
    secondary: {
      main: "#76ABAE", // Dark Grey
    },
    background: {
      default: "#EEEEEE", // White Cream
      paper: "#37474F", // Slightly lighter background for cards
    },
    text: {
      primary: "#222831", // Dark Grey
      secondary: "#31363F", // Lighter Dark Grey
    },
  },
});

export default theme;
