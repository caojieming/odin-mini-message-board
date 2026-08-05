# odin-mini-message-board
A simple message board created with Express.

~~Deployed using Railway (might be expired): odin-mini-message-board-production-8924.up.railway.app~~

~~Edit: implemented PostgreSQL database to store messages long term. Currently only tested to work with a local PSQL DB, though theoretically should work on a hosted server + DB. Just run `npm run app <URL-to-DB>`.~~

Deployed using Render with a connection to a PostGreSQL DB in Neon.<br>
Link: https://odin-mini-message-board-36li.onrender.com

## npm scripts included
`npm run app`<br>
The equivalent of `node --watch app.js`.<br>
Opens an Express server for viewing changes in real time without needing to build.<br>
NEW: automatically connects to a local PostgreSQL DB (just make sure to fill out the .env variables).<br>
Default server link: http://localhost:8080/<br>

`npm run app <URL-to-DB>`<br>
Starts the server with a connection to the given DB. Theoretically works with non-local DBs.<br>

## Extra info
Run `npm install` to install all packages/dev dependencies.<br>
Run `npm outdated` to check if any packages are outdated (can generally ignore yellow packages: current version is the wanted version, but not the latest version).<br>
Run `npm update` to update outdated packages.

## Packages included
- express
- ejs
- pg
- express-validator