import { Box, FormControl } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

function CorrecaoPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <Box>
      <Box>
        <FormControl></FormControl>
      </Box>
      <Box>ALLAS</Box>
    </Box>
  );
}

export default CorrecaoPage;
