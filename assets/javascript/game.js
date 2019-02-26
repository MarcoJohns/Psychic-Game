
// WINS, LOSSES, GUESSES, GUESSES LEFT, CORRECT
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 0;
var guessesLeft = 10;
var correctAnswer;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guesses").innerHTML = guesses;
document.getElementById("guesses-left").innerHTML = guessesLeft;

var randomlyChooseLetter = function () {
    correctAnswer = alphabet[Math.floor(Math.random() * alphabet.length)];
    
};


var restart = function () {
    randomlyChooseLetter();
    guesses = 0;
    guessesLeft = 10;
}


// ON KEY UP
document.onkeyup = function (event) {
    var userInput = event.key;
    // IF USER INPUT === CORRECT
    if (userInput === correctAnswer) {
        // ++ WINS
        wins++;
        // DISPLAY WINS ON PAGE
        document.getElementById("wins").innerHTML = wins;
        // RUN RESTART FUNCTION (CHOOSE NEW CORRECT ANSWER, RESET GUESSES & GUESSES LEFT)
        restart();
    } else if (guessesLeft === 1) {
        losses++;
        restart();
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    } else {
        // GUESSES++ && GUESSES LEFT--
        guesses++;
        guessesLeft--;
        // DISPLAY GUESSES (DISPLAY THE GUESSES, & GUESSES LEFT)
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("guesses").innerHTML = guesses;
        document.getElementById("guesses-left").innerHTML = guessesLeft;
    };
};

restart();



