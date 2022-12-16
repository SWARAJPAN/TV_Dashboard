import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import BuisnessInfo from "./BuisnessInfo";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMoreIcon
              sx={{
                color: "white",
              }}
            />
          }
          aria-controls='panel1bh-content'
          id='panel1bh-header'
          sx={{
            bgcolor: "#6633F2",
            borderRadius: "5px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              width: "100%",
              flexShrink: 0,
              fontWeight: "700",
              fontSize: "18px",
              lineHeight: "22px",
            }}
          >
            General settings
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BuisnessInfo />
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2bh-content'
          id='panel2bh-header'
        >
          <Typography sx={{ width: "100%", flexShrink: 0 }}>Users</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Donec placerat, lectus sed mattis semper, neque lectus feugiat
            lectus, varius pulvinar diam eros in elit. Pellentesque convallis
            laoreet laoreet.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
