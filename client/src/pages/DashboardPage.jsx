import React from "react";
import { useGetFunctionalitiesListQuery } from "../helpers/api";
import { Box } from "@mui/material";
import QuadroStatusComponent from "../components/QuadroStatus/QuadroStatusComponent";
import ErrorComponent from "../components/ErrorComponent";
import LoadingComponent from "../components/LoadingComponent";

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
        <div>
          <ErrorComponent />
        </div>
      ) : isLoading ? (
        <LoadingComponent />
      ) : data ? (
        <QuadroStatusComponent items={data} />
      ) : null}
    </Box>
  );
}

export default DashboardPage;
