---
sidebar_position: 3
---

# Feedback

Send feedback directly to the bot developers. Opens a modal form; your submission is forwarded to the developer channel together with the server and user it came from.

## Slash Commands

### Feedback

**Usage**

```md
  feedback
```

**Modal fields**

| Field      | Required | Notes                                                              |
| ---------- | -------- | ------------------------------------------------------------------ |
| `Type`     | yes      | One of `bug`, `suggestion`, `feature_request`, or `other`.         |
| `Feedback` | yes      | Free-form description, up to 2000 characters.                      |

If none of the known types are entered, the submission is still accepted and categorised as `other`.
