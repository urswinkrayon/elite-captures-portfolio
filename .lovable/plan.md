

# Elite Captures — Photographer & Videographer Portfolio

## Overview
A modern, minimalist, image-first portfolio website that opens directly with curated work — no hero section, no headlines, just the photography. The design is clean, premium, editorial, and gallery-driven.

---

## Pages & Features

### 1. Homepage — Curated Work Grid
- Opens immediately with a masonry-style image grid (no hero, no intro text)
- Mixed portrait and landscape ratios in an asymmetrical but balanced layout
- White background with thin spacing between images
- Smooth fade-in animation on page load
- Subtle hover zoom effect on desktop
- Clicking an image navigates to its corresponding album
- **Mobile:** 2-column grid, proper scaling, lazy loading, touch-friendly

### 2. Gallery Page — Category Browser
- Visual category sections with filter options: Portraits, Landscape, Street, Commercial, Events, Film/Video
- Each category card shows a featured image and label
- Clicking a category opens a dedicated album page

### 3. Album Pages — Focused Image Display
- Clean vertical/stacked layout with large, high-quality images
- Small title at the top (e.g., "Portraits") with optional one-sentence description
- Minimal text, generous spacing, elegant scroll experience
- Images remain the sole focus

### 4. About Page
- Portrait image of the photographer alongside a short professional bio
- Focuses on artistic vision, storytelling, light, and composition
- **Desktop:** Side-by-side layout | **Mobile:** Image stacked above text
- Refined and editorial tone

### 5. Contact Page
- Minimal form: Name, Email, Subject, Message
- WhatsApp contact button and Instagram link
- Email address displayed
- CTA: "Let's Create Something Exceptional."

---

## Navigation & Layout
- **Header:** Minimal, thin serif/sans-serif typography, sticky on scroll, white background, no oversized logo — just "Elite Captures" wordmark
- **Mobile:** Hamburger menu with clean slide-out drawer
- **Nav links:** Work, Gallery, About, Contact
- **Footer:** Social links (Instagram, WhatsApp), copyright, small branding text

---

## Design Language
- White background with black and soft grey typography
- Elegant serif font for headings, clean sans-serif for body
- No gradients, no heavy shadows, no flashy animations
- Subtle fade and slide scroll effects only
- Generous whitespace throughout
- Overall feel: confident, curated, editorial, timeless

---

## Backend — Supabase Integration
- **Image & Album Management:** Supabase storage for image uploads; database tables for albums, categories, and image metadata
- **Contact Form Submissions:** Stored in a Supabase table
- Admin functionality for managing albums and images can be added as a follow-up

---

## Technical Details
- Fully responsive, mobile-first design
- Lazy-loaded images throughout
- SEO-friendly page structure with proper meta tags
- Placeholder images used initially (Unsplash photography) to establish the layout and feel
- Optimized for fast performance and smooth scrolling

