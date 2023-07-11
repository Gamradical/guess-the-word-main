//UL of guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button
const guessButton = document.querySelector(".guess");
//Input where player guesses letter
const input = document.querySelector(".letter");
//Word in progress appears
const inProgress = document.querySelector(".word-in-progress");
//Remaining guesses paragraph display
const remainingGuesses = document.querySelector(".remaining");
//Span inside remaining guesses paragraph showing guesses left
const guessesSpan = document.querySelector(".remaining span");
//Empty paragraph for messages after letter is guessed
const guessedPara = document.querySelector(".message");
//Hidden button prompting player to play again
const playAgain = document.querySelector(".play-again");

//Default word
let word = "magnolia";

let lettersGuessed = [];

//Display placeholders for letters in game
 const placeholder = function (word) {
    const wordArray = word;
    const letterPlaceholders = [];
    wordArray.forEach(function(letter) {
        letterPlaceholders.push("●");
    });
    inProgress.innerText = letterPlaceholders.join("");
 };
 
 placeholder(word);
