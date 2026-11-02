# The Networking Life

Professional networking brand, community platform, and interactive sales funnel with AI integration.

> **🛠️ IMPORTANT:** Before making any code changes, read the [Development Guide](./DEVELOPMENT.md). This project uses a custom build process.

## Overview

This repository contains the complete web ecosystem for **The Networking Life**, built with a modern, modular architecture:

1. **Business Opportunities Hub (Landing Page):** A multi-language catalog featuring current and upcoming business models.
2. **Interactive Training Funnel:** A 3-step qualification funnel featuring video presentations and interactive questionnaires.
3. **AI Assistant:** An integrated chatbot (via ChatbotLite and Cloudflare Workers) powered by Groq/Llama 3.

## 🚀 How to Run Locally

To view the system on your machine, you **must** compile the files first. Do not open the HTML files directly in your browser.

```bash
# 1. Compile all projects (Hub, Training, E-commerce, Consulting)
python3 build.py

# 2. Start a local web server
cd public
python3 -m http.server 8080
```

Then, open `http://localhost:8080` in your browser. To stop the server, press `Ctrl + C` in your terminal.

## ⚠️ Modular Architecture

Do not edit files inside the `public/` folder directly. They are automatically generated and will be overwritten.

All source files are located in the `src/` directory. We use a custom Python build script to stitch the components together.

### How to make changes:

1. Edit the HTML partials inside `src/public/partials/`, `src/training/partials/`, `src/ecommerce/partials/`, or `src/consulting/partials/`.
2. Run the build script: `python3 build.py`
3. The script will generate the final HTML files into the `public/` directory.

## 📦 How to Deploy

To deploy changes to production, run the following commands in order:

```bash
# 1. Compile the HTML
python3 build.py

# 2. Commit and push to GitHub
git add .
git commit -m "Your descriptive message here"
git push origin main

# 3. Deploy to Cloudflare
npx wrangler deploy
```

## Project Structure

```text
.
├── build.py                # Python script to compile HTML components
├── knowledge.md           # AI training data for the Chatbot
├── wrangler.toml           # Cloudflare Workers deployment config
│
├── src/                    # SOURCE FILES (EDIT HERE)
│   ├── public/             # Landing Page components
│   ├── training/           # Training Funnel components
│   ├── ecommerce/          # Dropshipping components
│   └── consulting/         # Consulting components
│
└── public/                 # COMPILED OUTPUT (DO NOT EDIT DIRECTLY)
    ├── index.html          # Generated Landing Page
    ├── training/           # Generated Training Funnel
    ├── ecommerce/          # Generated E-commerce Page
    └── consulting/         # Generated Consulting Page
```

## AI Chatbot Integration

The chatbot uses a separate Cloudflare Worker (`tnl-chatbot-api`).

- **Knowledge Base:** The bot reads its context from `knowledge.md`.
- **API:** It uses Groq (Llama 3) for ultra-fast inference.
- **Security:** The `GROQ_API_KEY` must be configured as a Secret in the Cloudflare Worker dashboard.

## Required Video Files

For the training funnel to work properly, place your `.mp4` files in the `public/training/assets/media/` directory with the following exact names:

```text
intro-es.mp4  |  final-es.mp4
intro-en.mp4  |  final-en.mp4
intro-ko.mp4  |  final-ko.mp4
intro-zh.mp4  |  final-zh.mp4
```

## Tech Stack

- **Frontend:** HTML5, Vanilla CSS, Vanilla JavaScript.
- **Build Tool:** Python 3 (`build.py`).
- **Deployment:** Cloudflare Workers.
- **AI:** Groq API (Llama 3) + ChatbotLite.
- **Forms:** Formspree.

## License

© 2026 Quantum Flux Group Holdings LLC. All rights reserved.
