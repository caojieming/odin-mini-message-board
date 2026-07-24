const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

async function openHome(req, res) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function openForm(req, res) {
  res.render("form");
}

async function submitForm(req, res) {
  const msgUser = req.body.user;
  const msgText = req.body.message;
  messages.push({ text: msgText, user: msgUser, added: new Date() });
  res.redirect("/");
}

async function openDetails(req, res) {
  const msgIdx = req.params.idx;
  const msg = messages[msgIdx];
  res.render("details", { title: "Message Details", message: msg });
}

module.exports = {
  openHome,
  openForm,
  submitForm,
  openDetails
};

// const db = require("../db/queries");

// async function getUsernames(req, res) {
//   if(req.query.search) {
//     const usernames = await db.searchUsernames(req.query.search);
//     console.log("Queried usernames: ", usernames);
//     res.send("Queried usernames: " + usernames.map(user => user.username).join(", "));
//   }
//   else {
//     const usernames = await db.getAllUsernames();
//     console.log("All usernames: ", usernames);
//     res.send("All usernames: " + usernames.map(user => user.username).join(", "));
//   }
// }

// async function deleteAllUsernames(req, res) {
//   db.deleteAllUsernames();
//   res.send("Deleted all usernames!");
// }

// async function createUsernameGet(req, res) {
//   // render the form
// }

// async function createUsernamePost(req, res) {
//   const { username } = req.body;
//   await db.insertUsername(username);
//   res.redirect("/");
// }

// module.exports = {
//   getUsernames,
//   deleteAllUsernames,
//   createUsernameGet,
//   createUsernamePost
// };