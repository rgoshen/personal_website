export interface FeatureItem {
  icon: string; // Font Awesome icon class name
  title: string; // Feature title
  description: string; // Feature description
}

export interface FeaturesType {
  items: FeatureItem[]; // Array of feature items
}
