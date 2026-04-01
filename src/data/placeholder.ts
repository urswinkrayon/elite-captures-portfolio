// 1. Import local assets

// Wedding Images (Skipping missing 15, 17, 24 based on your folder)
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
import wed16 from "./Assets/wed16.jpg";
import wed18 from "./Assets/wed18.jpg";
import wed19 from "./Assets/wed19.jpg";
import wed20 from "./Assets/wed20.jpg";
import wed21 from "./Assets/wed21.jpg";
import wed22 from "./Assets/wed22.jpg";
import wed23 from "./Assets/wed23.jpg";

// Portrait Images (Matches "portX.jpg" in your folder)
import port1 from "./Assets/port1.jpg";
import port2 from "./Assets/port2.jpg";
import port3 from "./Assets/port3.jpg";
import port4 from "./Assets/port4.jpg";
import port5 from "./Assets/port5.jpg";
import port6 from "./Assets/port6.jpg";
import port7 from "./Assets/port7.jpg";
import port8 from "./Assets/port8.jpg";
import port9 from "./Assets/port9.jpg";
import port10 from "./Assets/port10.jpg";
import port11 from "./Assets/port11.jpg";
import port12 from "./Assets/port12.jpg";

// Studio Images
import studio1 from "./Assets/studio1.jpg";
import studio2 from "./Assets/studio2.jpg";
import studio3 from "./Assets/studio3.jpg";
import studio4 from "./Assets/studio4.jpg";
import studio5 from "./Assets/studio5.jpg";
import studio6 from "./Assets/studio6.jpg";
import studio7 from "./Assets/studio7.jpg";
import studio8 from "./Assets/studio8.jpg";
import studio9 from "./Assets/studio9.jpg";
import studio10 from "./Assets/studio10.jpg";
import studio11 from "./Assets/studio11.jpg";
import studio12 from "./Assets/studio12.jpg";
import studio13 from "./Assets/studio13.jpg";
import studio14 from "./Assets/studio14.jpg";

// Matric Images
import matric1 from "./Assets/matric1.jpg";
import matric2 from "./Assets/matric2.jpg";
import matric3 from "./Assets/matric3.jpg";
import matric4 from "./Assets/matric4.jpg";

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
    cover: port1,
  },
  {
    slug: "studio",
    name: "Studio",
    description: "Professional studio sessions with controlled lighting.",
    cover: studio1,
  },
  {
    slug: "matric",
    name: "Matric",
    description: "Celebrating milestones and the excitement of graduation.",
    cover: matric1,
  },
];

export const images: ImageItem[] = [
  // Weddings
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
  { id: "w16", src: wed16, alt: "Wedding 16", category: "weddings", aspect: "portrait" },
  { id: "w18", src: wed18, alt: "Wedding 18", category: "weddings", aspect: "portrait" },
  { id: "w19", src: wed19, alt: "Wedding 19", category: "weddings", aspect: "portrait" },
  { id: "w20", src: wed20, alt: "Wedding 20", category: "weddings", aspect: "portrait" },
  { id: "w21", src: wed21, alt: "Wedding 21", category: "weddings", aspect: "portrait" },
  { id: "w22", src: wed22, alt: "Wedding 22", category: "weddings", aspect: "portrait" },
  { id: "w23", src: wed23, alt: "Wedding 23", category: "weddings", aspect: "portrait" },

  // Portraits
  { id: "p1", src: port1, alt: "Portrait 1", category: "portraits", aspect: "portrait" },
  { id: "p2", src: port2, alt: "Portrait 2", category: "portraits", aspect: "portrait" },
  { id: "p3", src: port3, alt: "Portrait 3", category: "portraits", aspect: "portrait" },
  { id: "p4", src: port4, alt: "Portrait 4", category: "portraits", aspect: "portrait" },
  { id: "p5", src: port5, alt: "Portrait 5", category: "portraits", aspect: "portrait" },
  { id: "p6", src: port6, alt: "Portrait 6", category: "portraits", aspect: "portrait" },
  { id: "p7", src: port7, alt: "Portrait 7", category: "portraits", aspect: "portrait" },
  { id: "p8", src: port8, alt: "Portrait 8", category: "portraits", aspect: "portrait" },
  { id: "p9", src: port9, alt: "Portrait 9", category: "portraits", aspect: "portrait" },
  { id: "p10", src: port10, alt: "Portrait 10", category: "portraits", aspect: "portrait" },
  { id: "p11", src: port11, alt: "Portrait 11", category: "portraits", aspect: "portrait" },
  { id: "p12", src: port12, alt: "Portrait 12", category: "portraits", aspect: "portrait" },

  // Studio
  { id: "s1", src: studio1, alt: "Studio 1", category: "studio", aspect: "portrait" },
  { id: "s2", src: studio2, alt: "Studio 2", category: "studio", aspect: "portrait" },
  { id: "s3", src: studio3, alt: "Studio 3", category: "studio", aspect: "portrait" },
  { id: "s4", src: studio4, alt: "Studio 4", category: "studio", aspect: "portrait" },
  { id: "s5", src: studio5, alt: "Studio 5", category: "studio", aspect: "portrait" },
  { id: "s6", src: studio6, alt: "Studio 6", category: "studio", aspect: "portrait" },
  { id: "s7", src: studio7, alt: "Studio 7", category: "studio", aspect: "portrait" },
  { id: "s8", src: studio8, alt: "Studio 8", category: "studio", aspect: "portrait" },
  { id: "s9", src: studio9, alt: "Studio 9", category: "studio", aspect: "portrait" },
  { id: "s10", src: studio10, alt: "Studio 10", category: "studio", aspect: "portrait" },
  { id: "s11", src: studio11, alt: "Studio 11", category: "studio", aspect: "portrait" },
  { id: "s12", src: studio12, alt: "Studio 12", category: "studio", aspect: "portrait" },
  { id: "s13", src: studio13, alt: "Studio 13", category: "studio", aspect: "portrait" },
  { id: "s14", src: studio14, alt: "Studio 14", category: "studio", aspect: "portrait" },

  // Matric
  { id: "m1", src: matric1, alt: "Matric 1", category: "matric", aspect: "portrait" },
  { id: "m2", src: matric2, alt: "Matric 2", category: "matric", aspect: "portrait" },
  { id: "m3", src: matric3, alt: "Matric 3", category: "matric", aspect: "portrait" },
  { id: "m4", src: matric4, alt: "Matric 4", category: "matric", aspect: "portrait" },
];

export const featuredImages = images.slice(0, 8);

export function getImagesByCategory(category: string): ImageItem[] {
  return images.filter((img) => img.category === category);
}