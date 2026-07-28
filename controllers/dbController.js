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

async function deleteMessage(req, res) {
  const msgId = req.params.id;
  await db.deleteMessage(msgId);
  res.redirect("/");
}

module.exports = {
  openHome,
  openForm,
  submitForm,
  openDetails,
  deleteMessage
};
