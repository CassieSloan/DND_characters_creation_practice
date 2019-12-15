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

const languages = async() => {
    let info = await axios.get("http://dnd5eapi.co/api/languages");
    let languageData = info.data.results;
    return languageData;
}

// spells 
//http://dnd5eapi.co/api/spells/druid 
//make it so spells appear for the correct class
// if else or case statement



module.exports = {
    races,
    classes,
    languages
}
