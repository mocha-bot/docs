---
sidebar_position: 1
title: Getting Started with Mocha
description: Invite the Mocha Discord bot to your server, configure the right permissions, create your first cross-server room, and verify the setup — all in under five minutes.
keywords:
  - mocha getting started
  - invite mocha bot
  - discord bot setup
  - create discord room
  - mocha permissions
---

# Getting Started

This tutorial walks you through everything you need to get Mocha running in a Discord server — from inviting the bot to sending your first cross-server message. It takes **about 5 minutes**.

## What you'll learn

- How to invite Mocha to a Discord server.
- What permissions the bot needs and why.
- How to create your first room.
- How to verify the bot is working end-to-end.

## What you need

- A Discord server where you have **Manage Server** permission.
- One text channel you're happy to use as the first **room owner channel**.
- A couple of minutes.

## Step 1 — Invite Mocha to your server

1. Open [mocha-bot.xyz](https://mocha-bot.xyz) in your browser.
2. Click **Taste a Mocha** (this is the bot invite link).
3. Select the server you want to add the bot to.
4. On the permission screen, **keep all the requested permissions enabled** and click **Authorize**. Mocha needs every permission on that screen — cutting anything will break features like message sync, webhooks, or mentions.
5. Solve the captcha if Discord asks for one.

When you're done, the bot will show up in your server member list and be ready to receive slash commands.

:::info Why keep every permission?
Mocha's relay pipeline uses nearly every permission Discord exposes for a chat bot — cutting one usually breaks a subtle feature (personalization falls back to plain text, edits stop propagating, attachments get stripped). The safe default is to grant the full set.
:::

### Permissions cheat sheet

| Permission          | Why Mocha needs it                                                   |
| ------------------- | -------------------------------------------------------------------- |
| Read Messages       | To receive the messages it needs to relay.                           |
| Send Messages       | To post relayed messages into each connected channel.                |
| Embed Links         | To render link previews and `room info` embeds.                      |
| Attach Files        | To rebroadcast uploaded images and files.                            |
| Manage Messages     | To delete and edit copies when you edit/delete the original.         |
| Manage Webhooks     | To enable [personalization](/rooms/personalization).                 |
| Use External Emojis | To relay custom emoji without them turning into `:name:` text.       |
| Read Message History | To correctly thread replies across channels.                         |

## Step 2 — Pick a channel for your room

Choose **one** channel in your server that will own the room. This is the **owner channel**: the one that ran `room create`. The owner channel has extra powers (it can update the room, kick other channels, and deleting the room means disconnecting it).

A good first pick is a dedicated `#mocha` or `#lobby` channel so you don't mix relayed messages with your existing conversations while you're learning.

## Step 3 — Create your first room

In that channel, type:

```md
  /room create
```

Discord's slash command UI will show the `name`, `description`, `password`, and `personalization` options. For your first run you can leave them all blank — the room name defaults to the channel name.

Press **Enter**. Mocha replies with:

```
room created with id: <ROOM-ID>
```

Copy that ID — it's what other channels will use to join.

## Step 4 — Confirm the room is live

Run:

```md
  /room info
```

You should see an embed showing:

- The **Room ID** you just got.
- The **Name** (your channel name).
- **Total Channels: 1**.
- **Personalization**: Disabled (we didn't turn it on).
- **Rate**: `0.00` — nobody has rated the room yet.

Good. Your server is now hosting its first Mocha room.

## Step 5 — Invite another channel to the party

You have two ways to get another channel into this room:

**Option A — share the ID directly.** Tell the other channel's operator to run:

```md
  /room join id:<ROOM-ID>
```

**Option B — create an invitation code.** This is covered in [Share a room via invitation](/tutorials/share-via-invite) and is the friendlier option if you're sharing with many servers.

Once the other channel joins, run `/room info` again — **Total Channels** should now be `2`. Send any message in either channel and watch it appear in the other.

## What to do next

- Try it with a friend's server: see [Connect two servers](/tutorials/connect-two-servers).
- Learn how mentions and temporary messages work: [Messages](/chat/messages).
- Customise how relayed messages look: [Personalization](/rooms/personalization).
- Share rooms with multiple servers at once: [Share a room via invitation](/tutorials/share-via-invite).

## Troubleshooting

| Symptom                                          | What's wrong                                                                                                      |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| `/room` doesn't appear in the slash command list | Discord sometimes takes up to a minute to refresh commands. Reload the client (Ctrl/Cmd+R).                       |
| `room create` replies `channel already joined in a room` | The channel is already part of a room. Run `/room info` to see which, then `/room disconnect` to free it. |
| Messages aren't relayed                          | Check that Mocha still has **Send Messages** in every connected channel, including the other servers.            |
| Relayed messages have no custom author name      | Personalization isn't on — it's not the default, and it's gated behind the Pro plan. See [Personalization](/rooms/personalization). |
