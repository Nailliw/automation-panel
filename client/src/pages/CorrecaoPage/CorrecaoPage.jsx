import * as React from "react";
import Box from "@mui/material/Box";
import FilledInput from "@mui/material/FilledInput";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useForm } from "react-hook-form";
import { Button, MenuItem, Select } from "@mui/material";

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
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <FormControl variant="standard">
        <Select style={{ margin: "10px" }}>
          <MenuItem>SINEP</MenuItem>
          <MenuItem>ATM</MenuItem>
        </Select>
        <FormHelperText>Selecione o sistema</FormHelperText>
        <Button variant="contained" type="submit">
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
}

export default CorrecaoPage;
