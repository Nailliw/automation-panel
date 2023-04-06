import { Outlet, useLocation } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import ResponsiveAppBar from "./../components/NavBarComponent";
import SideBarMenu from "./../components/SideBarMenu/SideBarMenu";
import sizeConfigs from "./../configs/sizeConfigs";
import colorConfigs from "./../configs/colorConfigs";
import LoginPage from "../pages/LoginPage/LoginPage";

const MainLayout = () => {
  const location = useLocation();
  if (location.pathname == "/login") {
    return <LoginPage />;
  } else {
    return (
      <Box sx={{ display: "flex" }}>
        <ResponsiveAppBar />
        <Box
          component="nav"
          sx={{
            width: sizeConfigs.sidebar.width,
            flexShrink: 0,
          }}
        >
          <SideBarMenu />
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: `calc(100% - ${sizeConfigs.sidebar.width})`,
            minHeight: "100vh",
            backgroundColor: colorConfigs.mainBg,
          }}
        >
          <Toolbar />
          <Outlet />
        </Box>
      </Box>
    );
  }
};

export default MainLayout;
