export interface HeroProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttons?: {
    label: string;
    href: string;
  }[];
}
