//GLOBAL VARIABLES
var wordList = [
"Alien",
"Halloween",
"Psycho",
"Scream"
];

var word= "";
var wins = 0;
var guessesLeft = 30;
var guessedLetters = [];
var gameStart = false;
var guessArray = [];


//FUNCTIONS
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

//Pick word randomly
var randomNumber = Math.floor(Math.random () * wordList.length);
var word = wordList [randomNumber];
var docUnderscore = document.getElementById("underscores");
for (var i = 0; i < word.length; i++) {
 guessArray[i] = "_ ";
 docUnderscore.innerHTML = guessArray.join("");
}
var remainingLetters = word.length;
var blankSpaces = guessArray.length;
var remainingLetters = word.length;

console.log(word);

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
        
    
        }  
    }

    if (blankSpaces == 0){
        gameStart();
        wins++;
        document.getElementById("wins").innerHTML = wins;
        
    }
    

}
}
















