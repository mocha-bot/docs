---
sidebar_position: 4
title: "/bind — Link Your Discord Account to Mocha"
description: Use /bind to connect your Discord account to your Mocha SSO account, enabling access to the dashboard, subscriptions, and account-gated features.
keywords:
  - /bind command
  - mocha sso
  - link discord account
  - mocha account
  - discord login
---

# Bind

Link your Discord identity to your Mocha account. Required to access the [dashboard](https://dash.mocha-bot.xyz), manage subscriptions, and use account-gated features.

## Slash Commands

### Bind

Run this in any channel where the bot is present. The response is **ephemeral** — only you see it.

**Usage**

```md
  /bind
```

**What you'll see**

An embed titled **Connect Your Account** with two buttons:

| Button | When to use |
| ------ | ----------- |
| **Login / Register** | You don't have a Mocha account yet. Opens the SSO page to create one using Discord OAuth. |
| **Link Discord to Existing Account** | You already have a Mocha account (created with Google or another method) and want to attach your Discord identity to it. |

Both flows redirect back to your dashboard profile page after completion.

## Why bind your account?

- **Dashboard access** — [dash.mocha-bot.xyz](https://dash.mocha-bot.xyz) uses Mocha SSO. Without a linked account you cannot log in.
- **Subscriptions** — plan purchases are tied to your Mocha account. Binding makes sure payments apply to the right profile.
- **Private room gate** — some premium features require the subscribing user to have their Discord account linked.

## See also

- [/subscribe](/commands/subscribe) — view and upgrade your server's plan.
- [Pricing](/web/pricing) — compare plans on the web.
