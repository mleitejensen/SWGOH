const get_home = async (req, res) => {

    res.render("index")
}

const get_characters = async (req, res) => {
    const id = req.params.id
    const playerResponse = await fetch(`https://swgoh.gg/api/player/${id}`)
    const playerData = await playerResponse.json()
    let sortedPlayerData = playerData.units.sort((char1, char2) => (char1.data.power < char2.data.power) ? 1 : (char1.data.power > char2.data.power) ? -1 : 0);
    
    const charactersResponse = await fetch("https://swgoh.gg/api/characters")
    const charactersData = await charactersResponse.json()

    res.render("Player", { player: sortedPlayerData, characters: charactersData })
}


const get_fleet = async (req, res) => {
    //471196449
    const id = req.params.id
    const playerResponse = await fetch(`https://swgoh.gg/api/player/${id}`)
    const playerData = await playerResponse.json()
    let sortedPlayerData = playerData.units.sort((char1, char2) => (char1.data.power < char2.data.power) ? 1 : (char1.data.power > char2.data.power) ? -1 : 0);
    
    const charactersResponse = await fetch("https://swgoh.gg/api/characters")
    const charactersData = await charactersResponse.json()

    res.render("Fleet", { player: sortedPlayerData, characters: charactersData })
}


module.exports = {
    get_home,
    get_characters,
    get_fleet
}