import DashboardIcon from "@mui/icons-material/Dashboard";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import InfoIcon from "@mui/icons-material/Info";
import HelpIcon from "@mui/icons-material/Help";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import HandymanIcon from "@mui/icons-material/Handyman";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ViewListIcon from "@mui/icons-material/ViewList";

const appRoutes = [
  {
    index: true,
    path: "/dashboard",
    state: "home",
    name: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    path: "/validacao",
    state: "validacao",
    name: "Processos de Validação",
    icon: <PublishedWithChangesIcon />,
  },
  {
    path: "/lista_correcao",
    state: "correcao",
    name: "Processos de Correção",
    icon: <HandymanIcon />,
    child: [
      {
        path: "/lista_correcao",
        name: "Nova Solicitação",
        icon: <AddCircleIcon />,
      },
      {
        path: "/solicitacoes",
        name: "Solicitações",
        icon: <ViewListIcon />,
      },
    ],
  },
  {
    path: "/faq",
    state: "faq",
    name: "Perguntas Frequentes",
    icon: <HelpIcon />,
  },
  {
    path: "/sobre",
    state: "sobre",
    name: "Sobre",
    icon: <InfoIcon />,
  },
  {
    path: "/api",
    state: "api",
    name: "API",
    icon: <ApiOutlinedIcon />,
  },
];

export default appRoutes;
