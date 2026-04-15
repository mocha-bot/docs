---
sidebar_position: 3
---

# Feedback

Send feedback to the Mocha maintainers directly from Discord. The command opens a modal form that ends up as a formatted message in the developer channel, tagged with the server and user it came from so we can follow up if needed.

## Slash Commands

### Feedback

**Usage**

```md
  /feedback
```

**What happens next**

1. Mocha responds with an ephemeral modal titled **Send Feedback**.
2. You fill in two fields.
3. You submit — Mocha replies *"Thank you for your feedback!"* and forwards the details to the developer channel.

## Modal fields

| Field      | Required | Limits               | Description                                                   |
| ---------- | -------- | -------------------- | ------------------------------------------------------------- |
| **Type**     | yes      | 3–20 characters      | One of `bug`, `suggestion`, `feature_request`, `other`.      |
| **Feedback** | yes      | up to 2000 characters | Free-form description. Be specific — the more context, the better. |

If you type something that isn't one of the four known values for **Type**, Mocha will accept the submission and quietly categorise it as `other`. You don't need to worry about spelling it exactly.

## What the maintainers see

Your submission is posted to the developer channel as an embed containing:

- **Title** — "Received a feedback!"
- **Description** — the body you typed.
- **Color** — tinted by feedback type (bug, suggestion, feature_request, other each have their own color).
- **Author** — your Discord tag and avatar.
- **Type field** — the category.
- **Guild field** — the server name and ID the feedback came from.
- **User field** — your display name and user ID.
- **Timestamp** — when you submitted.

## Writing effective feedback

To help us act on your report quickly:

- **Bugs** — include the command or action you ran, what you expected, what happened, and (if possible) the room ID.
- **Suggestions / feature requests** — describe the problem you're trying to solve, not just the solution you have in mind. We can usually find a better fit for the underlying need.
- **Other** — use this for questions, praise, or anything that doesn't fit the first three. We read all of it.

## See also

- [Support server](https://discord.mocha-bot.xyz/) — real-time help from the community.
- [Frequent Searches](/others/frequent-searches) — answers to the most common questions before you reach for `/feedback`.
