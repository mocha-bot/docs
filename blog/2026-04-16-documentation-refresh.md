---
slug: documentation-refresh-2026
title: Documentation Refresh — Tutorials, Dark Theme, Search
authors: [mocha-team]
tags: [docs, release]
description: We rebuilt the Mocha documentation site from the ground up — new tutorials, dark theme, local search, and every feature documented with examples and troubleshooting.
---

The Mocha documentation site just got a full refresh. Every feature is now documented, the theme matches the main mocha-bot.xyz site, and there's a proper tutorial track for people getting started with the bot.

<!-- truncate -->

## What's new

### Tutorials

There's a new **Tutorials** section with four step-by-step walkthroughs that take you from "I've never used this bot" to "I'm moderating a cross-server room":

- **[Getting Started](/tutorials/getting-started)** — invite the bot, set up permissions, create your first room.
- **[Connect Two Servers](/tutorials/connect-two-servers)** — bridge two Discord servers end-to-end with a test checklist.
- **[Share a Room via Invitation](/tutorials/share-via-invite)** — the full invitation flow with aliases, usage caps, and expiration.
- **[Curate Your Room](/tutorials/curate-your-room)** — editing details, kicking channels, enabling personalization, deleting rooms.

### Full feature coverage

Every slash command, chat behavior, and room feature now has its own reference page with:

- Exact parameters with types and whether they're required.
- What the bot does under the hood (without dragging in implementation details).
- A troubleshooting table for the errors you're most likely to hit.
- Cross-links so you can hop from a command to the concept behind it.

That includes `/feedback` (new), the full `/room invite` subcommand group, typing indicators, reply threading, pins, ratings, and personalization.

### Dark theme to match the main site

The docs site now uses the same visual language as [mocha-bot.xyz](https://mocha-bot.xyz): pure black background, Plus Jakarta Sans, gold accents, glass surfaces, blurred navbar. Dark mode is the only mode — no more accidental light-mode flashes when following links out of the main site.

### Local search

There's a search bar in the navbar now. It indexes every page at build time — no third-party service, no approval process, instant results.

### SEO and sharing

- Per-page Open Graph and Twitter card metadata so shared links render properly in Discord, Slack, and Twitter.
- A site-wide schema.org `WebSite` JSON-LD block plus the automatic `BreadcrumbList` structured data Docusaurus ships.
- A generated sitemap and a `robots.txt` pointing at it.
- A custom 404 page with links to the tutorials, commands reference, and FAQ.

### Under the hood

- Docusaurus v3 (up from v2 RC).
- PWA enabled — you can install the docs as an app.
- CI runs `yarn build` and link-checks every pull request.
- Dependabot watches for updates so nothing rots.

## What's next

If you spot something missing, wrong, or confusing, let us know via the in-bot `/feedback` command or drop a message in the [support server](https://discord.mocha-bot.xyz/). This site is living documentation — the more you tell us where it breaks, the better it gets.
