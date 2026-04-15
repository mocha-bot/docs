---
sidebar_position: 3
---

# Typing Indicators

When you start typing in a connected channel, Mocha forwards the typing indicator to every other channel in the same room. The sender's own channel and the bot's own typing events are excluded to prevent loops. There is no configuration — the indicator is sent for as long as Discord reports you as typing.
