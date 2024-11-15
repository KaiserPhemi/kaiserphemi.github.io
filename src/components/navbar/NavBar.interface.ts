export interface NavLink {
  href: string;
  label: string;
}
export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}