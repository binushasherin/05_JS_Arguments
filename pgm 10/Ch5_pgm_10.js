var player1;
var player2;
var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    healthMultiplier: 2
};

player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40,
    healthMultiplier: 5
};


function showPlayerHealth(playerName, playerHealth, playerHealthMultiplier) {
    var healthInfo = playerName + ": health " + (playerHealth * playerHealthMultiplier);
    console.log(healthInfo);
};

showPlayerHealth(player1.name, player1.health, player1.healthMultiplier);
showPlayerHealth(player2.name, player2.health, player2.healthMultiplier);


