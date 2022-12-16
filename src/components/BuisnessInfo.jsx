import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import CloseIcon from "@mui/icons-material/Close";

export default function BuisnessInfo() {
  var arr = [];

  const [labelInput, setLabelInput] = React.useState([]);
  const [showChip, setShowChip] = React.useState("");
  const [showChipArr, setShowChipArr] = React.useState([]);

  const handleChanges = (e) => {
    //    localStorage.setItem("name", e.target.value);
    setLabelInput(e.target.value);
    console.log(e.target.value);

    getData(e.target.value);
  };

  const handleAdd = (e) => {
    if (e.key === "Enter") {
      getData(labelInput);
      setShowChip(labelInput);
    }
  };
  const getData = (data) => {
    arr.push(data);
    console.log(arr, "arrey");

    setShowChipArr([...arr]);

    console.log(data, "show");
  };
  console.log(arr, "arr");
  const handleDelete = () => {
    setShowChip("");
  };
  console.log(showChipArr, "showChipArr");

  console.log(labelInput, "arr");

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
              mr: "1rem",
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

      <TextField
        sx={{
          height: "100%",
          width: "60%",
          //   display: "flex",
          alignItems: "center",
          mt: "1rem",
          //   justifyContent: "center",
        }}
        size='small'
        fullWidth
        id='outlined-basic'
        variant='outlined'
      />

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
        Description:
      </Typography>

      <TextField
        sx={{
          height: "100%",
          width: "100%",
          //   display: "flex",
          alignItems: "center",
          mt: "1rem",
          //   justifyContent: "center",
        }}
        size='small'
        fullWidth
        multiline
        maxRows={6}
        id='outlined-basic'
        variant='outlined'
      />

      <Box
        sx={{ display: "flex", justifyContent: "space-between", mt: "2rem" }}
      >
        <TextField
          sx={{
            height: "100%",
            width: "100%",
            //   display: "flex",
            alignItems: "center",
            mt: "1rem",
            //   justifyContent: "center",
            marginInline: "1rem",
            ml: "0",
          }}
          size='small'
          fullWidth
          id='outlined-basic'
          variant='outlined'
          placeholder='Department'
        />
        <TextField
          sx={{
            height: "100%",
            width: "100%",
            //   display: "flex",
            alignItems: "center",
            mt: "1rem",
            marginInline: "1rem",
            //   justifyContent: "center",
          }}
          size='small'
          fullWidth
          id='outlined-basic'
          variant='outlined'
          placeholder='Source Platform'
        />
        <TextField
          sx={{
            height: "100%",
            width: "100%",
            //   display: "flex",
            alignItems: "center",
            mt: "1rem",
            marginInline: "1rem",
            //   justifyContent: "center",
          }}
          size='small'
          fullWidth
          id='outlined-basic'
          variant='outlined'
          placeholder='Add a link'
        />
      </Box>
      <TextField
        sx={{
          height: "100%",
          width: "30%",
          //   display: "flex",
          alignItems: "center",
          mt: "1rem",
          mr: "2rem",
          //   justifyContent: "center",
        }}
        size='small'
        fullWidth
        id='outlined-basic'
        variant='outlined'
      />
    </Box>
  );
}
