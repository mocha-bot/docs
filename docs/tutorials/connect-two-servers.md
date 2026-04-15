---
sidebar_position: 2
title: Connect Two Discord Servers
description: A complete walkthrough for bridging two Discord servers with Mocha — create a room on one side, join from the other, send test messages, and troubleshoot common permission issues.
keywords:
  - discord cross server chat
  - bridge discord servers
  - connect two discord servers
  - mocha room tutorial
  - discord multi server bot
---

# Connect Two Servers

This tutorial walks you through the full flow of bridging two Discord servers with Mocha — from both sides. Assumes you've already [invited the bot](/tutorials/getting-started) to **both** servers.

## Scenario

- **Server A** is your own server. You'll host the room here.
- **Server B** belongs to a friend. They'll join the room from one of their channels.
- Both of you want messages typed in either channel to appear in the other.

## Step 1 — On Server A: create the room

In the channel you want to bridge, run:

```md
  /room create name:Weekly Hangout description:Shared lounge between Server A and Server B
```

Mocha replies with the room ID. Write it down.

:::tip
If you want the conversation to be invite-only (for example, you don't want anyone stumbling into it from the web directory), add a password:
```md
  /room create password:coffee-talk
```
Anyone joining will need to pass the same password on `/room join`.
:::

## Step 2 — Share the room ID with Server B

Send the room ID (and password, if you set one) to your friend on Server B through any channel that works — DM, voice chat, another server. It's the one piece of data they need.

## Step 3 — On Server B: join the room

In the channel they want to bridge, your friend runs:

```md
  /room join id:<ROOM-ID>
```

(If there was a password, they add `password:<PASSWORD>`.)

Mocha replies with:

```
room joined with id: <ROOM-ID>
```

## Step 4 — Confirm the bridge

On **either** side, run:

```md
  /room info
```

The **Total Channels** field should now say `2`. The select menu below the embed lets you inspect the other server's channel.

## Step 5 — Send a test message

Type a plain message in Server A's channel. Within a second you should see it appear in Server B's channel, prefixed like this:

```
[ Server A ][ alice#0001 ] >> Hey from Server A!
```

The same thing happens in reverse when Server B sends a message.

## Step 6 — Try the core message features

While you're here, try each of these so you know what works:

- **Reply** to a relayed message → the reply should mirror on the other side and point at the right target. See [Replies & Pins](/chat/reactions-replies).
- **Edit** your message → the edit should propagate to the copy on the other server (within the [edit window](/chat/messages#edit-message)).
- **Delete** your message → the copy on the other server should disappear too.
- **Type** something without sending → the other channel should show "Mocha Bot is typing..." through the [typing indicator](/chat/typing).
- **Upload an image** → should appear as an attachment on the other side.

If any of those don't work, check Mocha's channel permissions in both servers first (see the [Getting Started permissions cheat sheet](/tutorials/getting-started#permissions-cheat-sheet)).

## Step 7 — Choose who leaves when

Either channel can disconnect itself at any time:

```md
  /room disconnect
```

If **Server B** disconnects, Server A stays and the room continues to exist — the counter drops back to `1`.

If **Server A** (the owner channel) disconnects, the whole room is deleted and Server B's channel is detached too.

## Common pitfalls

- **"channel already joined in a room"** on Server B → that channel is already in another room. Use `/room disconnect` first, or pick a different channel.
- **Relayed messages show the bot's name instead of the sender** → that's the default. To show the real author, turn on [personalization](/rooms/personalization) when creating the room (plan-gated).
- **One server sees messages, the other doesn't** → check Mocha's **Send Messages** permission in the missing side's channel.
- **Server owners see `room info` but can't click Update** → only the owner channel (the one that ran `room create`) can update room info.

## Next steps

- Bridge more than two servers at once using [invitations](/tutorials/share-via-invite) so you don't have to share the ID manually every time.
- Let people find your room publicly: [Discover Rooms](/web/discover).
- Take control of a messy room: [Curate your room](/tutorials/curate-your-room).
