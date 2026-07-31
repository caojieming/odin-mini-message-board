# odin-mini-message-board
A simple message board created with Express.

Deployed using Railway (may expire soon): odin-mini-message-board-production-8924.up.railway.app

Edit: implemented PostgreSQL database to store messages long term. Currently only works with a local PSQL DB.

## Extra info
Run `npm install` to install all packages/dev dependencies.<br>
Run `npm outdated` to check if any packages are outdated (can generally ignore yellow packages: current version is the wanted version, but not the latest version).<br>
Run `npm update` to update outdated packages.

## npm scripts included
`npm run app`<br>
The equivalent of `node --watch app.js`.<br>
Opens an Express server for viewing changes in real time without needing to build.<br>
Default server link: http://localhost:3000/

## Packages included
- express
- ejs
- pg
- express-validator