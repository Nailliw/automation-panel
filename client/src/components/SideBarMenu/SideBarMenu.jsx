import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import sizeConfigs from "./../../configs/sizeConfigs";
import colorConfigs from "./../../configs/colorConfigs";
import SidebarItem from "./SidebarItem";

function SideBarMenu() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          backgroundColor: colorConfigs.sidebar.bg,
          color: colorConfigs.sidebar.color,
        },
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "20px" }}>
          <Stack sx={{ width: "100%" }} direction="row" justifyContent="center">
            <Avatar src="" />
          </Stack>
        </Toolbar>
        <SidebarItem />
      </List>
    </Drawer>
  );
}

export default SideBarMenu;
