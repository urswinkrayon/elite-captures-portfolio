// 1. Import local assets

// Wedding Images
import wed1 from "./Assets/wed1.jpg";
import wed2 from "./Assets/wed2.jpg";
import wed3 from "./Assets/wed3.jpg";
import wed5 from "./Assets/wed5.jpg";
import wed6 from "./Assets/wed6.jpg";
import wed7 from "./Assets/wed7.jpg";
import wed8 from "./Assets/wed8.jpg";
import wed9 from "./Assets/wed9.jpg";
import wed10 from "./Assets/wed10.jpg";
import wed11 from "./Assets/wed11.jpg";
import wed12 from "./Assets/wed12.jpg";
import wed13 from "./Assets/wed13.jpg";
import wed14 from "./Assets/wed14.jpg";
import wed15 from "./Assets/wed15.jpg";
import wed16 from "./Assets/wed16.jpg";
import wed17 from "./Assets/wed17.jpg";
import wed18 from "./Assets/wed18.jpg";
import wed19 from "./Assets/wed19.jpg";
import wed20 from "./Assets/wed20.jpg";
import wed21 from "./Assets/wed21.jpg";
import wed22 from "./Assets/wed22.jpg";
import wed23 from "./Assets/wed23.jpg";
import wed24 from "./Assets/wed24.jpg";

// Event Images
import event1 from "./Assets/events1.jpg";
import event2 from "./Assets/events2.jpg";
import event3 from "./Assets/events3.jpg";
import event4 from "./Assets/events4.jpg";

// Portrait Images
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
  {
    slug: "weddings",
    name: "Weddings",
    description: "Timeless love stories captured with elegance and emotion.",
    cover: wed1,
  },
  {
    slug: "portraits",
    name: "Portraits",
    description: "Intimate character studies captured in natural light.",
    cover: portrait1,
  },
  {
    slug: "landscape",
    name: "Landscape",
    description: "Vast horizons and the quiet poetry of open spaces.",
    cover:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
  },
  {
    slug: "street",
    name: "Street",
    description: "Unscripted moments from the rhythm of city life.",
    cover:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df4?w=800&q=80",
  },
  {
    slug: "commercial",
    name: "Commercial",
    description: "Brand imagery crafted with precision and intention.",
    cover:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    slug: "events",
    name: "Events",
    description: "The energy, emotion, and atmosphere of live moments.",
    cover: event1,
  },
  {
    slug: "film",
    name: "Film / Video",
    description: "Moving images that tell stories beyond the still frame.",
    cover:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
  },
];

export const images: ImageItem[] = [
  // Weddings (FIRST)
  { id: "w1", src: wed1, alt: "Wedding 1", category: "weddings", aspect: "portrait" },
  { id: "w2", src: wed2, alt: "Wedding 2", category: "weddings", aspect: "portrait" },
  { id: "w3", src: wed3, alt: "Wedding 3", category: "weddings", aspect: "portrait" },
  { id: "w5", src: wed5, alt: "Wedding 5", category: "weddings", aspect: "portrait" },
  { id: "w6", src: wed6, alt: "Wedding 6", category: "weddings", aspect: "portrait" },
  { id: "w7", src: wed7, alt: "Wedding 7", category: "weddings", aspect: "portrait" },
  { id: "w8", src: wed8, alt: "Wedding 8", category: "weddings", aspect: "portrait" },
  { id: "w9", src: wed9, alt: "Wedding 9", category: "weddings", aspect: "portrait" },
  { id: "w10", src: wed10, alt: "Wedding 10", category: "weddings", aspect: "portrait" },
  { id: "w11", src: wed11, alt: "Wedding 11", category: "weddings", aspect: "portrait" },
  { id: "w12", src: wed12, alt: "Wedding 12", category: "weddings", aspect: "portrait" },
  { id: "w13", src: wed13, alt: "Wedding 13", category: "weddings", aspect: "portrait" },
  { id: "w14", src: wed14, alt: "Wedding 14", category: "weddings", aspect: "portrait" },
  { id: "w15", src: wed15, alt: "Wedding 15", category: "weddings", aspect: "portrait" },
  { id: "w16", src: wed16, alt: "Wedding 16", category: "weddings", aspect: "portrait" },
  { id: "w17", src: wed17, alt: "Wedding 17", category: "weddings", aspect: "portrait" },
  { id: "w18", src: wed18, alt: "Wedding 18", category: "weddings", aspect: "portrait" },
  { id: "w19", src: wed19, alt: "Wedding 19", category: "weddings", aspect: "portrait" },
  { id: "w20", src: wed20, alt: "Wedding 20", category: "weddings", aspect: "portrait" },
  { id: "w21", src: wed21, alt: "Wedding 21", category: "weddings", aspect: "portrait" },
  { id: "w22", src: wed22, alt: "Wedding 22", category: "weddings", aspect: "portrait" },
  { id: "w23", src: wed23, alt: "Wedding 23", category: "weddings", aspect: "portrait" },
  { id: "w24", src: wed24, alt: "Wedding 24", category: "weddings", aspect: "portrait" },

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

  // Sample Landscape
  {
    id: "l1",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Mountain landscape",
    category: "landscape",
    aspect: "landscape",
  },
];

export const featuredImages = images.slice(0, 8);

export function getImagesByCategory(category: string): ImageItem[] {
  return images.filter((img) => img.category === category);
}
