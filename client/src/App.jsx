import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import Home from "./pages/HomePage";
import ResponsiveAppBar from "./components/NavBarComponent";
import SideBarMenu from "./components/SideBarMenu/SideBarMenu";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ValidacaoPage from "./pages/ValidacaoPage/ValidacaoPage";
import CorrecaoPage from "./pages/CorrecaoPage/CorrecaoPage";

const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = localStorage.getItem("token") !== null;
  console.log("isAuth", isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<MainLayout />}></Route>
        <Route path="/" element={<MainLayout />}>
          {<Route path="/dashboard" element={<DashboardPage />} />}
          {<Route path="/correcao" element={<div>correcao</div>} />}
          {<Route path="/validacao" element={<ValidacaoPage />} />}
          {<Route path="/reciclagem" element={<CorrecaoPage />} />}
          {/* {<Route path="/correcao_atm" element={<CorrecaoPage />} />} */}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
