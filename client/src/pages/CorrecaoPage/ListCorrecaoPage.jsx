import { Box, List } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import BuildIcon from "@mui/icons-material/Build";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import sizeConfigs from "../../configs/sizeConfigs";
import colorConfigs from "../../configs/colorConfigs";

const list_systems = [
  {
    name: "SINEP",
    link: "sinep",
  },
  {
    name: "SIOP",
    link: "sinep",
  },
  {
    name: "SISTVG",
    link: "sinep",
  },
];

function ListCorrecaoPage() {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: colorConfigs.sidebar.bg,
        minHeight: "90vh",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: colorConfigs.sidebar.activeBg,
          minHeight: "1vh",
          marginBottom: "1vh",
        }}
      >
        INFO
      </Box>
      <div>
        <span>FILTROS - GRUPOS</span>
        <blockquote>
          Tipos de filtro: localização, nome, redes/automação/infra/devops/cloud
        </blockquote>
        <blockquote>Paginação</blockquote>
      </div>
      <List sx={{ display: "flex", flexWrap: "wrap" }}>
        {list_systems.map((system, index) => {
          return (
            <Box
              component="div"
              sx={{
                height: sizeConfigs.system_list_box.width,
                width: sizeConfigs.system_list_box.width,
                borderRadius: sizeConfigs.system_list_box.border_radius,
                margin: sizeConfigs.system_list_box.margin,
                border: "1px solid #20B2AA",
                backgroundColor: "#87CEFA",
              }}
              textAlign="center"
              key={index}
              display="flex"
              flexWrap="wrap"
              alignContent="center"
              alignItems="center"
            >
              <Link
                to={system.link}
                key={index}
                style={{
                  height: "100%",
                  width: "100%",
                  textDecoration: "none",
                }}
              >
                <SettingsOutlinedIcon
                  sx={{
                    fontSize: sizeConfigs.system_list_icon.width,
                    width: "100%",
                    marginTop: "10px",
                    color: "black",
                  }}
                />
                <div
                  style={{
                    textAlign: "center",
                    width: "100%",
                    color: "black",
                  }}
                >
                  {system.name}
                </div>
              </Link>
            </Box>
          );
        })}
      </List>
    </Box>
  );
}

export default ListCorrecaoPage;
