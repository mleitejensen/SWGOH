const get_characters = async (req, res) => {
    const playerResponse = await fetch("https://swgoh.gg/api/player/471196449")
    const playerData = await playerResponse.json()
    let sortedPlayerData = playerData.units.sort((char1, char2) => (char1.data.power < char2.data.power) ? 1 : (char1.data.power > char2.data.power) ? -1 : 0);
    
    const charactersResponse = await fetch("https://swgoh.gg/api/characters")
    const charactersData = await charactersResponse.json()

    res.render("index", { player: sortedPlayerData, characters: charactersData })
}


const get_fleet = async (req, res) => {
    const playerResponse = await fetch("https://swgoh.gg/api/player/471196449")
    const playerData = await playerResponse.json()
    let sortedPlayerData = playerData.units.sort((char1, char2) => (char1.data.power < char2.data.power) ? 1 : (char1.data.power > char2.data.power) ? -1 : 0);
    
    const charactersResponse = await fetch("https://swgoh.gg/api/characters")
    const charactersData = await charactersResponse.json()

    res.render("fleet", { player: sortedPlayerData, characters: charactersData })
}


module.exports = {
    get_characters,
    get_fleet
}