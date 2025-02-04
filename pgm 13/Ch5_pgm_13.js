
var showPlayerInfo;
var showPlayerName;
var showPlayerHealth;
var showPlayerPlace;

showPlayerName = function (playerName) {
    console.log(playerName);
};

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName + " is in " + playerPlace);
};

showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    console.log("");

    showPlayerName(playerName);

    console.log("----------------------------");

    showPlayerPlace(playerName, playerPlace);
    showPlayerHealth(playerName, playerHealth);

    console.log("----------------------------");
    console.log("");
};

showPlayerInfo("Kandra", "The Dungeon of Doom", 50);
showPlayerInfo("Dax", "The Old Library", 40);

function showLine() {
    console.log("-------------------");
}

function showPlayerInfo(playerName, playerHealth, playerHealthMultiplier) {
    showLine();
    console.log(playerName + ": health " + (playerHealth * playerHealthMultiplier));
    showLine();
}

showPlayerInfo("Kandra", 50, 2);

function showBlankLine() {
    console.log("");
}
showBlankLine();