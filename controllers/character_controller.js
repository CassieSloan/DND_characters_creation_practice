const DndService = require("../services/dnd_api");

const index = async (req, res) => {
    let races = await DndService.races();
    let classes = await DndService.classes();
    res.render("index", {races, classes});
}   
module.exports = {
    index,
}