---
sidebar_position: 3
---

# Chat

We are trying to make this bot support all the features of the official discord client. This is a list of the features that are currently supported (features that are not listed here are not supported yet):

## Send Message

### Text Chat & Formatting

You can use any normal text chat like ussual. For formatting feature (click [here](https://support.discord.com/hc/en-us/articles/210298617-Markdown-Text-101-Chat-Formatting-Bold-Italic-Underline-) for discord formatting help), not all of them are working as normally as in Discord. Here is the list of supported formatting (normal behaviour will be checked):

- [x] Bold
- [x] Italic
- [x] Underline
- [x] Strikethrough
- [x] Code Blocks Single Line
- [x] Code Blocks Multi Line
- [ ] Block Quotes
  - This is not working as normally as in Discord, it will be fixed in the future.
  - For now, you can only use this if your Block Quotes's text is not in the first line.
- [x] Spoiler

### Send Image

This bot supports sending image by uploading the image file or by sending the image url

### Send Link

This bot supports sending link by sending the link url. The link will be automatically converted to a clickable link and will show embed message if the link supports it.

## Edit Message

This bot will also edit your message in other room if you edit your original message. But there is time limit for this feature, it will only work if you edit your message **within 5 minutes** after you send it. If you edit your message after 5 minutes, it will not be edited in other room.

## Delete Message

This bot will also delete your message in other room if you delete your original message. But there is time limit for this feature, it will only work if you delete your message **within 5 minutes** after you send it. If you delete your message after 5 minutes, it will not be delete in other room.

# Mentions
