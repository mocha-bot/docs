---
sidebar_position: 2
---

# Frequent Searches

## How do I invite Mocha to my server?

Go to the [website](https://mocha-bot.xyz), click on `Taste a Mocha` and follow the on-screen instructions. Afterwards, you can start using Mocha in your server.

## How do I create a private room?

Pass a `password` to [`room create`](/commands/room#create):

```md
  room create password:my-secret
```

Anyone joining the room will need to pass the same password on [`room join`](/commands/room#join).

## What is the `!tmp` prefix?

Prefixing a message with `!tmp` marks it as temporary. Mocha broadcasts it like any other message and then deletes it from every channel once the room's temporary TTL elapses. See [Mentions](/chat/messages#mentions).

## Can I send a message to only one server in a room?

Yes — start the message with `#(ServerName)`. The message is only relayed to the channels belonging to that server. Multiple server prefixes can be chained, and `!tmp` can be combined with it. See [Mentions](/chat/messages#mentions).

## Why didn't my edit or delete sync?

Message edits and deletes only propagate while the original message is still within the room's edit/delete window. The window depends on the room's plan — see [Pricing](/web/pricing). After it expires, changes only affect the original message.

## How do invitations work?

Room owners can generate a code with [`room invite create`](/commands/room#invite-create) and share it. New channels join with [`room invite join <code>`](/commands/room#invite-join). Codes can be time-limited, usage-limited, and (on supported plans) given a custom alias. See [Invitations](/rooms/invitations).

## Why can't I rate or kick channels?

Rating requires the channel to be connected to the room. Kicking other channels is only available from the **owner channel** — the channel that ran `room create`.
