const express = require("express");
const router = express.Router(); //using standard express router (package included in express)
const CharacterController = require("../controllers/character_controller");

router.get("/", CharacterController.index);

module.exports = router