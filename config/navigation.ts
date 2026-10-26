export type NavItem = {
  title: string;
  href: string;
};

export const publicNav: NavItem[] = [
  { title: "Work", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { title: "Work", href: "/projects" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export const dashboardNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Contact Queries", href: "/dashboard/messages" },
];