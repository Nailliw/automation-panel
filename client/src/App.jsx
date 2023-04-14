import { Navigate, Routes, Route } from "react-router-dom";
import "./App.css";
import { Box } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import DashboardPage from "./pages/DashboardPage";
import ValidacaoPage from "./pages/ValidacaoPage/ValidacaoPage";
import CorrecaoPage from "./pages/CorrecaoPage/CorrecaoPage";
import ListCorrecaoPage from "./pages/CorrecaoPage/ListCorrecaoPage";
import FAQPage from "./pages/FAQPage";
import AboutPage from "./pages/AboutPage";
import ApiPage from "./pages/ApiPage";

function App() {
  return (
    <Box>
      <Routes>
        <Route path="/login" element={<MainLayout />}></Route>
        <Route path="/" element={<MainLayout />}>
          {<Route path="/dashboard" element={<DashboardPage />} />}
          {<Route path="/lista_correcao" element={<ListCorrecaoPage />} />}
          {<Route path="/lista_correcao/:system" element={<CorrecaoPage />} />}
          {<Route path="/solicitacoes" element={<div>Solicitações</div>} />}
          {<Route path="/validacao" element={<ValidacaoPage />} />}
          {<Route path="/faq" element={<FAQPage />} />}
          {<Route path="/sobre" element={<AboutPage />} />}
          {<Route path="/api" element={<ApiPage />} />}
          {/* {<Route path="/reciclagem" element={<CorrecaoPage />} />} */}
          {/* {<Route path="/correcao_atm" element={<CorrecaoPage />} />} */}
        </Route>
      </Routes>
    </Box>
  );
}

export default App;
