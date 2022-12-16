import React from "react";
import VerticalBar from "../components/VerticalBar";
import { Box, Typography } from "@mui/material";
import Details from "./Details";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export default function Catalog() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <VerticalBar />
      <Box
        sx={{
          position: "absolute",
          height: "22px",
          width: "47px",
          left: "203px",
          top: "132px",
          borderRadius: "nullpx",
        }}
      >
        <Typography
          variant='h4'
          sx={{
            fontSize: "18px",
            fontWeight: "600",
            lineHeight: "22px",
            letterSpacing: "0em",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ChevronLeftIcon sx={{ fontSize: 25, mr: "10px" }} />
          Back
        </Typography>
      </Box>

      <Details />
    </Box>
  );
}
