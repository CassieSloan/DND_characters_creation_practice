const DndService = require("../services/api");

const index = async (req, res) => {
    let races = await DndService.races();
    res.render("index", {races});
}   
module.exports = {
    index,
}