import { NavLink, SocialLink } from './NavbarProps'; // Reuse types from NavbarProps
import { HeroButton } from './HeroProps';

export interface HeaderProps {
  logoSrc: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  heroBackgroundImage: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroButtons?: HeroButton[];
}
