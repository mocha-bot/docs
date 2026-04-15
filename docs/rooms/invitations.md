---
sidebar_position: 2
---

# Invitations

Invitations let a room owner hand out a short code that other channels can redeem with [`room invite join`](/commands/room#invite-join) instead of typing a room ID and password. They are created with [`room invite create`](/commands/room#invite-create).

## Requirements

- You must be in the **owner channel** of the room (the channel that ran `room create`).
- The room must have the **Room Invitations** feature enabled — see [Pricing](/web/pricing).

## Parameters

| Option       | Description                                                                                                   | Feature gate                     |
| ------------ | ------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| `alias`      | Custom, human-readable code instead of an auto-generated hash.                                                | Requires **Invitation alias**.   |
| `max_usage`  | Number of times the code can be redeemed. Accepts `-1`–`100`. `-1` means unlimited.                           | `-1` requires **Unlimited option**. |
| `expires_in` | Lifetime of the code. Choices: `1h`, `3h`, `6h`, `12h`, `1d`, `1w`, `Unlimited`. Defaults to `1h` if omitted. | `Unlimited` requires the same gate. |

## Result

On success Mocha replies with an embed containing:

- The room name.
- The expiration date.
- The remaining usage count (or `unlimited`).
- The ready-to-copy command: `/room invite join code:<code>`.

Share that command with the people you want to invite.

## Joining with an invitation

From any channel that is **not** already in a room, run:

```md
  room invite join <code>
```

If the code is valid (not expired, still has uses left, and the channel is free), the bot joins the channel to the room and sets up its webhook. Already-joined channels must `room disconnect` first.
