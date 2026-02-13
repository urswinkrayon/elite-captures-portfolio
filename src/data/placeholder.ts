export interface ImageItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  cover: string;
}

export const categories: Category[] = [
  { slug: "portraits", name: "Portraits", description: "Intimate character studies captured in natural light.", cover: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80" },
  { slug: "landscape", name: "Landscape", description: "Vast horizons and the quiet poetry of open spaces.", cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { slug: "street", name: "Street", description: "Unscripted moments from the rhythm of city life.", cover: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80" },
  { slug: "commercial", name: "Commercial", description: "Brand imagery crafted with precision and intention.", cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { slug: "events", name: "Events", description: "The energy, emotion, and atmosphere of live moments.", cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80" },
  { slug: "film", name: "Film / Video", description: "Moving images that tell stories beyond the still frame.", cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
];

export const images: ImageItem[] = [
  { id: "1", src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", alt: "Portrait in natural light", category: "portraits", aspect: "portrait" },
  { id: "2", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Mountain landscape", category: "landscape", aspect: "landscape" },
  { id: "3", src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80", alt: "City street at dusk", category: "street", aspect: "landscape" },
  { id: "4", src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80", alt: "Candid portrait", category: "portraits", aspect: "portrait" },
  { id: "5", src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", alt: "Product photography", category: "commercial", aspect: "landscape" },
  { id: "6", src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80", alt: "Concert event", category: "events", aspect: "landscape" },
  { id: "7", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Fashion portrait", category: "portraits", aspect: "portrait" },
  { id: "8", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", alt: "Forest landscape", category: "landscape", aspect: "landscape" },
  { id: "9", src: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80", alt: "Film production", category: "film", aspect: "landscape" },
  { id: "10", src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80", alt: "Editorial portrait", category: "portraits", aspect: "portrait" },
  { id: "11", src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80", alt: "Lake at sunset", category: "landscape", aspect: "landscape" },
  { id: "12", src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80", alt: "Urban architecture", category: "street", aspect: "portrait" },
];

export const featuredImages = images.slice(0, 8);

export function getImagesByCategory(category: string): ImageItem[] {
  return images.filter((img) => img.category === category);
}
