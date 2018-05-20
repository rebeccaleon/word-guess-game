//GLOBAL VARIABLES
var wordList = [
    "ALIEN",
    "HALLOWEEN",
    "PSYCHO",
    "SCREAM"
];

var word = "";
var wins = 0;
var guessesLeft = 30;
var guessedLetters = [];
var gameStart = false;
var guessArray = [];

var word = wordList[Math.floor(Math.random() * wordList.length)];

for (var i = 0; i < word.length; i++) {
guessArray.push("_ ");
}

var blankSpaces = guessArray.length;

var remainingLetters = word.length;

//FUNCTIONS
function reset(){
    var guessesLeft = 30;
    var guessedLetters = [];
    var guessArray = [];
}


function generateIndexes(array, letter) {
    var indexes = [];
    var i = -1;
    while ((i = array.indexOf(letter, i + 1)) != -1) {
        indexes.push(i);
    }
    return indexes;
}

function removeDuplicates(array){
    guessedLetters = []
    for(let i = 0;i < array.length; i++){
        if(guessedLetters.indexOf(array[i]) == -1){
            guessedLetters.push(array[i]);
        }
    }
    return guessedLetters;
}


//START THE GAME//
document.onkeyup = function gameStart(){

    document.onkeyup = function keyPress(event){

        var userGuessNum = event.keyCode;
        var userGuess = event.key;


        if (userGuessNum >= 65 && userGuessNum <= 90){

        userGuess = userGuess.toUpperCase();

        var allIndexes = generateIndexes(word, userGuess);

        for (var i = 0; i < allIndexes.length; i++){
            guessArray[allIndexes[i]] = userGuess;
            blankSpaces--;
        }

        document.getElementById("underscores").textContent = guessArray.join("");
        document.getElementById("guesses-remaining").textContent = guessesLeft;

        guessedLetters.push(userGuess);

        removeDuplicates(guessedLetters);

        document.getElementById("letters-guessed").textContent = guessedLetters;
    
        if (guessesLeft > 0){
            guessesLeft--;
        }
        else {
            alert("BOO! YOU LOSE!");
            
        }  reset();



    if (blankSpaces === 0){
        wins++;
        document.getElementById("wins").innerHTML = wins; 
        
    } reset();
    

}
}
}