import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { categories } from "@/data/placeholder";

const Gallery = () => (
  <Layout>
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-foreground mb-10">
        Gallery
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link to={`/gallery/${cat.slug}`} className="group block overflow-hidden relative aspect-[4/5]">
              <img
                src={cat.cover}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="font-serif text-2xl font-light text-primary-foreground tracking-wide">
                  {cat.name}
                </h2>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;
