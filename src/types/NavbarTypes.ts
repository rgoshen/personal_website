export type NavLink = {
  label: string;
  href: string;
  isScroll?: boolean;
};

export type SocialLink = {
  icon: string;
  href: string;
  label: string;
};

export interface NavbarProps {
  logoSrc: string;
  links: NavLink[];
  socialLinks?: SocialLink[];
}
