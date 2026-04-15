---
sidebar_position: 2
title: "/room — Mocha Bot Commands Reference"
description: Full reference for the /room slash command and its subcommands — create, join, disconnect, switch, info, and invite — with every parameter and option.
keywords:
  - /room command
  - mocha room
  - room create
  - room join
  - room invite
  - discord slash command
---

# Room

Room commands manage the room lifecycle for the current channel. A channel can only be joined to one room at a time. See [Rooms Overview](/rooms/overview) for the concept.

## Slash Commands

### Create

Create a new room in the current channel. If no `name` is given, the channel name is used. Supplying a `password` makes the room private.

**Parameters**

| Name              | Type    | Required | Description                                                          |
| ----------------- | ------- | -------- | -------------------------------------------------------------------- |
| `name`            | string  | no       | Room display name.                                                   |
| `description`     | string  | no       | Room description shown in `room info`.                               |
| `password`        | string  | no       | If set, the room is private — members must supply this to join.     |
| `personalization` | boolean | no       | Send messages with the original author's avatar/name via webhooks. Feature-gated — see [Personalization](/rooms/personalization). |

**Usage**

```md
  room create <name?> <description?> <password?> <personalization?>
```

### Join

Join an existing room by its ID. If the room is private, the `password` is required.

**Parameters**

| Name       | Type   | Required | Description                        |
| ---------- | ------ | -------- | ---------------------------------- |
| `id`       | string | yes      | Room ID (shown on `room info`).    |
| `password` | string | no       | Required when the room is private. |

**Usage**

```md
  room join <id> <password?>
```

### Disconnect

Leave the current room. The bot's webhook for this channel is automatically deleted.

**Usage**

```md
  room disconnect
```

### Switch

Disconnect from the current room (if any) and join another in a single command.

**Parameters**

| Name       | Type   | Required | Description                        |
| ---------- | ------ | -------- | ---------------------------------- |
| `id`       | string | yes      | Target room ID.                    |
| `password` | string | no       | Required when the target is private. |

**Usage**

```md
  room switch <id> <password?>
```

### Info

Show details about the room this channel is connected to: ID, name, description, channel count, personalization status, and average rating. The response includes:

- A select menu to inspect each joined channel (server, owner, booster level).
- **Leave / Delete this room** button (label depends on whether you're the owner).
- **Update room information** button — owner only.
- **Rate this room** button — 1-5 stars, see [Ratings](/rooms/ratings).

**Usage**

```md
  room info
```

### Invite

Manage invitation links for the current room. See [Invitations](/rooms/invitations) for the full concept. All invite subcommands require the channel to be connected to a room **and** the caller to be the room owner.

#### invite create

Generate an invitation code that others can use with `room invite join`. Requires the **Room Invitations** feature — upgrade your plan if disabled.

**Parameters**

| Name         | Type    | Required | Description                                                                                          |
| ------------ | ------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `alias`      | string  | no       | Custom code instead of an auto-generated hash. Requires the alias feature.                           |
| `max_usage`  | integer | no       | Number of times the invite can be used. Range `-1`–`100`. `-1` = unlimited (requires the unlimited feature). |
| `expires_in` | string  | no       | Choices: `1h`, `3h`, `6h`, `12h`, `1d`, `1w`, `-1` (Unlimited). Defaults to `1h`.                    |

**Usage**

```md
  room invite create <alias?> <max_usage?> <expires_in?>
```

#### invite join

Join a room using an invitation code or alias. The channel must not already be connected to another room.

**Parameters**

| Name   | Type   | Required | Description                   |
| ------ | ------ | -------- | ----------------------------- |
| `code` | string | yes      | Invitation code or alias.     |

**Usage**

```md
  room invite join <code>
```
