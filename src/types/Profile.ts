import { SocialLink } from './SocialLink';

export interface ProfileType {
  imageSrc: string;
  altText: string;
  bio: string;
  socialLinks?: SocialLink[];
}
