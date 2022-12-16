import * as React from "react";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CatalogIcon from "../assets/CatalogIcon.svg";
import Dashboard from "../assets/DashboardIcon.svg";
import Playground from "../assets/PlaygroundIcon.svg";
import Button from "@mui/material/Button";

const Tabs = [
  { label: "CATALOG", icon: <img src={CatalogIcon} alt='Catalog Icon' /> },
  { label: "PLAYGROUNG", icon: <img src={Playground} alt='Playground Icon' /> },
  { label: "DASHBOARD", icon: <img src={Dashboard} alt='Dashboard Icon' /> },
];

export default function VerticalTabs() {
  const [active, setActive] = React.useState(0);

  const handleTabChange = (label) => {
    setActive(label);
  };

  return (
    <Box
      sx={{
        width: "116px",
        height: "992px",
        // top: "88px",

        left: "0px",
        bgcolor: "secondary.dark",

        position: "absolute",
      }}
    >
      {Tabs.map((tab) => (
        <Button
          sx={{
            width: "116px",
            height: "99px",
            left: "0px",
            top: "139px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
          }}
          onClick={() => handleTabChange(tab.label)}
          className={active === tab.label ? "active" : ""}
        >
          <Box
            sx={{
              left: "10%",
              right: "10%",
              top: "0%",
              bottom: "0%",
            }}
          >
            {tab.icon}
          </Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              lineHeight: "15px",
              letterSpacing: "0em",
              textAlign: "left",
              color: "#FFFFFF",
            }}
          >
            {tab.label}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}
