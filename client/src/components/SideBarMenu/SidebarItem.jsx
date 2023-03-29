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
          <Link to={route.path} className="menu-bars">
            <ListItemButton>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </Link>
        ) : (
          <>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={route.name} />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              {console.log(route.child)}
              {route.child.map((child, index) => (
                <List component="div" disablePadding>
                  <Link to={child.path} className="menu-bars">
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemText primary={child.name} />
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
