---
sidebar_position: 3
title: Share a Mocha Room via Invitation
description: Generate invitation codes with custom aliases, usage limits, and expirations, share them with anyone, and let them join your Mocha room without copying IDs and passwords.
keywords:
  - mocha invitation
  - discord room invite
  - invite code
  - room invite alias
  - mocha share room
---

# Share a Room via Invitation

Sharing a room ID works fine between two servers. Once you're onboarding five, ten, or fifty, invitations are cleaner: one short code, optional time limit, optional usage cap, and a friendly alias. This tutorial shows you the whole flow.

## Before you start

- You must be in the **owner channel** of the room (the one that ran `/room create`).
- The room's plan must have **Room Invitations** enabled. Free-tier rooms have this feature **off** — upgrade via [Pricing](/web/pricing) if the bot rejects the command.

## Step 1 — Create an invitation

The simplest possible invite lasts for one hour and can be used an unlimited number of times in that hour:

```md
  /room invite create
```

Mocha responds with an embed containing:

- 🏠 **Room Name** — the room the invite belongs to.
- ⏰ **Expires In** — an absolute timestamp.
- 📊 **Max Uses** — how many times the code can still be redeemed.
- 📋 **Invitation Command** — the copy-pasteable command guests should run.

### Want something less anonymous?

Give the invite a human-readable alias (requires the **Invitation alias** feature):

```md
  /room invite create alias:hangout-2026
```

Now your guests will run `/room invite join code:hangout-2026` instead of a random hash.

### Want to cap attendance?

Limit the number of redemptions:

```md
  /room invite create alias:hangout-2026 max_usage:10
```

Once 10 channels have joined, the code stops working.

### Want it to live longer than an hour?

Use the `expires_in` choice:

```md
  /room invite create alias:hangout-2026 max_usage:10 expires_in:1w
```

Available choices:

| Value         | Meaning            |
| ------------- | ------------------ |
| `1h` (default) | 1 hour            |
| `3h`          | 3 hours            |
| `6h`          | 6 hours            |
| `12h`         | 12 hours           |
| `1d`          | 1 day              |
| `1w`          | 1 week             |
| `Unlimited` (`-1`) | No expiry (gated feature) |

### Want unlimited redemptions?

Set `max_usage` to `-1`. This also requires the **Unlimited option** feature:

```md
  /room invite create alias:public-hangout max_usage:-1 expires_in:1w
```

## Step 2 — Share the command

The invite embed's **Invitation Command** field already contains the exact string guests need:

```md
  /room invite join code:hangout-2026
```

Paste that anywhere — Discord, a forum, a tweet. Guests just copy the whole line into their own channel.

## Step 3 — Guests redeem the code

In a channel that is **not already connected** to another room, a guest runs the command. If the code is valid (not expired, still has uses left, channel free), Mocha responds with:

```
🎉 Successfully joined room **Weekly Hangout** using invitation! Welcome aboard! 🚀
```

The channel is now bridged into the room and will receive messages immediately.

## Step 4 — Keep an eye on usage

Run `/room info` in the owner channel from time to time. The **Total Channels** field tells you how many guests have joined. The invitation's remaining uses are not shown in `room info` — you can only see them from the embed you got on creation, so keep that message somewhere you can find it (or regenerate a new invite).

## Step 5 — Retiring an invitation

There is no "delete invite" command. Invitations retire themselves when:

- They hit their `max_usage` limit.
- They reach their `expires_in` timestamp.

If you need to cut off redemptions **before** either happens, the simplest workaround is to set a short `max_usage` next time. Sharing the code more widely than you meant to? Create a new room and migrate — see [Curate your room](/tutorials/curate-your-room).

## Troubleshooting

| Message from the bot                                                            | Cause                                                                                  |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| `❌ This channel is not connected to any room.`                                  | You're trying to create an invite from a channel that has no room. Run `/room create`. |
| `🚫 Only the room owner can create invitations for this room!`                   | You're not in the **owner channel**. Go to the channel that ran `room create`.         |
| `❌ Room invitations are not enabled for current plan.`                          | The room's plan doesn't include invitations. See [Pricing](/web/pricing).             |
| `❌ Room invitation alias is not enabled for current plan.`                      | You supplied `alias:` on a plan that doesn't include aliases.                          |
| `❌ Room invitation unlimited usage is not enabled for current plan.`            | You supplied `max_usage:-1` on a plan that doesn't allow it.                           |
| `❌ This channel is already connected to room **<name>**.`                       | The guest's channel is in another room. They must `/room disconnect` first.            |
| `❌ Please provide a valid invitation code!`                                     | Missing `code:` parameter.                                                             |
| `❌ Failed to join room using invitation: …`                                     | Code is expired, used up, or typed wrong.                                              |
