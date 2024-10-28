import { NavLink, SocialLink } from './Navbar'; // Reuse types from NavbarProps
import { HeroButton } from './Hero';

export interface HeaderType {
  logoSrc: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  heroBackgroundImage: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroButtons?: HeroButton[];
}
