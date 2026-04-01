import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageItem } from "@/data/placeholder";

interface MasonryGridProps {
  images: ImageItem[];
  onImageLoad: () => void; // Added this prop
}

const MasonryGrid = ({ images, onImageLoad }: MasonryGridProps) => {
  return (
    <div className="w-full columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3 xl:columns-4">
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
              onLoad={onImageLoad} // Triggers the counter in your Index page
              /* The first 6 images load immediately to hide the overlay ASAP.
                 The rest lazy-load to save data and performance.
              */
              loading={index < 6 ? "eager" : "lazy"}
              className="h-auto w-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;