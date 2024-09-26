interface MenuHeader{
  label: string;
  path: string;
  icon: string;
  props?: any
}

export const menuHeader: MenuHeader[] = [
  {
    label: "Eventos",
    path: "/tabs/events",
    icon: "calendar-outline"
  },
  {
    label: "Feed",
    path: "/tabs/feed",
    icon: "home-outline"
  },
  {
    label: "Meus ingressos",
    path: "/tabs/tickets",
    icon: "ticket-outline"
  },
  {
    label: "Conversas",
    path: "/chat",
    icon: "chatbubbles-outline"
  },
  {
    label: "Preferências",
    path: "/preferences",
    icon: "settings-outline"
  },
  {
    label: "Sair da conta",
    path: "/",
    props: "(click)='exit()'",
    icon: "exit-outline"
  },
]