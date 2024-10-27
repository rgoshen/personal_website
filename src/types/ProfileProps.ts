interface SocialLink {
  iconClass: string;
  href: string;
  label: string;
}

export interface ProfileProps {
  imageSrc: string;
  altText: string;
  bio: string;
  socialLinks?: SocialLink[];
}
