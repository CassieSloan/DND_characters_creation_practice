const axios = require("axios");

const races = async() => {
    let info = await axios.get("http://dnd5eapi.co/api/races");
    let raceData = info.data.results;
    // let races = raceData[name];
    // console.log(races);
    return raceData;
}

module.exports = {
    races
}
