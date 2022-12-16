import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import TVIcon from "../assets/TVIcon.svg";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Avatar } from "@mui/material";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: "#FFFFFF",
          height: "88px",
          paddingRight: "20px",
        }}
      >
        <Toolbar>
          <Box sx={{ padding: "20px", marginRight: "30px" }}>
            <img src={TVIcon} alt='TV Icon' />
          </Box>

          <Box>
            <FormControl
              size='small'
              sx={{
                position: "absolute",
                width: "289px",
                height: "42px",
                left: "170px",
                top: "22px",
              }}
            >
              <InputLabel id='demo-simple-select-label'>Select</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                // value={age}
                label='Select'
                sx={{
                  borderRadius: "10px",
                  borderColor: "secondary.main",
                }}
                // onChange={handleChange}
              >
                <MenuItem value={10}>Draft</MenuItem>
                <MenuItem value={20}>Option2</MenuItem>
                <MenuItem value={30}>Option3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Avatar
            sx={{
              ml: "auto",
              bgcolor: "secondary.main",
              width: "51px",
              height: "51px",
              cursor: "pointer",
            }}
          >
            BD
          </Avatar>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
