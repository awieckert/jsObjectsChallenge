

var players = [
    { 
        name: "Bob", 
        scores: [90, 65] 
    }, 
    { 
        name: "Bill", 
        scores: [90, 5] }, 
    { 
        name: "Charlie",
        scores: [40, 55] 
    }
];

var heighestScore = 0;
var winner = [];

for(var i = 0; i < players.length; i++){
    var arrayOfScores = players[i].scores;
    var scoreSum = 0;   
        for(var j = 0; j < arrayOfScores.length; j++){
            scoreSum += arrayOfScores[j];
        }
    if(scoreSum > 100){
        winner = false;
     } else if(scoreSum > heighestScore){
        heighestScore = scoreSum;
        winner = [];
        winner.push(players[i].name);
    }

}

var winnerDiv = document.getElementById('challenge-1');
var printWinner = "<h1>The Winner is: " + winner + "</h1>";
printWinner += "<h2>With a Score of: " + heighestScore + "!</h2>";
winnerDiv.innerHTML = printWinner;

