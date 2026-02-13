import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { categories } from "@/data/placeholder";

const Gallery = () => (
  <Layout>
    {/* 1. Changed max-w-7xl to max-w-[2000px] and reduced vertical padding */}
    <section className="mx-auto max-w-[2000px] px-2 py-6 sm:px-4 lg:px-6">
      <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8 px-2">
        Gallery
      </h1>
      
      {/* 2. Switched to CSS Columns for a Masonry effect (removes awkward gaps) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            className="break-inside-avoid" // Prevents images from splitting across columns
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            {/* 3. Removed aspect-[4/5] to let images breathe in their natural ratio */}
            <Link 
              to={`/gallery/${cat.slug}`} 
              className="group block overflow-hidden relative rounded-sm bg-muted shadow-sm transition-all hover:shadow-xl"
            >
              <img
                src={cat.cover}
                alt={cat.name}
                loading="lazy"
                // 4. Changed from absolute/inset-0 to relative/w-full for natural height
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Overlay: Slightly more subtle to keep focus on the photo */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h2 className="font-serif text-3xl font-light text-white tracking-wider">
                  {cat.name}
                </h2>
                <span className="text-white/70 text-sm uppercase tracking-widest mt-2 block opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                  View Collection
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;