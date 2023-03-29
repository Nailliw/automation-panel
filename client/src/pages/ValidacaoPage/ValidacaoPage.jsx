import React from "react";
import { Box } from "@mui/material";
import { useGetProcessListQuery } from "../../helpers/api";
import SystemTable from "./../../components/SystemTables/SystemTable";

function ValidacaoPage() {
  const { data, error, isLoading } = useGetProcessListQuery();

  return (
    <>
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
          <SystemTable items={data} />
        ) : null}
      </Box>
    </>
  );
}

export default ValidacaoPage;
