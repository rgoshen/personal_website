export interface HeroButton {
  label: string;
  href: string;
}

export interface HeroType {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  buttons?: HeroButton[]; // Use the HeroButton type here
}
