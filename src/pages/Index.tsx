import Layout from "@/components/Layout";
import MasonryGrid from "@/components/MasonryGrid";
import { images } from "@/data/placeholder";

const Index = () => (
  <Layout>
    {/* 1. Changed max-w-7xl to max-w-[2500px] to fill the screen */}
    {/* 2. Reduced px-4 to px-2 on mobile so images are almost edge-to-edge */}
    <section className="mx-auto max-w-[2500px] px-2 py-4 sm:px-6 sm:py-8 lg:px-10">
      <MasonryGrid images={images} />
    </section>
  </Layout>
);

export default Index;