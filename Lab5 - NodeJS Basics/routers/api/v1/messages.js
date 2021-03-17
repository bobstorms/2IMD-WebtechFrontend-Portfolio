const express = require("express");
const router = express.Router();
const controllerMessages = require("../../../controllers/api/v1/messages");

// API Endpoints
router.get("/", controllerMessages.getAllMessages);
router.get("/:id", controllerMessages.getMessageWithId);

module.exports = router;