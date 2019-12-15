const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CharacterSchema = new Schema({
    race: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    alignment: {
        type: String,
        required: true
    }

});

module.exports = {
    CharacterSchema
}