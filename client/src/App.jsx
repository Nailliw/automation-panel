import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/HomePage";
import ResponsiveAppBar from "./components/NavBarComponent";
import SideBarMenu from "./components/SideBarMenu/SideBarMenu";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ValidacaoPage from "./pages/ValidacaoPage/ValidacaoPage";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {<Route path="/dashboard" element={<DashboardPage />} />}
          {<Route path="/correcao" element={<div>correcao</div>} />}
          {<Route path="/validacao" element={<ValidacaoPage />} />}
          {<Route path="/correcao_sinep" element={<div>correcao_sinep</div>} />}
          {<Route path="/correcao_atm" element={<div>correcao_atm</div>} />}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
