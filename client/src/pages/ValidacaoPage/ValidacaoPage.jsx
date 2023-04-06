import React from "react";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useGetFunctionalitiesListQuery } from "../../helpers/api";
import SystemTable from "./../../components/SystemTables/SystemTable";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import LogsComponent from "../../components/LogsComponent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function ValidacaoPage() {
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

  return (
    <>
      <Box
        sx={{
          width: "100%",
          minHeight: "75%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Processo" {...a11yProps(0)} />
            <Tab label="Logs" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          {error ? (
            <div>
              <ErrorComponent />
            </div>
          ) : isLoading ? (
            <LoadingComponent />
          ) : data ? (
            <SystemTable items={data} />
          ) : null}
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LogsComponent processo={"validacao"} />
        </TabPanel>
      </Box>
    </>
  );
}

export default ValidacaoPage;
