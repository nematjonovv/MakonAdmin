import { AdminNavItem } from "@/types/menu.type";

export const Menu: AdminNavItem[] = [
  {
    key: "overview",
    label: "Umumiy ko‘rinish",
    href: "/dashboard/overview",
    icon: "",
  },
  {
    key: "services",
    label: "Xizmatlar",
    href: "/dashboard/services",
    icon: "",
  },
  {
    key: "projects",
    label: "Loyihalar",
    href: "/dashboard/projects",
    icon: "",
  },
  {
    key: "team",
    label: "Jamoa",
    href: "/dashboard/team",
    icon: "",
  },
  {
    key: "testimonial",
    label: "Mijozlar fikrlari",
    href: "/dashboard/testimonial",
    icon: "",
  },
  {
    key: "contact",
    label: "Aloqa ma’lumotlari",
    href: "/dashboard/contact",
    icon: "",
  },
  {
    key: "request",
    label: "Murojatlar",
    href: "/dashboard/requests",
    icon: "",
  },
  {
    key: "admins",
    label: "Adminlar",
    href: "/dashboard/admins",
    icon: "",
  },
] as const;
