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
        path: "/reciclagem",
        state: "reciclagem",
        name: "Reciclagem",
      },
    ],
  },
];

export default appRoutes;
