---
sidebar_position: 3
---

# Typing Indicators

One of the little touches that makes Mocha rooms feel like a single conversation: when you start typing, the other channels in the room see "Mocha Bot is typing..." too. This page explains exactly how it works and where its limits are.

## What happens

1. Discord tells Mocha that a user started typing in a connected channel.
2. Mocha confirms the channel is in a room and fetches the list of sibling channels.
3. For each sibling (excluding the one you're typing in), it calls Discord's **Trigger Typing Indicator** API.
4. Discord's standard 10-second typing TTL takes over — the indicator clears itself after that.

There's no configuration. It's always on for every connected channel.

## What you'll see

- **Indicator name** — always "Mocha Bot" (Discord attributes triggered typing to the bot, not the original user).
- **Duration** — follows Discord's default: ~10 seconds, or until Mocha sends a real message, whichever comes first.
- **Cross-server** — same behavior no matter how many channels are in the room.

## What's excluded

To keep the typing event clean and prevent loops:

- **Your own channel** never echoes the indicator back to itself.
- **The bot's own typing** events are ignored (a previous version of the relay did forward them, which caused a typing feedback loop).
- Channels that aren't in any room produce no typing events.

## Why is the avatar always the bot?

Typing indicators in Discord are authored by whoever calls the `Trigger Typing Indicator` endpoint. Since that's Mocha on the receiving side, the receiving channel sees "Mocha Bot is typing..." rather than the real user. There is no API to impersonate a different user for typing indicators, even with [personalization](/rooms/personalization) turned on (personalization applies to message authorship, not typing events).

## Troubleshooting

| Symptom                                                  | Likely cause                                                          |
| -------------------------------------------------------- | --------------------------------------------------------------------- |
| Typing indicator doesn't show up on the other channel    | The channels aren't actually in the same room. Run `/room info` to double-check. |
| Indicator appears but message never arrives              | You started typing but never pressed enter, **or** the send failed due to permissions. Check Mocha's **Send Messages** permission. |
| Indicator lingers after the user stops                   | Discord's 10-second TTL is still running. It'll clear itself.          |
