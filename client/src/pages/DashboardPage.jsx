import React from "react";
import { useGetFunctionalitiesListQuery } from "../helpers/api";
import { Box } from "@mui/material";
import QuadroStatusComponent from "../components/QuadroStatus/QuadroStatusComponent";

function DashboardPage() {
  const { data, error, isLoading } = useGetFunctionalitiesListQuery();
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "75%",
      }}
    >
      {error ? (
        <div>ERRO</div>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <QuadroStatusComponent items={data} />
      ) : null}
    </Box>
  );
}

export default DashboardPage;
