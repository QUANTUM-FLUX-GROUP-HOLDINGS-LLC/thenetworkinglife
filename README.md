# The Networking Life

Professional networking brand, community platform, and interactive sales funnel.

## Overview

This repository contains the complete web ecosystem for **The Networking Life**:
1. **Business Opportunities Hub (Landing Page):** A multi-language catalog featuring current and upcoming business models (like Amway Global Business).
2. **Interactive Training Funnel:** A 3-step qualification funnel featuring video presentations, interactive questionnaires, and direct conversion paths.

## Features

- **Multi-Language Support:** Fully localized in English (EN), Spanish (ES), Korean (KO), and Chinese (ZH) across both the Hub and the Funnel.
- **Modern UI/UX:** Implements Glassmorphism, responsive grid layouts, and accessible dark-mode aesthetics.
- **Interactive Funnel:** Video-driven qualification process. If qualified, users are shown a registration video and directed to a CTA (Register, WhatsApp, or Telegram).
- **No Build Step Required:** Pure HTML, CSS, and Vanilla JavaScript. Ready to be hosted on any static provider.

## Project Structure

```text
.
├── public/                 # The Landing Page (Business Opportunities Hub)
│   ├── index.html          # Main entry point
│   ├── css/
│   │   ├── modern.css      # Design system, tokens, and layout
│   │   └── style.css       # Legacy styles
│   ├── js/
│   │   ├── main.js         # Hub logic (carousel, menu)
│   │   └── i18n.js         # Hub translations (EN, ES, KO, ZH)
│   └── assets/             # Images (e.g., og.png)
│
└── training/               # Interactive Training Funnel
    ├── index.html          # Funnel entry point
    └── assets/
        ├── styles.css      # Funnel UI & animations
        ├── video-player.js # Funnel logic (questions, video routing)
        └── media/          # YOU MUST PLACE YOUR VIDEO FILES HERE

Required Video Files

For the training funnel to work properly, place your .mp4 files in the training/assets/media/ directory with the following exact names:
text

intro-es.mp4  |  final-es.mp4
intro-en.mp4  |  final-en.mp4
intro-ko.mp4  |  final-ko.mp4
intro-zh.mp4  |  final-zh.mp4

Tech Stack

    Frontend: HTML5, Vanilla CSS, Vanilla JavaScript.

    Deployment: Cloudflare Pages / Workers.

    Forms: Formspree.

Deployment

Push your changes to the main branch to deploy automatically via Cloudflare.
License

© 2026 Quantum Flux Group Holdings LLC. All rights reserved.
