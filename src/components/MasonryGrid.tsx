import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageItem } from "@/data/placeholder";

interface MasonryGridProps {
  images: ImageItem[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
  return (
    /* 1. Use 100% width and remove column caps */
    <div className="w-full columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          className="break-inside-avoid"
        >
          <Link 
            to={`/gallery/${image.category}`} 
            className="group block overflow-hidden bg-neutral-100"
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              /* 2. REMOVED aspect ratios. 
                 h-auto allows the image to be as big as its natural resolution allows.
              */
              className="w-full h-auto object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;