import React from "react";
import {
  Box,
  Button,
  Fab,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  CircularProgress,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
import { green } from "@mui/material/colors";

const schema = yup
  .object({
    currency: yup.string(),
  })
  .required();

function ValidacaoPage() {
  const [sistema, setSistema] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);

  const handleChange = (event) => {
    setSistema(event.target.value);
  };

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);
  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel>Sistema</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={sistema}
            label="Sistema"
            onChange={handleChange}
            inputProps={register("sistema", {
              required: "Please enter currency",
            })}
          >
            <MenuItem value={"sinep"}>SINEP</MenuItem>
            <MenuItem value={"atm"}>ATM</MenuItem>
          </Select>
          <FormHelperText>Selecione o sistema</FormHelperText>
          {/* <Button variant="contained" type="submit">
            Enviar
          </Button> */}

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleButtonClick}
              >
                Enviar
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        </FormControl>
      </Box>
      <Box
        sx={{
          width: "100%",
          minHeight: "75%",
          backgroundColor: "primary.dark",
          //   "&:hover": {
          //     backgroundColor: "primary.main",
          //     opacity: [0.9, 0.8, 0.7],
          //   },
        }}
      >
        Content
      </Box>
    </>
  );
}

export default ValidacaoPage;
