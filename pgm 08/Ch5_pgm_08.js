
var player1;
var player2;
var showPlayerName;

showPlayerName = function (playerName) {
    console.log(playerName);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerName(player1.name);
showPlayerName(player2.name);




function showPlayerNameUpperCase(playerName) {
    console.log("The player's name is " + playerName.toUpperCase());
    console.log("The player's name has " + playerName.length + " letters.");
}

showPlayerNameUpperCase("Kandra");
showPlayerNameUpperCase("Michael");
showPlayerNameUpperCase("Alex");
showPlayerNameUpperCase("Elizabeth");

function showPlayerNameLowerCase(playerName) {
    console.log("The player's name is " + playerName.toLowerCase());
    console.log("The player's name has " + playerName.length + " letters.");
}

showPlayerNameLowerCase("Kandra");
showPlayerNameLowerCase("Michael");
showPlayerNameLowerCase("Alex");
showPlayerNameLowerCase("Elizabeth");
