const db = require("../db/query");

async function getIndex(req, res) {
  const messages = await db.getAllMessages();
  res.render("index", { title: "Mini message board", messages: messages });
}

function getForm(req, res) {
  res.render("form");
}

async function postForm(req, res) {
  const user = req.body.userName;
  const message = req.body.messageText;
  await db.insertMessage(user, message);

  res.redirect("/");
}

async function getMessage(req, res) {
  console.log(req.params.messageId);

  const message = await db.getMessage(req.params.messageId);
  res.render("message", { message: message });
}

module.exports = { getIndex, getForm, postForm, getMessage };
