import DashboardPage from "../pages/DashboardPage";
import HomePage from "./../pages/HomePage";

const appRoutes = [
  {
    index: true,
    path: "/",
    element: <HomePage />,
    state: "home",
    name: "Dashboard",
  },
  {
    path: "/validacao",
    element: <DashboardPage />,
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
        element: <DashboardPage />,
        state: "correcao_sinep",
        name: "SINEP",
      },
      {
        path: "/correcao_atm",
        element: <DashboardPage />,
        state: "correcao_atm",
        name: "ATM",
      },
    ],
  },
];

export default appRoutes;
