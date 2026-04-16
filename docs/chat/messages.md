---
sidebar_position: 1
title: Messages, Formatting, and Mentions
description: How Mocha relays messages across Discord servers — supported formatting, images, links, stickers, edits, deletes, and the #(Server) and !tmp prefix tricks.
keywords:
  - mocha messages
  - discord message formatting
  - discord cross server chat
  - temporary messages
  - server mentions
---

# Messages

Once a channel is connected to a room, every message posted there is broadcast to the other channels in the same room. This page lists which parts of Discord's message experience are supported.

## Send Message

### Text Chat & Formatting

You can use any normal text chat like usual. For formatting features (click [here](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-) for Discord formatting help), not all of them work the same way as in Discord. Here is the list of supported formatting (supported items are checked):

- [x] Bold
- [x] Italic
- [x] Underline
- [x] Strikethrough
- [x] Code Blocks (single line)
- [x] Code Blocks (multi line)
- [ ] Block Quotes
  - Not working the same way as in Discord; will be fixed in the future.
  - For now, Block Quotes only work if the quoted text is not on the first line.
- [x] Spoiler

### Send Image

You can send images either by uploading the file or by pasting an image URL.

### Send Link

Sending a URL broadcasts it as a clickable link. Link embeds are included if the link supports them.

### Send Stickers

Stickers attached to a message are rebroadcast to the other channels in the room.

## Edit Message

Editing a message edits its copies in every other channel in the room. There is a time limit: a message can only be edited while its cached interaction is still alive, controlled by the room's **Message Editing** window. The window depends on the room's plan:

| Plan    | Edit window |
| ------- | ----------- |
| Free    | Until cache expires |
| Starter | 24 hours    |
| Premium | 7 days      |
| Pro     | 14 days     |

After the window expires the original edit will no longer propagate to followers.

:::warning
The window is measured from when the message was originally sent, not when you start editing. If you open the edit dialog just before the window closes and hit save a minute later, Mocha has already forgotten about the message and your change will only affect the original channel.
:::

## Delete Message

Deleting a message deletes every copy of it in the room, under the same time-window rules as editing.

## Mentions

Mocha recognises two prefixes at the **start** of a message to change how it is broadcast.

### Target specific servers — `#(ServerName)`

Begin a message with `#(ServerName)` to send it only to the channels belonging to the listed server(s). Multiple servers can be targeted by chaining prefixes.

```md
  #(Acme) Hi Acme folks only
```

Any `#(ServerName)` prefixes are stripped from the content before sending.

### Temporary messages — `!tmp`

Begin a message with `!tmp` to mark it as temporary. After the room's **temporary TTL** elapses, the message is deleted from every channel automatically — including the one you sent it from.

```md
  !tmp this vanishes in a minute
```

### Combine both

Both prefixes can be combined by placing `!tmp` right after the server mention(s):

```md
  #(Acme)!tmp only Acme sees this, and it self-destructs
```
