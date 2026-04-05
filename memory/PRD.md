# 24x7 Solution — Product Requirements Document

## Original Problem Statement
Build a complete, production-ready website for "24x7 Solution" — a Social Media Marketing, Lead Generation & Performance Marketing agency serving clients in the USA, Australia, and UK. The site must convey an "always-on, always delivering" brand promise with a dark command-center aesthetic.

## Tech Stack
- Frontend: React (CRA) + Tailwind CSS + Framer Motion + shadcn/ui
- Backend: FastAPI + MongoDB (Motor)
- Routing: React Router DOM
- Forms: React Hook Form + Zod validation
- Fonts: Syne (display), DM Sans (body), JetBrains Mono (mono)
- Icons: Lucide React
- Deployment: Emergent platform (Netlify config preserved for external deploy)

## Brand Identity
- **Name**: 24x7 Solution
- **Domain**: www.24x7solution.in
- **Colors**: #0A0A0F (bg), #00FF88 (mint), #0066FF (blue), #111118 (surface), #1E1E2E (border)
- **Voice**: Bold, no-nonsense, results-obsessed, globally fluent

## What's Been Implemented

### Phase 1 — Foundation (COMPLETE)
- [x] Cleaned up old Upthrust clone files
- [x] Tailwind config with brand colors, fonts, custom animations (marquee, pulse, shimmer)
- [x] Google Fonts (Syne, DM Sans, JetBrains Mono)
- [x] React Router setup with lazy loading for all routes
- [x] Sticky Navbar with blur effect, live indicator, mobile hamburger menu
- [x] Footer with live timezone clocks (NY, London, Sydney), social icons, newsletter form

### Phase 2 — Homepage (COMPLETE)
- [x] Hero with animated word rotation (Leads/Revenue/Brand/Growth), grid background
- [x] Metrics Bar with animated counters ($50M+, 300+, 3, 24x7)
- [x] Trust/Logo marquee bar
- [x] Services Grid (6 cards with hover effects)
- [x] Why 24x7 Section (3 pillars)
- [x] Case Studies Preview (3 cards with stats)
- [x] Testimonials Marquee (2 rows, 6 testimonials)
- [x] Process Timeline (4 steps)
- [x] CTA Banner

### Phase 3 — Inner Pages (COMPLETE)
- [x] /services — 6 detailed service sections with icons, checklists, market tags, CTAs
- [x] /case-studies — Filterable index (All/USA/AU/UK/Paid Social/Lead Gen/Google Ads/SEO)
- [x] /case-studies/:slug — 3 individual case studies with stats, quotes, full narrative
- [x] /about — Mission, story, team grid (5 members), values (4), by-the-numbers counters
- [x] /blog — 3 blog posts with category tags, read time, gradient thumbnails
- [x] /blog/:slug — Full blog articles with headings and content
- [x] /contact — Lead form (Zod validation) + live clocks + Calendly placeholder
- [x] /free-audit — Lead magnet page with checklist, urgency, trust signals, form
- [x] /privacy — Privacy policy page
- [x] /terms — Terms of service page

### Phase 4 — Backend API (COMPLETE)
- [x] POST /api/contact — Stores contact form submissions in MongoDB
- [x] POST /api/audit — Stores free audit requests in MongoDB
- [x] POST /api/newsletter — Stores newsletter subscriptions in MongoDB
- [x] GET /api/leads — Returns all leads (contact + audit)
- [x] GET /api/newsletter/subscribers — Returns all newsletter subscribers

## Test Results
- Backend: 100% pass rate (6/6 endpoints)
- Frontend: 100% pass rate (all pages, forms, navigation, mobile)
- Test report: /app/test_reports/iteration_1.json

## Known Technical Constraints
- Babel visual-edits plugin causes stack overflow with deeply nested JSX + .map() patterns
- Workaround: Use `require()` for data imports and keep component JSX flat
- Components must stay modular and simple to avoid this issue

## Prioritized Backlog

### P0 (Next)
- [ ] Resend email integration for contact/audit form notifications
- [ ] Cookie consent banner (GDPR/CCPA)
- [ ] Lead capture exit-intent modal
- [ ] Floating CTA on mobile

### P1
- [ ] Admin dashboard to view/manage leads
- [ ] Google Analytics / GTM integration
- [ ] SEO meta tags per page (React Helmet — partially done)
- [ ] JSON-LD structured data

### P2
- [ ] Stripe payment integration for service tiers
- [ ] sitemap.xml + robots.txt generation
- [ ] Dynamic OG images
- [ ] Performance optimization (Lighthouse 95+)

### P3 (Future)
- [ ] Blog CMS / MDX content management
- [ ] Client portal with auth
- [ ] Real-time chat widget
- [ ] A/B testing infrastructure
