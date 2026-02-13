import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Instagram, Send } from "lucide-react";
import Layout from "@/components/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Placeholder — will connect to backend later
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "Thank you — we'll be in touch soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <Layout>
      <section className="mx-auto max-w-2xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-serif text-3xl sm:text-4xl font-light tracking-wide text-foreground mb-2">
            Contact
          </h1>
          <p className="font-serif text-lg font-light italic text-muted-foreground mb-10">
            Let's Create Something Exceptional.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input name="name" placeholder="Name" required className="bg-background border-border/60 font-light text-sm" />
            <Input name="email" type="email" placeholder="Email" required className="bg-background border-border/60 font-light text-sm" />
            <Input name="subject" placeholder="Subject" className="bg-background border-border/60 font-light text-sm" />
            <Textarea name="message" placeholder="Message" rows={5} required className="bg-background border-border/60 font-light text-sm resize-none" />
            <Button type="submit" disabled={loading} className="w-full font-sans text-xs tracking-[0.15em] uppercase font-light">
              <Send className="h-3.5 w-3.5 mr-2" />
              {loading ? "Sending…" : "Send Message"}
            </Button>
          </form>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-xs font-light text-muted-foreground tracking-wider">hello@elitecaptures.com</p>
            <div className="flex items-center gap-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-xs font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Contact;
