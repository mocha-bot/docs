---
sidebar_position: 1
---

# Overview

A **room** is Mocha's unit of cross-server communication. It is a bridge that links one or more Discord channels across different servers so that messages posted in any of them are broadcast to the others.

## Key properties

- **ID** — unique identifier generated on creation.
- **Name & description** — editable by the room owner via `room info → Update room information`.
- **Owner channel** — the channel that ran [`room create`](/commands/room#create). The owner has extra controls (update, kick other channels, delete).
- **Public vs private** — setting a `password` on creation makes a room private. Private rooms require the password on [`room join`](/commands/room#join).
- **Channels** — the list of channels currently connected to the room. Appears in `room info` and is visible on the [public room page](/web/room-page).
- **Rating** — aggregated 1-5 star score. See [Ratings](/rooms/ratings).

## Feature gating

Each room inherits a **feature set** from the owner server's plan. The gated features you will encounter are:

| Feature                  | What it controls                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------- |
| Personalization          | Whether messages are relayed through a webhook with the original user's avatar/name — see [Personalization](/rooms/personalization). |
| Welcoming                | Whether welcome messages are sent when a channel joins.                                                                 |
| Max channels             | Upper limit on channels that can be in the room.                                                                        |
| Max message TTL          | How long message edits/deletes remain synchronised.                                                                     |
| Max temporary TTL        | How long a `!tmp` message lives before auto-deletion.                                                                   |
| Room invitations         | Whether invitation codes can be created.                                                                                |
| Room invitation alias    | Whether custom aliases are allowed on invitations.                                                                      |
| Unlimited invitation     | Whether invitations can have `-1` (unlimited) usage or expiry.                                                          |

See [Pricing](/web/pricing) for which plan unlocks each feature.

## Lifecycle

1. A user runs `room create` in a channel — that channel becomes the **owner channel**.
2. Other users run `room join <id>` in their own channels to connect them.
3. Messages, edits, deletes, replies, pins, typing indicators, attachments, and stickers all propagate between connected channels.
4. Any member can `room disconnect` their own channel. The owner can kick other channels from `room info`.
5. When the owner channel disconnects, the room is deleted.
