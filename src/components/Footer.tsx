import { Instagram } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border/50 bg-background">
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-6 text-center">
        <p className="font-serif text-lg font-light tracking-[0.15em] uppercase text-foreground">
          Elite Captures
        </p>
        <div className="flex items-center gap-5">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-4 w-4" />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-muted-foreground hover:text-foreground transition-colors text-xs font-light tracking-widest uppercase">
            WhatsApp
          </a>
        </div>
        <p className="text-xs font-light tracking-wider text-muted-foreground">
          © {new Date().getFullYear()} Elite Captures. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
