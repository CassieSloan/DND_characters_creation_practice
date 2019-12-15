const mongoose = require("mongoose");
const CharacterSchema = require("../schema/character_schema");

const CharacterModel = mongoose.model("character", CharacterSchema);

module.exports = {
    CharacterModel
}