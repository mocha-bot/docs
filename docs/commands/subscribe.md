---
sidebar_position: 3
title: "/subscribe — View and Upgrade Your Server Plan"
description: Use /subscribe to check your server's current plan and active features, and to browse available premium plans with direct checkout links.
keywords:
  - /subscribe command
  - mocha premium
  - mocha plans
  - discord bot subscription
  - upgrade mocha
---

# Subscribe

Check your server's current plan and browse available premium plans — all without leaving Discord.

## Slash Commands

### Subscribe

Run this in any channel where the bot is present. The response is **ephemeral** — only you see it.

**Usage**

```md
  /subscribe
```

**What you'll see**

1. **Current Server Plan** embed — lists every premium feature currently active on your server. If no plan is active the embed describes the Free plan and prompts you to upgrade.
2. **Available Plans** embed (if plans are configured) — shows each active plan with its name, price, and included features.
3. **Subscribe buttons** — one button per plan, each linking directly to that plan's checkout page. If no plans have a checkout URL configured, a generic **View Plans** button links to the dashboard pricing page.

**Active features shown**

| Feature key                      | Display label                  |
| -------------------------------- | ------------------------------ |
| `private_room`                   | Private Rooms                  |
| `room_invitation`                | Room Invitations               |
| `room_invitation_alias`          | Custom Invitation Aliases      |
| `room_invitation_unlimited_option` | Unlimited Invitation Uses    |
| `personalization`                | Personalized Messages          |
| `welcoming`                      | Welcome Messages               |
| `max_channels`                   | Extended Channel Limit         |

Only features that are **active** on your server appear in the embed.

## When to use it

- **Check your plan** — quickly see which features your server has without opening a browser.
- **Upgrade** — hit a feature gate mid-setup and want to subscribe immediately.
- **Share with admins** — because the response is ephemeral you can run it anywhere, then copy the plan link to share with whoever controls billing.

## See also

- [Pricing](/web/pricing) — full plan comparison on the web.
- [Rooms Overview](/rooms/overview) — feature gate reference.
- [Personalization](/rooms/personalization) — one of the premium features unlocked by a plan.
