import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
            alt="The photographer"
            className="w-full aspect-[3/4] object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-foreground mb-6">
            About
          </h1>
          <div className="space-y-4 text-sm font-light leading-relaxed text-muted-foreground">
            <p>
              Elite Captures is driven by a passion for visual storytelling — finding beauty in light,
              composition, and the unscripted moments that define our lives.
            </p>
            <p>
              With a background spanning editorial, commercial, and documentary work, every frame is
              approached with intention and an eye for the extraordinary within the ordinary.
            </p>
            <p>
              The work is rooted in authenticity: natural light, genuine expressions, and environments
              that speak for themselves. Whether it's a portrait session, a brand campaign, or capturing
              the energy of a live event, the goal is always the same — images that resonate long after
              the moment has passed.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default About;
