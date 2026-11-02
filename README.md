# The Networking Life

Professional networking brand, community platform, and interactive sales funnel with AI integration.

## Overview

This repository contains the complete web ecosystem for **The Networking Life**, built with a modern, modular architecture:
1. **Business Opportunities Hub (Landing Page):** A multi-language catalog featuring current and upcoming business models (like Amway Global Business).
2. **Interactive Training Funnel:** A 3-step qualification funnel featuring video presentations, interactive questionnaires, and direct conversion paths.
3. **AI Assistant:** An integrated chatbot (via ChatbotLite and Cloudflare Workers) powered by Groq/Llama 3, trained on custom business knowledge.

## ⚠️ Modular Architecture & Build Process

**Do not edit files inside the `public/` folder directly.** They are automatically generated. 

All source files are located in the `src/` directory. We use a custom Python build script to stitch the components together into the final static files.

### How to make changes:
1. Edit the HTML partials inside `src/public/partials/` (Landing Page) or `src/training/partials/` (Training Funnel).
2. Edit the base templates `src/public/template.html` or `src/training/template.html`.
3. Run the build script in your terminal:
   ```bash
   python3 build.py

4. The script will generate the final public/index.html and public/training/index.html.

Project Structure
text

.
├── build.py                # Python script to compile HTML components
├── knowledge.md            # AI training data for the Chatbot
├── wrangler.toml           # Cloudflare Workers deployment config
│
├── src/                    # SOURCE FILES (EDIT HERE)
│   ├── public/             # Landing Page components
│   │   ├── template.html
│   │   └── partials/       # header, hero, opportunities, footer, etc.
│   └── training/           # Training Funnel components
│       ├── template.html
│       └── partials/       # video, language, floats, etc.
│
└── public/                 # COMPILED OUTPUT (DO NOT EDIT DIRECTLY)
    ├── index.html          # Generated Landing Page
    ├── css/
    ├── js/
    └── training/           # Generated Training Funnel
        ├── index.html
        └── assets/media/   # ⚠️ PLACE YOUR VIDEO FILES HERE

AI Chatbot Integration

The chatbot uses a separate Cloudflare Worker (tnl-chatbot-api).

    Knowledge Base: The bot reads its context from knowledge.md.

    API: It uses Groq (Llama 3) for ultra-fast inference.

    Security: The GROQ_API_KEY must be configured as a Secret in the Cloudflare Worker dashboard (never hardcode it).

Required Video Files

For the training funnel to work properly, place your .mp4 files in the public/training/assets/media/ directory with the following exact names:
text

intro-es.mp4  |  final-es.mp4
intro-en.mp4  |  final-en.mp4
intro-ko.mp4  |  final-ko.mp4
intro-zh.mp4  |  final-zh.mp4

Tech Stack

    Frontend: HTML5, Vanilla CSS, Vanilla JavaScript.

    Build Tool: Python 3 (build.py).

    Deployment: Cloudflare Workers.

    AI: Groq API (Llama 3) + ChatbotLite.

    Forms: Formspree.

Deployment

To deploy changes to production:
bash

python3 build.py
git add .
git commit -m "Your update message"
git push origin main
npx wrangler deploy

License

© 2026 Quantum Flux Group Holdings LLC. All rights reserved.
