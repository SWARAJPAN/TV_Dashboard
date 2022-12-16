import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

export default function BuisnessInfo() {
  var arr = [];

  const [labelInput, setLabelInput] = React.useState("");
  const [showChip, setShowChip] = React.useState("");

  const handleChanges = (e) => {
    //    localStorage.setItem("name", e.target.value);
    setLabelInput(e.target.value);
    getData(e.target.value);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      //   getData(labelInput);
      setShowChip(labelInput);
    }
  };
  const getData = (data) => {
    arr.push(data);
    console.log(data);
  };
  const handleDelete = () => {
    setShowChip("");
  };

  console.log(arr, "arr");

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Typography
        variant='h4'
        sx={{
          fontSize: "18px",
          //   fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0em",
          textAlign: "left",
          //   display: "flex",
          alignItems: "center",
          color: "grey",
          mt: "2rem",
        }}
      >
        Labels:
      </Typography>

      <Box
        sx={{
          //   width: "100%",
          height: "10vh",
          display: "flex",
          alignItems: "center",
          //   justifyContent: "center",
        }}
      >
        {showChip && (
          <Chip
            sx={{
              //   borderRadius: "10px",
              height: "50%",
              fontWeight: "500",
              background: "rgba(222, 240, 242, 0.5)",
              borderRadius: "5px",
              color: "#6633F2",
            }}
            label={showChip}
            onDelete={handleDelete}
            deleteIcon={
              <CloseIcon
                sx={{
                  color: "#000000",
                }}
              />
            }
          />
        )}

        <TextField
          sx={{
            // width: "50%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            left: "5%",
          }}
          size='small'
          id='outlined-basic'
          variant='outlined'
          value={labelInput}
          onChange={(e) => handleChanges(e)}
          onKeyDown={(e) => handleAdd(e)}
        />
      </Box>

      <Typography
        variant='h4'
        sx={{
          fontSize: "18px",
          //   fontWeight: "600",
          lineHeight: "22px",
          letterSpacing: "0em",
          textAlign: "left",
          //   display: "flex",
          alignItems: "center",
          color: "grey",
        }}
      >
        Title:
      </Typography>
    </Box>
  );
}
