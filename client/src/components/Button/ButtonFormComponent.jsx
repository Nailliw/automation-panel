import { Button, Typography } from "@mui/material";
import React from "react";

function ButtonFormComponent({ type, text, color, onClick }) {
  return (
    <Button
      color={color}
      variant="contained"
      type={type}
      onClick={onClick}
      style={{ margin: "0 5px" }}
    >
      {text}
    </Button>
  );
}

export default ButtonFormComponent;
