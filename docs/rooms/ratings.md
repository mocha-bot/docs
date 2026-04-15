---
sidebar_position: 4
title: Room Ratings
description: Rate Mocha rooms from 1 to 5 stars — one vote per user per room — and see how ratings surface in /room info and the public directory.
keywords:
  - room rating
  - mocha ratings
  - discord room stars
---

# Ratings

Rooms can be rated 1 to 5 stars by any user who's in a connected channel. Ratings are the signal we surface on the [public room directory](/web/discover) and on each room's `/room info` embed, so healthy, useful rooms float to the top.

## Leaving a rating

1. In any channel that's connected to the room, run:
   ```md
     /room info
   ```
2. At the bottom of the embed, click **Rate this room** (secondary button).
3. A dropdown with 1–5 stars appears.
4. Pick a value. Mocha replies with *"You have rated **the room** with N stars"*.

The vote updates the room's average immediately.

## One rating per user per room

Each user has exactly one rating per room. If you click **Rate this room** again after already rating:

- The prompt changes to *"Looks like you've already rated this room with N stars. Feel free to update your rating if you'd like to make a change!"*
- Picking a new star value **overwrites** your previous rating.

There's no way to "un-rate" — picking 1 star is as low as it goes.

## Where ratings show up

- **`/room info`** — the **Rate** field in the embed shows the running average as a two-decimal number (e.g. `4.25`). A brand-new room with zero ratings shows `0.00`.
- **Public room directory** — [Discover Rooms](/web/discover) shows the average rating on every room card and lets you filter the list by rating.
- **Room page** — the [web room page](/web/room-page) surfaces the rating prominently next to the room title.

## How the average is calculated

It's a plain arithmetic mean — the sum of every active user's rating divided by how many users have rated. Changing your own rating updates the average in real time; there's no rolling window or decay.

## Who can rate

Anyone whose channel is connected to the room. You don't need to be the server owner, the channel owner, or the room owner. You just need to be present in a channel that's part of the room when you run `/room info`.

## See also

- [Rooms overview](/rooms/overview) — what a room is and how it's structured.
- [Discover Rooms](/web/discover) — how ratings influence public room discovery.
