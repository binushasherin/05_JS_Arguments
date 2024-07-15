var showPlayerHealth;

showPlayerHealth = function (playerName, playerHealth) {
    console.log(playerName + " has health " + playerHealth);
};

showPlayerHealth("Kandra", 50);
showPlayerHealth("Dax", 40);



function showPlayerHealth(playerName, playerHealth) {
    
    var healthInfo;
    
 
    healthInfo = playerName + ": health " + playerHealth;
    
    console.log(healthInfo);
}


showPlayerHealth("Kandra", 50);
showPlayerHealth("Michael", 75);
showPlayerHealth("Alex", 90);
showPlayerHealth("Elizabeth", 60);
