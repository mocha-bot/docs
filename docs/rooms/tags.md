---
sidebar_position: 5
title: Room Tags
description: Assign category tags to your Mocha room so members can find it by topic on the Discover page. Only the room owner can manage tags.
keywords:
  - mocha room tags
  - discord room categories
  - room tag management
  - mocha discover
---

# Tags

Tags let you label a room with topic categories — for example `gaming`, `study`, or `dev`. Tagged rooms appear under those categories on the [Discover page](https://mocha-bot.xyz/search), making them easier for new members to find.

## Who can manage tags

Only the **room owner** (the channel that ran `room create`) can assign or remove tags. Any member can view the current tags on a room.

## Slash Commands

All tag commands operate on the room the current channel is connected to. The channel must be joined to a room for any of them to work.

### room tag list

Show the tags currently assigned to this room.

**Usage**

```md
  /room tag list
```

The response is **ephemeral** — only you see it. It shows each tag's name and description in a compact embed. If no tags are assigned, the embed says so.

### room tag set

Assign one or more tags from the available tag list. **Owner only.**

**Usage**

```md
  /room tag set
```

Mocha responds with a select menu containing all available tags. Choose one or more and confirm. Tags are cumulative — setting tags does not replace tags assigned in a previous call, it adds to them.

:::note
Tags are created by Mocha administrators, not by room owners. If the select menu is empty, no tags have been created for your instance yet.
:::

### room tag remove

Remove one or more tags currently assigned to this room. **Owner only.**

**Usage**

```md
  /room tag remove
```

Mocha responds with a select menu listing only the tags currently on the room. Choose the ones to remove and confirm.

## See also

- [Rooms Overview](/rooms/overview) — key room properties and lifecycle.
- [Web / Discover](/web/discover) — how tags surface rooms on the public search page.
