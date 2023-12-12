# Game Tracker

## Hey!

Recently, I finished up a course on React, and wanted to try out the knowledge and skills I picked up by creating a real, useful project. I decided to go with a game tracker, as it'll be useful to me. I've recently gotten into retro gaming, so I have a pretty large backlog that I'd like to be able to track. I think this accomplishes that pretty well.

This is the front-end, written in React. There are quite a few advantages this provides over something like Google Keep or just a simple notepad file, for example;

- Filtering and ordering
- Priority, status and quality ratings for tracking
- Simple and more appealing UI
- Per-game note taking functionality

And more!

While most of the core functionality and nicer features are already implemented, there's definitely still work to be done (mainly refactoring), so I will continue to work on and improve this over time. Might refactor it into a broader, media tracking app (i.e., include TV and movies), or I might focus in on game-specific features.

---

## Reflections

It's been a while since I've built this app and, now that I've finished my AS in Computer Science, I've been reflecting on the tools I used for this app, and there are a few things I wish I did differently.

1. I should've used a database that was integrated into the application (specifically SQLite) rather than a MYSQL server. The approach that I went with, despite specifically being because I wanted to make a project with MySQL, isn't really applicable for this type of app; it creates a much bulkier implementation that requires multiple moving parts (React front end, Express back end, MySQL server) that goes against my intent of simplicity and usefulness.
2. Instead of an Express backend with a client-side focus, I either should've implemented accounts and published it (MySQL would've been fine then), or implement it with Electron.

Overall though, I had a great experience building this. It taught me a lot about React, which was the goal I had when starting the project.

---

If I'm honest, this project might've been easier to implement with vanilla JS and a templating engine like EJS.

If you'd like to, check out the back-end as well, [over here](https://github.com/camdyn-dev/gametracker-express)!

\- Camdyn
