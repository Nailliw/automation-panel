import * as React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { useGetFunctionalitiesListQuery } from "../../helpers/api";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import RequestFormComponent from "../../components/RequestForm/RequestFormComponent";


function CorrecaoPage() {
  const { data, error, isLoading } = useGetFunctionalitiesListQuery();
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  React.useEffect(() => {
    console.log("executa o useEffect ao renderizar o componente");
  }, [value]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "75%"
        }}
      >
        <RequestFormComponent />
      </Box>
    </>
  );
}

export default CorrecaoPage;
