import * as React from "react";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import ErrorComponent from "../../components/ErrorComponent";
import LoadingComponent from "../../components/LoadingComponent";
import { useGetFunctionalitiesListQuery } from "../../helpers/api";
import SystemTableCorrecao from "../../components/SystemTables/SystemTableCorrecao";
import { Tab, Tabs, Typography } from "@mui/material";
import PropTypes from "prop-types";
import LogsComponent from "../../components/LogsComponent";
import RequestFormComponent from "../../components/RequestForm/RequestFormComponent";

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
          minHeight: "75%",
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Solicitação" {...a11yProps(0)} />

            <Tab label="Processo" {...a11yProps(1)} />
            <Tab label="Logs" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <RequestFormComponent />
        </TabPanel>
        <TabPanel value={value} index={1}>
          {error ? (
            <div>
              <ErrorComponent />
            </div>
          ) : isLoading ? (
            <LoadingComponent />
          ) : data ? (
            <SystemTableCorrecao items={data} />
          ) : null}
        </TabPanel>
        <TabPanel value={value} index={2}>
          <LogsComponent />
        </TabPanel>
      </Box>
    </>
  );
}

export default CorrecaoPage;
