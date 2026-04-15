---
sidebar_position: 2
---

# Replies & Pins

## Reply threading

Replying to a message in one channel is mirrored as a reply in every other channel in the room, pointing at the corresponding copy of the original message. Mocha keeps a per-message map of follower messages so the correct reply target is used on each side.

Reply threading only works while the original message is still cached — see the edit/delete window table on [Messages](/chat/messages). Once the cache expires, the reply becomes a normal message.

## Pinning

If you pin a message, the bot pins every follower copy of that message in the other channels in the room. Unpin actions are not mirrored.
