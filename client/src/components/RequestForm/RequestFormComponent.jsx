import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const sistema = [
  {
    id: "1",
    name: "SINEP",
    caracteristicas: [
      {
        camadas: [
          {
            id: "1",
            name: "JBOSS",
            version: "1.2.4",
            actions: [
              { name: "stop", id: 1 },
              { name: "start", id: 2 },
              { name: "pause", id: 3 },
              { name: "reload", id: 4 },
            ],
          },
          {
            id: "2",
            name: "NGINX",
            version: "1",
            actions: [
              { name: "stop", id: 1 },
              { name: "start", id: 2 },
              { name: "pause", id: 3 },
              { name: "reload", id: 4 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "SINOC",
  },
];

function RequestFormComponent() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [systemForm, setSystemForm] = useState();

  const setForm = (data) => {
    var teste = sistema
      .filter((x) => x.id === data.example)
      .map((x) => console.log(x.caracteristicas));
    setSystemForm(teste);
  };

  const onSubmit = (data) => console.log("");

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <TextField
          id="filled-select-system"
          select
          label="Select System"
          helperText="Selecione o sistema"
          defaultValue="1"
          variant="filled"
          {...register("example", { required: true })}
          onClick={handleSubmit(setForm)}
        >
          {sistema.map((option, index) => (
            <MenuItem key={index} value={option.id}>
              {option.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="filled-select-system"
          select
          label="Select System"
          helperText="Selecione o sistema"
          defaultValue="1"
          variant="filled"
          {...register("example", { required: true })}
          onClick={handleSubmit(setForm)}
        >
          {sistema
            .filter((x) => x.id === "1")
            .map((x, index) => {
              console.log(
                x.caracteristicas.map((x, index) =>
                  x.camadas.map((x, index) => (
                    <MenuItem key={index} value={x.id}>
                      {x.name}
                    </MenuItem>
                  ))
                )
              );
            })}

          {sistema
            .filter((x) => x.id === "1")
            .map((x) =>
              x.caracteristicas.map((x, index) =>
                x.camadas.map((x, index) => <>{x.name}</>)
              )
            )}
        </TextField>

        <OutlinedInput
          id="outlined-adornment-weight"
          endAdornment={<InputAdornment position="end">kg</InputAdornment>}
          aria-describedby="outlined-weight-helper-text"
          inputProps={{
            "aria-label": "weight",
          }}
        />
        <Button variant="outlined" type="submit">
          Enviar
        </Button>
      </FormControl>
    </Box>
  );
}

export default RequestFormComponent;
