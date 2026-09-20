# Sakura Art (ssakuraartt) — Mockup Site

A pitch mockup for a custom hand-painted art business (sneakers, caps,
drinkware, wall art/murals). Built as a starting point to show the client
before any commitment — **not a finished, production-ready site.**

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS.

## What's built

- Home page: hero, about section, recent-work preview, services, and an
  order/commission form at the bottom.
- `/gallery` — full portfolio grid of real reference photos.
- `/faq` — common commission questions.
- Design direction: Japanese woodblock-print-inspired (deep indigo ground,
  committed vermillion/sakura-pink colour blocks, ink-panel borders, a
  cherry-blossom motif).

## What's NOT finished yet — needed before this could go live

- **Order form is a visual preview only.** It is not connected to anything —
  submitting it does nothing except show a preview message. Needs a real
  email/notification setup (Brevo, matching the pattern used on other
  client sites) before it can actually take enquiries.
- **No real business email or domain** wired in yet.
- Gallery photos are the client's real reference photos supplied for this
  mockup — confirm final image selection/rights before shipping publicly.
- No analytics, no SEO metadata pass, no legal pages (privacy policy /
  terms) yet.
- Copy (About section, FAQ answers) is placeholder-realistic, written from
  the reference photos and a short brief — needs the client's own words
  confirmed before going live.

## Running locally

```
npm install
npm run dev
```
