# Youushi

A blog dedicated to exploring Scripture through the lens of history, context, and honest questions - helping others discover the transformative power of Jesus Christ.

## About This Blog

Three years ago, I began searching for God again after growing distant from the faith I knew as a child. What started as a tentative search became something far more profound: over the past six months, God has transformed my life in ways I never imagined possible. I've become a passionate follower of Christ, but I'm also the kind of person who needs to fully understand something before I can embrace it - I don't stop asking questions until I've wrapped my mind around the truth.

Six months ago, I opened the Bible for the first time in years, desperate to hear what God had to say to me. I didn't know how to listen, so I figured the best way to learn what He sounds like was to read His Word. But here's what I discovered: reading Scripture didn't give me answers - it gave me more questions. And that's when I realized I needed context.

I began digging into the history surrounding Jesus and the prophets, thinking through their world, their culture, their struggles. Understanding the historical context didn't just bring clarity - it brought the words to life. About a week in, after reading through roughly half of the New Testament, things started to click. The pieces began falling into place. The questions started finding their answers.

Now, six months later, I'm searching for ways to use the gifts God has given me to spread the message of Jesus - the Messiah, Wonderful Counselor, Mighty God, Everlasting Father, Prince of Peace. And He revealed something to me: many people could benefit from learning Scripture the way I'm learning it - through history, through context, through honest questions that lead to deeper understanding.

This blog is my way of sharing that journey with others. If you're someone who needs to understand before you can believe, if you're someone who asks hard questions, if you're searching for truth - this is for you.

## Tech Stack

This blog is built with modern web technologies and deployed on Cloudflare's edge network for blazing-fast performance worldwide.

**Framework & Build:**
- [Astro](https://astro.build) 5.16.2 - Static site generator with component islands architecture
- [TypeScript](https://www.typescriptlang.org/) 5.9.3 - Type-safe development
- [MDX](https://mdxjs.com/) - Markdown with JSX support for rich content

**Hosting & Deployment:**
- **Cloudflare Workers** - Edge computing platform for global distribution
- **Cloudflare Pages** - Static asset hosting with automatic deployments
- **Wrangler** 4.56.0 - Cloudflare CLI for deployment and development

**Features:**
- ✅ 100/100 Lighthouse performance score
- ✅ SEO-optimized with canonical URLs and OpenGraph metadata
- ✅ RSS feed support for subscribers
- ✅ Sitemap generation
- ✅ Markdown & MDX support for flexible content authoring
- ✅ Built-in observability and logging
- ✅ Edge-deployed for sub-50ms response times globally

**Performance:**
- Deployed on Cloudflare's edge network (200+ data centers worldwide)
- Zero cold starts with Workers
- Automatic static asset optimization
- Source maps enabled for debugging

## Project Structure

```
youushi/
├── src/
│   ├── components/     # Reusable Astro components
│   ├── content/        # Blog posts (Markdown/MDX)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── public/             # Static assets (images, fonts)
└── dist/              # Build output (generated)
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

The `src/content/blog/` directory contains blog posts using Astro's Content Collections API, providing type-safe frontmatter and content organization.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:4321`

### Build & Deploy

```bash
# Build for production
npm run build

# Deploy to Cloudflare
npm run deploy

# Or build and deploy in one command
npm run build && npm run deploy
```

### Other Commands

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run check`                   | Type-check and validate build                    |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `wrangler tail`                   | View real-time logs for all Workers              |

## Content Authoring

Blog posts are written in Markdown or MDX and stored in `src/content/blog/`. Each post includes frontmatter metadata:

```markdown
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-01
---
```

## License

This project is private and personal.

## Credit

This blog theme is based on the lovely [Bear Blog](https://github.com/HermanMartinus/bearblog/) design, adapted for Astro and Cloudflare Workers.
