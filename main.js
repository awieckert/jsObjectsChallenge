// Object Challenge 1 ------!

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

if (winner === false){
    var winnerDiv = document.getElementById('challenge-1');
var printWinner = "<h1>The Winner is: NO ONE!!!!</h1>";
printWinner += "<h2>With a Score of: FALIURE!!</h2>";
winnerDiv.innerHTML = printWinner;
} else {
    var winnerDiv = document.getElementById('challenge-1');
var printWinner = "<h1>The Winner is: " + winner + "</h1>";
printWinner += "<h2>With a Score of: " + heighestScore + "!</h2>";
winnerDiv.innerHTML = printWinner;
}

var winnerDiv = document.getElementById('challenge-1');
var printWinner = "<h1>The Winner is: " + winner + "</h1>";
printWinner += "<h2>With a Score of: " + heighestScore + "!</h2>";
winnerDiv.innerHTML = printWinner;


// Object Challenge 2---!

var winnerList = [
    {season: '1999-2000', team: 'Real Madrid', country: 'Spain'},
    {season: '2000-2001', team: 'Bayern Munich', country: 'Germany'},
    {season: '2001-2002', team: 'Real Madrid', country: 'Spain'},
    {season: '2002-2003', team: 'Milan', country: 'Italy'},
    {season: '2003-2004', team: 'Porto', country: 'Portugal'},
    {season: '2004-2005', team: 'Liverpool', country: 'England'},
    {season: '2005-2006', team: 'Barcelona', country: 'Spain'},
    {season: '2006-2007', team: 'Milan', country: 'Italy'},
    {season: '2007-2008', team: 'Manchester United', country: 'England'},
    {season: '2008-2009', team: 'Barcelona', country: 'Spain'},
    {season: '2009-2010', team: 'Internazionale', country: 'Italy'},
    {season: '2010-2011', team: 'Barcelona', country: 'Spain'},
    {season: '2011-2012', team: 'Chelsea', country: 'England'},
    {season: '2012-2013', team: 'Bayern Munich', country: 'Germany'},
    {season: '2013-2014', team: 'Real Madrid', country: 'Spain'},
    {season: '2014-2015', team: 'Barcelona', country: 'Spain'},
    {season: '2015-2016', team: 'Real Madrid', country: 'Spain'},
    {season: '2016-2017', team: 'Real Madrid', country: 'Spain'},
  ];


  function champions (name) {


    var numberOfWins = 0;

    function stringBuilder (winner){
        var buildElement = "<h1>You Searched for: " + winner + "</h1>";
        buildElement += "<h3>They have: " + numberOfWins +" wins!</h3>";
        return buildElement;
      }
    
      function printToDom (stringToPrint, divID) {
        var thingToPrint = document.getElementById(divID);
        thingToPrint.innerHTML += stringToPrint;
     }

    for(var i = 0; i < winnerList.length; i++){
        var currentWinner = winnerList[i].country;
        if(currentWinner.toLocaleLowerCase() === name.toLocaleLowerCase()){
            numberOfWins++;
        }    
    }
    var builtString = stringBuilder(name);
    printToDom(builtString, "challenge-2");

}



champions("spain");
champions("england");


// Object Challenge 2 End -----!



