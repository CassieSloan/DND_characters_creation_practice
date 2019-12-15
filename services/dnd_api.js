const axios = require("axios");

const races = async() => {
    let info = await axios.get("http://dnd5eapi.co/api/races");
    let raceData = info.data.results;
    return raceData;
}

const classes = async() => {
    let info = await axios.get("http://dnd5eapi.co/api/classes");
    let classData = info.data.results;
    return classData;
}

module.exports = {
    races,
    classes
}
