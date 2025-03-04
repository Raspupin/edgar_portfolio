import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#37474F", // Blue Gray
    },
    secondary: {
      main: "#00BCD4", // Cyan
    },
    background: {
      default: "#263238", // Dark Gray
      paper: "#37474F", // Slightly lighter background for cards
    },
    text: {
      primary: "#FFFFFF", // White
      secondary: "#B0BEC5", // Light Gray for subtitles
    },
  },
});

export default theme;
