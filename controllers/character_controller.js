const DndService = require("../services/dnd_api");
const CharacterModel = require("../database/model/character_model");

const index = async (req, res) => {
    let races = await DndService.races();
    let classes = await DndService.classes();
    let languages = await DndService.languages();

    res.render("index", {races, classes, languages});
}

const make = async (req, res) => {
    res.render("character/new")
}

const create = async (req, res) => {
    console.log("create is working");
    let {races, classes, languages, alignment} = req.body;
    let character = await CharacterModel.create({races, classes, languages, alignment})
    .catch(err => res.status(500).send(err));
    res.render("index")
}

module.exports = {
    index,
    create,
    make
}