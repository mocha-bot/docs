---
sidebar_position: 2
title: Replies and Pins Across Servers
description: How Mocha mirrors Discord replies with correct threading and pin actions across every channel in a room, plus the caveats around cache TTL and permissions.
keywords:
  - discord reply threading
  - pinned messages
  - mocha replies
  - cross-server replies
---

# Replies & Pins

Beyond broadcasting the raw content of a message, Mocha preserves two Discord affordances across the bridge: **reply threading** and **pins**. This page describes how they behave and where the edges are.

## Reply threading

### What happens

When you reply to a message in a connected channel:

1. Mocha looks up the message you're replying to in its reply-to cache.
2. For each other channel in the room, it finds the **corresponding copy** of that message (not the one you clicked on — the one that was delivered to that channel).
3. It sends your reply as a native Discord reply pointing at that copy.

The result: every server in the room sees the reply threaded to the right message, not just a floating comment.

### What it relies on

- The original message must still be in the **reply-to cache**. Mocha keeps it for as long as the room's **Max message TTL** allows — see the [edit/delete window table](/chat/messages#edit-message) for the current values.
- If the original message has fallen out of cache, the reply is delivered as a plain message (no threading).
- Reply threading works the same way with and without [personalization](/rooms/personalization).

### Try it

1. Send a message in channel A of a room.
2. In channel B, click **Reply** on the copy that arrived there.
3. Send your reply — you should see it threaded to the original on **both** sides.

## Pins

### What happens

When you pin a message in any connected channel, Mocha pins every follower copy of it in the other channels in the room. Unpin actions are **not** mirrored — if you remove a pin on one side, the other side's pin stays.

### What it relies on

- The follower copies must still be tracked. If the room's message TTL has elapsed, Mocha no longer knows which messages to pin and the pin stays local to the channel you acted in.
- Mocha needs **Manage Messages** in every channel it's pinning into. If the permission is missing in one server, that side silently fails to pin — the bot logs it but the user doesn't see an error.
- Discord limits every channel to 50 pins. If a channel is already at the limit, the new pin won't go through.

### Try it

1. Pin any recent relayed message on one side.
2. Check the pinned messages list on the other side — the same message should be there.

## Not yet mirrored

For transparency, a few things Discord supports that Mocha **does not** propagate:

- **Reactions** — adding or removing an emoji reaction only affects the local message.
- **Threads (Discord's native threads)** — Mocha relays into the parent channel only.
- **Forum posts** — Mocha relays the post content but doesn't mirror tags or the thread structure.
- **Unpin** — one-way pin only.

If you need any of these, file a [feedback](/commands/feedback) request — we track demand that way.

## Troubleshooting

| Symptom                                    | Likely cause                                                                                           |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| My reply comes through as a normal message | The original message has aged past the room's **Max message TTL**.                                      |
| Pin works on one side, fails on another    | Missing **Manage Messages** permission on the failing side, or that channel has already hit 50 pins.   |
| I unpinned but the pin persists elsewhere  | Expected — unpin is not mirrored.                                                                      |
