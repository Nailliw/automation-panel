import DashboardPage from "../pages/DashboardPage";
import HomePage from "./../pages/HomePage";

const appRoutes = [
  {
    index: true,
    path: "/dashboard",
    state: "home",
    name: "Dashboard",
  },
  {
    path: "/validacao",
    state: "validacao",
    name: "Processos de Validação",
  },
  {
    path: "/correcao",
    state: "correcao",
    name: "Processos de Correção",
    child: [
      {
        path: "/correcao_sinep",
        state: "correcao_sinep",
        name: "SINEP",
      },
      {
        path: "/correcao_atm",
        state: "correcao_atm",
        name: "ATM",
      },
    ],
  },
];

export default appRoutes;
