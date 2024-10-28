import { NavLink } from './Navbar'; // Reuse types from NavbarProps
import { HeroButton } from './Hero';
import { SocialLink } from './SocialLink';

export interface HeaderType {
  logoSrc: string;
  navLinks: NavLink[];
  socialLinks: SocialLink[];
  heroBackgroundImage: string;
  heroTitle: string;
  heroSubtitle?: string;
  heroButtons?: HeroButton[];
}
