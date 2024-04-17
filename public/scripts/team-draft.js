// Sample character data
const characters = [
    { name: 'Commander Luke Skywalker'},
    { name: 'Darth Vader'},
    { name: 'Yoda'},
    { name: 'Emperor Palpatine'},
    { name: 'Mara Jade'},
    { name: 'Chewbacca'},
    { name: 'Han Solo'},
    { name: 'C3PO'},
    { name: 'R2D2'},
    { name: 'Lando Calrissian'},
    { name: 'Darth Revan'},
    { name: 'Jedi Knight Revan'},
    { name: 'Kyle Katarn'},
    // Add more characters here...
  ];
  
  // Sample player data
  const players = [
    { name: 'Player 1' },
    { name: 'Player 2' },
    // Add more players here...
  ];
  
  // Draft function
  function draftTeam(players, characters) {
    const teams = {};
  
    players.forEach((player) => {
      teams[player.name] = [];
    });
  
    while (characters.length > 0) {
      players.forEach((player) => {
        const selectedCharacter = getRandomCharacter(characters);
        teams[player.name].push(selectedCharacter);
        characters.splice(characters.indexOf(selectedCharacter), 1);
      });
    }
  
    return teams;
  }
  
  // Utility function to get a random character from the available pool
  function getRandomCharacter(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters[randomIndex];
  }
  
  // Example usage
  const teams = draftTeam(players, characters);
  console.log(teams);
  