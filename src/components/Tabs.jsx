import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import AccordianTab from "./AccordianTab";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Box sx={{ bgcolor: "#DEF0F2", height: "75px", margin: "0px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
          sx={{
            // height: "6.3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingX: "1rem",
          }}
        >
          <Tab
            sx={{
              fontWeight: "bold",
              height: "4.7rem",
              fontSize: "0.8rem",
            }}
            label='DETAILS'
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontWeight: "bold",
              height: "4.7rem",
              fontSize: "0.8rem",
            }}
            label='FIELDS'
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontWeight: "bold",
              height: "4.7rem",
              fontSize: "0.8rem",
            }}
            label='WORKFLOW'
            {...a11yProps(2)}
          />
          <Tab
            sx={{
              fontWeight: "bold",
              height: "4.7rem",
              fontSize: "0.8rem",
            }}
            label='DATA PREVIEW'
            {...a11yProps(3)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AccordianTab />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Box>
  );
}
