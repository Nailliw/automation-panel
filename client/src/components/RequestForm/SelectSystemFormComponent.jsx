import { FormControl, MenuItem, TextField } from "@mui/material";
import React from "react";

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

function SelectSystemFormComponent({ register }) {
  const toggleRegisterClick = (data) => {
    console.log(data);
    register("example", { required: true });
  };
  return (
    // <TextField
    //   id="filled-select-system"
    //   select
    //   label="Select System"
    //   helperText="Selecione o sistema"
    //   defaultValue="1"
    //   variant="filled"
    //   {...register("example", { required: true })}
    // >
    //   {sistema.map((option, index) => (
    //     <MenuItem key={index} value={option.id}>
    //       {option.name}
    //     </MenuItem>
    //   ))}
    // </TextField>
    <div>
      <li
        onClick={() => {
          toggleRegisterClick(0);
        }}
      >
        one
      </li>
    </div>
  );
}

export default SelectSystemFormComponent;
