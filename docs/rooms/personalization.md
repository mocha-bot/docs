---
sidebar_position: 3
title: Room Personalization
description: Personalization relays messages through per-channel webhooks so each user's real avatar and display name appear on every bridged server. Learn how to enable it.
keywords:
  - mocha personalization
  - discord webhook
  - custom avatar
  - cross server user
---

# Personalization

By default, relayed messages are posted by the Mocha bot itself and prefixed with the server + user tag. With **personalization** enabled, Mocha instead sends messages through a per-channel webhook using the **original author's** Discord avatar and display name, so conversations feel native across servers.

## Enabling

Pass `personalization: true` to [`room create`](/commands/room#create):

```md
  room create personalization:true
```

The room owner can toggle the flag later. Personalization requires the **Personalization** feature on the room's plan — see [Pricing](/web/pricing). On the free tier and Starter/Premium plans it is disabled.

## How it works

- When a channel joins a personalized room, Mocha reuses an existing bot webhook on that channel or creates one named after the bot.
- Each relayed message is posted via `WebhookExecute` with the sender's `GlobalName` and avatar URL.
- If the webhook is missing (for example, because the server didn't grant **Manage Webhooks**), Mocha falls back to a normal bot message with the standard `[ Server ][ user ] >>` prefix — nothing is lost.
- When a channel disconnects, its webhook is deleted.

:::note Needs "Manage Webhooks"
Personalization only works on servers where Mocha was granted **Manage Webhooks**. The fallback keeps the room functional for servers that didn't grant it, but those channels won't show per-user avatars. There's no warning — if you're running a mixed room, some sides will have personalization and others won't.
:::

## Things to know

- Per-user edits and deletes still work: Mocha tracks the webhook that sent each copy and edits/deletes via that webhook.
- Attachments, stickers, reply threading, and `!tmp` all work with personalization on.
- `@mentions` are never parsed by the bot, regardless of personalization — intentional, so relayed messages can't ping people across servers.
