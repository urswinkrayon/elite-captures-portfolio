import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { categories, getImagesByCategory } from "@/data/placeholder";

const Album = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find((c) => c.slug === slug);
  const albumImages = getImagesByCategory(slug || "");

  if (!category) {
    return (
      <Layout>
        <div className="flex min-h-[50vh] items-center justify-center">
          <p className="text-muted-foreground">Album not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-foreground">
            {category.name}
          </h1>
          <p className="mt-2 text-sm font-light text-muted-foreground">{category.description}</p>
        </div>
        <div className="flex flex-col gap-4">
          {albumImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img
                src={image.src.replace("w=600", "w=1200")}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Album;
