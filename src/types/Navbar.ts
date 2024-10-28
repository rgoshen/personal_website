import { SocialLink } from './SocialLink';

export type NavLink = {
  label: string;
  href: string;
  isScroll?: boolean;
};

export interface NavbarType {
  logoSrc: string;
  links: NavLink[];
  socialLinks?: SocialLink[];
}
