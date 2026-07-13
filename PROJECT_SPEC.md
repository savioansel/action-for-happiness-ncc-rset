# PROJECT_SPEC.md

## Objective
Build a premium, production-quality, single-page community outreach website for presentation to the Director of Rajagiri School of Engineering & Technology (Autonomous).

The website represents **an initiative of the NCC Unit, RSET** and is open to everyone—not just NCC cadets.

The purpose is to:
- Showcase the initiative
- Explain its mission
- Present community service activities
- Recruit volunteers
- Provide contact information

This is **NOT** a donation or fundraising website.

---

# Branding

- Use the provided NCC logo.
- Use the provided RSET logo.
- Place both logos in the header and footer.
- Do not recreate or modify the logos.
- Keep their proportions intact.
- The branding should feel official, trustworthy and institutional.

---

# Technology Stack

Framework
- Next.js 15 (App Router)

Language
- TypeScript

Styling
- Tailwind CSS v4
- shadcn/ui
- Radix UI

Icons
- Lucide React

Animations
- Framer Motion

Fonts
- Inter (Body)
- Playfair Display (Headings)

Deployment
- Vercel

Images
- Next.js Image component

---

# Design Language

Inspired by Action for Happiness.

Visual characteristics:
- Minimal
- Premium
- Calm
- Spacious
- Modern NGO aesthetic
- Large typography
- Rounded cards
- Soft shadows
- White / warm cream backgrounds
- Navy + warm orange accent colours
- Responsive
- Smooth scrolling
- Elegant micro-animations
- Accessible

Avoid generic Bootstrap styling.

---

# Website Sections

1. Header
2. Hero
3. About
4. Mission
5. Service Areas
6. How It Works Timeline
7. Upcoming Activities
8. Volunteer Registration
9. Impact Counters
10. Testimonials
11. FAQ
12. Contact
13. Footer

---

# Folder Structure

app/
components/
public/
  logos/
  gallery/
data/
lib/
types/

Each section should be its own reusable component.

---

# Code Standards

- TypeScript only
- Functional React components
- Modular architecture
- Semantic HTML
- Responsive
- Accessible
- Production quality
- No placeholder lorem ipsum
- Use CONTENT.md for all copy
- Do not hardcode text already available in CONTENT.md

---

# Deliverables

The completed project must:

- compile successfully
- pass npm run lint
- pass npm run build
- include responsive layouts
- include smooth animations
- be presentation-ready
- be easy to extend later

No authentication.
No payment gateway.
No backend beyond static/demo requirements.