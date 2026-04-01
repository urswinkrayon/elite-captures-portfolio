import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import MasonryGrid from "@/components/MasonryGrid";
import { images } from "@/data/placeholder";

const Index = () => {
  const [loadedCount, setLoadedCount] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  // We stop the loading screen once the first 6 images are ready
  const LOAD_THRESHOLD = 6;

  const handleImageLoad = () => {
    setLoadedCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (loadedCount >= LOAD_THRESHOLD) {
      setShowOverlay(false);
    }
  }, [loadedCount]);

  // Safety timeout: If images fail to load, don't trap the user forever
  useEffect(() => {
    const timer = setTimeout(() => setShowOverlay(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {/* 1. Loading Overlay */}
      <AnimatePresence>
        {showOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
          >
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-gray-200 border-t-black" />
            <p className="mt-4 text-xs font-medium uppercase tracking-widest text-gray-400">
              Loading Gallery
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Main Content */}
      <section className="mx-auto max-w-[2500px] px-2 py-4 sm:px-6 sm:py-8 lg:px-10">
        <MasonryGrid images={images} onImageLoad={handleImageLoad} />
      </section>
    </Layout>
  );
};

export default Index;