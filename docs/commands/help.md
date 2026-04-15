---
sidebar_position: 1
---

# Help

The help command is the lowest-friction way to check whether Mocha is alive in a server and remember what commands it ships.

## Slash Commands

### Help

Run this in any channel where the bot is present. It replies with an ephemeral embed listing the available commands and links to the [Mocha website](https://mocha-bot.xyz).

**Usage**

```md
  /help
```

**What you'll see**

- An embed with the bot's name and avatar.
- A short description of what Mocha does.
- A direct link to [mocha-bot.xyz](https://mocha-bot.xyz) if you need the bot's public face.

The response is **ephemeral** — only you see it. Nobody else in the channel is pinged or cluttered.

## When to use it

- **First run** — to confirm slash commands are registered. If `/help` isn't in the autocomplete list, Discord hasn't finished syncing commands yet — give it a minute and reload with `Ctrl`/`Cmd` + `R`.
- **Quick reference** — when you can't remember the exact name of a subcommand like `/room invite join`.
- **Verifying the bot** — if the bot seems unresponsive, `/help` is the cheapest ping to check that it's still listening.

## See also

- [Commands overview](/category/commands) — every slash command Mocha understands.
- [Getting Started](/tutorials/getting-started) — the full onboarding walkthrough.
