---
sidebar_position: 4
title: Curate and Moderate Your Mocha Room
description: Manage a busy Mocha room end-to-end — edit details, inspect connected channels, kick misbehaving servers, enable personalization, leave ratings, and safely delete the room.
keywords:
  - moderate discord room
  - manage mocha room
  - kick discord channel
  - mocha personalization
  - discord room admin
---

# Curate Your Room

Running a busy, multi-server room takes a few admin moves the first tutorial doesn't cover: editing the room details so newcomers know what it's for, kicking a channel that's causing trouble, and rating other people's rooms. This guide walks through each.

## Before you start

You need to be in the **owner channel** of the room — the one that originally ran `/room create`. All of the actions on this page are owner-only.

## Edit the room name and description

### When to do it

The room name and description show up everywhere: in `/room info`, in [Discover Rooms](/web/discover), and on the [public room page](/web/room-page). If you set your room up quickly with default values, now's the time to clean them up so newcomers know what they're joining.

### How to do it

1. In the owner channel, run `/room info`.
2. Click **Update room information**.
3. A modal opens with two fields:
   - **Room Name** — 3 to 30 characters.
   - **Room Description** — up to 2000 characters.
4. Fill them in and submit. Mocha replies with **Room has been updated**.

The change is live immediately. Next time anyone runs `/room info`, they'll see the new values.

## Inspect who's in your room

In the owner channel, run `/room info`. Under the embed you'll see a **select menu** — pick a channel from it and Mocha will reply with a second embed showing:

- Server ID and name
- Server owner (Discord tag)
- Channel ID and name
- The server's current **Booster Status**

This is the primary tool for figuring out *who* is on the other side of the bridge.

## Kick a channel

### When to do it

- A channel joined the room by accident and is spamming.
- A server is repeatedly breaking your rules.
- You're shutting down one leg of the bridge without killing the whole room.

### How to do it

1. In the owner channel, run `/room info`.
2. From the select menu, pick the channel you want to kick.
3. When the channel details embed appears, a red **Kick this room** button appears underneath.
4. Click it. Mocha confirms with *"Channel X from Y's server is kicked from the room"*.

:::note
The kick button is **only** visible when you inspect a channel that isn't your own owner channel — you can't kick yourself this way (use `/room disconnect` instead).
:::

The kicked channel's webhook is left alone; its owner can run `/room disconnect` to clean up the bot's webhook if they like.

## Turn on personalization

Personalization makes relayed messages appear under each user's real Discord avatar and display name instead of the bot's. It's great for rooms where the conversation should feel native on every server. Details and limitations live on the [Personalization](/rooms/personalization) page, but the quick version:

- It can only be enabled at **creation time** via `/room create personalization:true`.
- It requires the **Personalization** feature, which is a Pro-plan feature — see [Pricing](/web/pricing).
- If a server hasn't granted the bot **Manage Webhooks**, that side silently falls back to plain relayed messages.

If you need to turn personalization on for an existing room, the practical approach is to migrate: create a new room with `personalization:true`, invite everyone over with an [invitation](/tutorials/share-via-invite), then delete the old one.

## Rate rooms you visit

This works from **any** connected channel (not just owner channels):

1. Run `/room info`.
2. Click **Rate this room**.
3. Pick a star count from the dropdown.

Your rating updates the room's average immediately. Each user has exactly one rating per room — pick a new value any time to update yours. See [Ratings](/rooms/ratings) for more.

## Delete the room

There is no dedicated delete command. Instead, run `/room disconnect` in the **owner channel** — this removes the owner, which deletes the room and automatically detaches every other channel that was connected.

:::warning
This is irreversible. The room ID is gone, any invitation codes pointing at it stop working, and guests will need to join a fresh room next time. If you only want to step away temporarily, consider handing off the room or just pausing messages.
:::

## Troubleshooting

| Problem                                                            | Fix                                                                                     |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| **Update room information** button is missing                      | You're not in the owner channel. Run `/room info` from the channel that created the room. |
| **Kick this room** button doesn't appear in the channel details    | You're inspecting the owner channel itself, or you're not running `/room info` from the owner channel. |
| Personalization is on, but relayed messages still show the bot    | That server didn't grant **Manage Webhooks**. Ask the admin to grant it and try again. |
| Ratings not showing in `/room info`                                | Ratings only show if at least one user has rated; the field displays `0.00` otherwise. |
