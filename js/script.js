//UL of guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button
const guessButton = document.querySelector(".guess");
//Input where player guesses letter
const letterGuess = document.querySelector(".letter");
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

//Display symbol placeholders for letters in game
 const placeholder = function (word) {
    const letterPlaceholder = [""];
    for (const letter of word) {
        console.log(letter);
        letterPlaceholder.push("●");
    }
    inProgress.innerText = letterPlaceholder.join("");
};

 placeholder(word);

 //Letter entered into the input field in the console when the Guess button is clicked. 
 guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = letterGuess.value;
    console.log(guess);
    letterGuess.value = "";
 });

