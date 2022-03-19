# Reddit Discord Bot
Just a simple bot to post any new posts on a given subreddit to a channel in Discord.

## Technologies Used
- Node.js 14.14.28
### Node Dependencies
- discord.js 12.5.0
- node-fetch 2.6.1
## Getting Started

**Entrypoint:** index.js

> **Note:** This project requires you to create a WebHook on a given Discord server allowing it to post to a given channel. 

### How it works
This bot posts new posts from a given subreddit to Discord via a Webhook by using fetch on Reddit's API

## Context

### Why Create this?
I created this because I wanted a way to post sports news from Reddit onto a channel in Discord, that way, all my sports news could be viewed via Discord.
> **Note:** This bot has been deprecated as there's much better avenues to accomplish this task.

#### How Would I Change This
I deprecated this bot because it wasn't efficient for a few reasons. For starters, every new post on most sports subreddits is just an obnoxious amount of posts. In an hours time, you'd get massively spammed. I'd need to create an algorithm to detect which posts are actually important vs posts I don't care about. The other part is that the design of this bot isn't all that efficient either. Generally, an await function and waiting for a new post just isn't a great way to handle this task.

All in all, this was an early bot I put together to get my feet wet with making Discord Bots. It helped me realize how I should consider the fact that while I may start a project with smaller intentions, I need to account for the ability to scale up its scope over time.