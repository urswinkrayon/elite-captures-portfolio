import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const About = () => (
  <Layout>
    {/* Increased max-width to 7xl and adjusted padding for a more "Elite" feel */}
    <section className="mx-auto max-w-7xl px-6 py-12 lg:px-12 lg:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative group"
        >
          {/* UPDATED IMAGE PATH */}
          <img
            src="/public/jasonpp.jpg" 
            alt="The photographer"
            className="w-full h-auto object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
          />
          {/* Subtle decorative border element for a premium look */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/10 -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-foreground mb-8">
            About
          </h1>
          <div className="space-y-6 text-base font-light leading-relaxed text-muted-foreground/90">
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