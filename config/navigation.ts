export type NavItem = {
  title: string;
  href: string;
};

export const publicNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Journey", href: "/journey" },
  { title: "Contact", href: "/contact" },
];

export const footerLinks: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  { title: "Journey", href: "/journey" },
  { title: "Contact", href: "/contact" },
];

export const dashboardNav: NavItem[] = [
  { title: "Dashboard", href: "/dashboard" },
  { title: "Contact Queries", href: "/dashboard/messages" },
];
