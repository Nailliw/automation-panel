import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import "./sidebar.css";
import appRoutes from "./../../routes/appRoutes";
import colorConfigs from "../../configs/colorConfigs";
import { Divider, ListItemIcon } from "@mui/material";

const SidebarItem = () => {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List
      sx={{ width: "100%" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      {appRoutes.map((route, index) =>
        !route.child ? (
          <Link
            to={route.path}
            style={{
              textDecoration: "none",
              fontSize: "5px",
            }}
            className="menu-bars"
            key={index}
          >
            <ListItemButton
              sx={{ padding: "1px", marginLeft: "1vw" }}
              key={index}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText
                sx={{
                  color: colorConfigs.sidebar.color,
                  marginLeft: "-1.5vw",
                }}
                primary={route.name}
                key={index}
              />
            </ListItemButton>
            <Divider />
          </Link>
        ) : (
          <>
            <ListItemButton
              onClick={handleClick}
              sx={{ padding: "1px", marginLeft: "1vw" }}
            >
              <ListItemIcon>{route.icon}</ListItemIcon>
              <ListItemText
                primary={route.name}
                sx={{
                  color: colorConfigs.sidebar.color,
                  marginLeft: "-1.5vw",
                }}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {console.log(route.child)}
              {route.child.map((child, index) => (
                <List component="div" disablePadding key={index}>
                  <Link
                    to={child.path}
                    key={index}
                    style={{
                      textDecoration: "none",
                      fontSize: "5px",
                    }}
                  >
                    <ListItemButton sx={{ pl: 4, height: "4vh" }} key={index}>
                      <ListItemIcon>{child.icon}</ListItemIcon>
                      <ListItemText
                        primary={child.name}
                        key={index}
                        sx={{
                          color: colorConfigs.sidebar.color,
                          marginLeft: "-1.5vw",
                        }}
                      />
                    </ListItemButton>
                  </Link>
                </List>
              ))}
            </Collapse>
          </>
        )
      )}
    </List>
  );
};

export default SidebarItem;
