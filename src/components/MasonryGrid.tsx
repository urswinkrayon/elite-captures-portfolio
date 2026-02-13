import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ImageItem } from "@/data/placeholder";

interface MasonryGridProps {
  images: ImageItem[];
}

const MasonryGrid = ({ images }: MasonryGridProps) => {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 sm:gap-3">
      {images.map((image, index) => (
        <motion.div
          key={image.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="mb-2 sm:mb-3 break-inside-avoid"
        >
          <Link to={`/gallery/${image.category}`} className="group block overflow-hidden">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                image.aspect === "portrait" ? "aspect-[3/4]" : image.aspect === "square" ? "aspect-square" : "aspect-[4/3]"
              }`}
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default MasonryGrid;
