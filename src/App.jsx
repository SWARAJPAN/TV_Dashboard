import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Catalog from "./dashboard/Catalog";
import NavBar from "./components/NavBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      // main: "#FFFFFF",
      main: "#140047",
    },
    secondary: {
      main: "#6633F2",
      dark: "#140047",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeight: 600,
    fontSize: "16px",
    lineHeight: "19.5px",
    // letterSpacing: "0.05em",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Catalog />
      </ThemeProvider>
    </>
  );
}

export default App;
