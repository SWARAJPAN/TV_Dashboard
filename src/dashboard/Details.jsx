import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import Tabs from "../components/Tabs";

export default function Details() {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "87%",

        left: "203px",
        top: "200px",
        padding: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        borderRadius: "10px",
        boxShadow: " 0px 0px 6px rgba(0, 0, 0, 0.25)",
        height: "90%",
      }}
    >
      <Tabs />
    </Box>
  );
}
