---
sidebar_position: 1
title: Donut — Community Matchmaking
description: Donut automatically pairs Discord community members for 1-on-1 or small-group interactions. Use it to run speed dating events, mentorship circles, icebreakers, and gaming brackets.
keywords:
  - mocha donut
  - discord matchmaking
  - community pairing
  - 1-on-1 discord
  - speed dating discord
  - mentorship discord
---

# Donut

Donut is Mocha's matchmaking feature. It automatically pairs registered members for 1-on-1 or small-group interactions — no manual bracket-building or spreadsheets needed.

## What it does

1. You create a named **match session**.
2. Members register for the session (by Discord user ID or reference).
3. You start the match — Donut pairs everyone instantly.
4. Pairs are revealed. Odd-numbered groups get a 3-way pair so nobody is left out.
5. You retrieve the pair list and notify members however you like.

## Use cases

| Use case | How Donut helps |
| -------- | --------------- |
| **Speed dating** | Rotate members through timed 1-on-1 chats in your community. |
| **Mentorship circles** | Match newcomers with experienced members automatically. |
| **Gaming brackets** | Auto-seed players into 1v1 match pairs for tournaments or scrims. |
| **Icebreakers** | Randomly pair members for warm-up conversations at the start of an event. |

## Match lifecycle

A match moves through the following states:

```
pending → running → finished
               ↘ stopped
```

| State | Meaning |
| ----- | ------- |
| `pending` | Match created, members can register. |
| `running` | Match started, pairs have been generated. |
| `finished` | All pairs have been marked as called/completed. |
| `stopped` | Match was halted before all pairs finished. |

Each individual participant also has their own status: `pending` → `running` → `finished` / `stopped`.

## API overview

Donut is accessible via the Mocha REST API. All endpoints are under `/api/v1/match/`.

| Method | Endpoint | Description |
| ------ | -------- | ----------- |
| `POST` | `/api/v1/match` | Create a new match session. |
| `GET` | `/api/v1/match/:serial` | Get match information and status. |
| `POST` | `/api/v1/match/:serial/start` | Start the match — triggers auto-pairing. |
| `POST` | `/api/v1/match/:serial/stop` | Stop the match. |
| `GET` | `/api/v1/match/:serial/people` | List all registered participants. |
| `POST` | `/api/v1/match/:serial/people` | Register participants. |
| `DELETE` | `/api/v1/match/:serial/people` | Unregister participants. |
| `GET` | `/api/v1/match/:serial/pairs` | Get generated pairs. |
| `POST` | `/api/v1/match/:serial/call` | Mark a pair as completed. |

## Pairing algorithm

- Members are shuffled randomly when the match starts.
- Pairs are 2-person by default.
- If the total count is odd, the last group becomes a 3-person pair.
- A single leftover member (only possible if count is 1) is not paired.

## Dashboard

You can manage match sessions from the [Mocha dashboard](https://dash.mocha-bot.xyz). A live demo of the pairing flow is available at [mocha-bot.xyz/donut](https://mocha-bot.xyz/donut).

## See also

- [Getting Started](/tutorials/getting-started) — invite the bot and set up your first room.
- [Pricing](/web/pricing) — plan comparison.
