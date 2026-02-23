export type TMenuRoute =
  | "/dashboard/overview"
  | "/dashboard/services"
  | "/dashboard/projects"
  | "/dashboard/team"
  | "/dashboard/testimonial"
  | "/dashboard/contact"
  | "/dashboard/admins"
  | "/dashboard/requests"
export type AdminNavItem = {
  key: string;
  label: string;
  href: TMenuRoute;
  icon?: React.ReactNode;
  children?: AdminNavItem[];
};
