//UL of guessed letters
const guessedLetters = document.querySelector(".guessed-letters");
//Guess button
const guessButton = document.querySelector(".guess");
//Input where player guesses letter
const letterInput = document.querySelector(".letter");
//Word in progress appears
const inProgress = document.querySelector(".word-in-progress");
//Remaining guesses paragraph display
const remainingGuesses = document.querySelector(".remaining");
//Span inside remaining guesses paragraph showing guesses left
const guessesSpan = document.querySelector(".remaining span");
//Empty paragraph for messages after letter is guessed
const message = document.querySelector(".message");
//Hidden button prompting player to play again
const playAgain = document.querySelector(".play-again");

//Default word
let word = "magnolia";

const lettersGuessed = [];

//Display symbol placeholders for letters in game
 const placeholder = function (word) {
    const letterPlaceholder = [];
    for (const letter of word) {
        console.log(letter);
        letterPlaceholder.push("●");
    }
    inProgress.innerText = letterPlaceholder.join("");
};

 placeholder(word);

 //Letter entered into the input field in the console when the Guess button is clicked. 
 guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText = "";
    const guess = letterInput.value;
    const goodGuess = validateInput(guess);
    if (goodGuess) {
        makeGuess(guess);
    }
    letterInput.value = "";
 });

 //Validating letters and return messages for different scenarios
 const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Guess a letter!";
    } else if (input.length > 1) {
        message.innerText = "Only one letter at a time please.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Only enter a letter from A to Z please.";
    } else {
        return input;
    }
 };

 const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (lettersGuessed.includes(guess)){
        message.innerText = "You already fuessed that letter Sillypuss. Try again.";
    } else {
        lettersGuessed.push (guess);
        console.log(lettersGuessed);
    }
};



