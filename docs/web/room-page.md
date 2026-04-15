---
sidebar_position: 2
title: Mocha Room Page
description: Every public Mocha room has a page at mocha-bot.xyz/room/slug showing description, rating, tags, and a join modal with the room code you paste into Discord.
keywords:
  - room page
  - mocha room
  - join room code
---

# Room Page

Every public room has a page at `mocha-bot.xyz/room/<slug>`. You reach it by tapping a card from [Discover Rooms](/web/discover) or by following a share link.

## What's on the page

- **Header** — room name, average rating, number of channels joined.
- **Description** — long-form text set by the room owner (via [`room info → Update`](/commands/room#info)).
- **Tags** — categories the owner has attached to the room.
- **Details panel** — created date, rating breakdown, channel count.
- **Join button** — opens a modal with the room's code. Tap to copy, then run `room join <id>` in Discord.

On mobile the details panel is tucked into a drawer so the room description stays the focus.
