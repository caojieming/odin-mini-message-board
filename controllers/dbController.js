const db = require("../db/queries");


async function openHome(req, res) {
  const messages = await db.getAllMessages();
  // console.log("All messages: ", messages);
  res.render("index", { title: "Mini Messageboard", messages: messages });
}

async function openForm(req, res) {
  res.render("form");
}

async function submitForm(req, res) {
  const msgUsername = req.body.user;
  const msgText = req.body.message;
  const msgAdded = (new Date()).toISOString();
  await db.postNewMessage(msgAdded, msgUsername, msgText);
  res.redirect("/");
}

async function openDetails(req, res) {
  const msgId = req.params.id;
  const msg = (await db.getMessageDetails(msgId)).rows[0];
  // console.log("message: ", msg);
  res.render("details", { title: "Message Details", message: msg });
}

module.exports = {
  openHome,
  openForm,
  submitForm,
  openDetails
};



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