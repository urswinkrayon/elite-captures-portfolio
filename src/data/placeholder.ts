// 1. Import local assets
import event1 from "./Assets/events1.jpg";
import event2 from "./Assets/events2.jpg";
import event3 from "./Assets/events3.jpg";
import event4 from "./Assets/events4.jpg";

import portrait1 from "./Assets/portrait1.jpg";
import portrait2 from "./Assets/portrait2.jpg";
import portrait3 from "./Assets/portrait3.jpg";
import portrait4 from "./Assets/portrait4.jpg";
import portrait5 from "./Assets/portrait5.jpg";
import portrait6 from "./Assets/portrait6.jpg";
import portrait7 from "./Assets/portrait7.jpg";

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
  // I've updated the covers for Portraits and Events to use your local files
  { slug: "portraits", name: "Portraits", description: "Intimate character studies captured in natural light.", cover: portrait1 },
  { slug: "landscape", name: "Landscape", description: "Vast horizons and the quiet poetry of open spaces.", cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80" },
  { slug: "street", name: "Street", description: "Unscripted moments from the rhythm of city life.", cover: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&q=80" },
  { slug: "commercial", name: "Commercial", description: "Brand imagery crafted with precision and intention.", cover: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { slug: "events", name: "Events", description: "The energy, emotion, and atmosphere of live moments.", cover: event1 },
  { slug: "film", name: "Film / Video", description: "Moving images that tell stories beyond the still frame.", cover: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80" },
];

export const images: ImageItem[] = [
  // Portraits
  { id: "p1", src: portrait1, alt: "Portrait 1", category: "portraits", aspect: "portrait" },
  { id: "p2", src: portrait2, alt: "Portrait 2", category: "portraits", aspect: "portrait" },
  { id: "p3", src: portrait3, alt: "Portrait 3", category: "portraits", aspect: "portrait" },
  { id: "p4", src: portrait4, alt: "Portrait 4", category: "portraits", aspect: "portrait" },
  { id: "p5", src: portrait5, alt: "Portrait 5", category: "portraits", aspect: "portrait" },
  { id: "p6", src: portrait6, alt: "Portrait 6", category: "portraits", aspect: "portrait" },
  { id: "p7", src: portrait7, alt: "Portrait 7", category: "portraits", aspect: "portrait" },
  
  // Events
  { id: "e1", src: event1, alt: "Event 1", category: "events", aspect: "landscape" },
  { id: "e2", src: event2, alt: "Event 2", category: "events", aspect: "landscape" },
  { id: "e3", src: event3, alt: "Event 3", category: "events", aspect: "landscape" },
  { id: "e4", src: event4, alt: "Event 4", category: "events", aspect: "landscape" },

  // Keeping a few landscapes/street from Unsplash until you have local versions
  { id: "l1", src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Mountain landscape", category: "landscape", aspect: "landscape" },
];

export const featuredImages = images.slice(0, 8);

export function getImagesByCategory(category: string): ImageItem[] {
  return images.filter((img) => img.category === category);
}