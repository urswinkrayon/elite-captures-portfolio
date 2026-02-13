import Layout from "@/components/Layout";
import MasonryGrid from "@/components/MasonryGrid";
import { images } from "@/data/placeholder";

const Index = () => (
  <Layout>
    <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
      <MasonryGrid images={images} />
    </section>
  </Layout>
);

export default Index;
