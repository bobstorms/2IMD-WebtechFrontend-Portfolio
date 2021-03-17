const express = require("express");
const router = express.Router();
const controllerMessages = require("../../../controllers/api/v1/messages");

// API Endpoints
router.get("/", controllerMessages.getAllMessages);
router.get("/:id", controllerMessages.getMessageWithId);

router.post("/", controllerMessages.saveMessage);

router.put("/:id", controllerMessages.updateMessage);

router.delete("/:id", controllerMessages.deleteMessage);

module.exports = router;