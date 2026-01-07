const { Router } = require("express");
const indexRouter = Router();
const messageController = require("../controllers/messageController");



indexRouter.get("", messageController.getIndex);
indexRouter.get("/new", messageController.getForm);
indexRouter.post("/new", messageController.postForm);
indexRouter.get("/:messageId", messageController.getMessage);

module.exports = indexRouter;
