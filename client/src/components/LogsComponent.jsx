import React from "react";
import {
  useGetRecentLogsQuery,
  useGetValidacaoLogsQuery,
} from "../helpers/api";
import ErrorComponent from "./ErrorComponent";
import LoadingComponent from "./LoadingComponent";

function LogsComponent({ processo }) {
  const { data, error, isLoading } =
    processo != "validacao"
      ? useGetRecentLogsQuery()
      : useGetValidacaoLogsQuery();
  // console.log(data);

  return (
    <div
      style={{
        backgroundColor: "black",
        minHeight: "70vh",
        maxHeight: "60vh",
        overflow: "auto",
      }}
    >
      {error ? (
        <div>
          <ErrorComponent />
        </div>
      ) : isLoading ? (
        <LoadingComponent />
      ) : data ? (
        <div>
          {data.data.map((item) => (
            <div style={{ color: item.error == "error" ? "red" : "green" }}>
              <br />
              Logs -{item.error}- {item.message}
            </div>
          ))}{" "}
        </div>
      ) : null}
    </div>
  );
}

export default LogsComponent;
