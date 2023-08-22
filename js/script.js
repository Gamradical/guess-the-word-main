//UL of guessed letters
const guessedLettersElement = document.querySelector(".guessed-letters");
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

const guessedLetters = [];

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
        //Input empty?
        message.innerText = "Guess a letter!";
    } else if (input.length > 1) {
        //Guessed more than one letter?
        message.innerText = "Only one letter at a time please.";
    } else if (!input.match(acceptedLetter)) {
        //Something other than a letter typed?
        message.innerText = "Only enter a letter from A to Z please.";
    } else {
        //Correct type of input.
        return input;
    }
 };

 const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)){
        message.innerText = "You already guessed that letter Sillypuss. Try again.";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        showGuessedLetters();
        updateWordInProgress(guessedLetters);
    }
};

const showGuessedLetters = function () {
    //Clear list.
    guessedLettersElement.innerHTML = "";
    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

const updateWordInProgress = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const showWord = [];
    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            showWord.push(letter.toUpperCase());
        }else{
            showWord.push("●");
        }
    }
    //console.log(showWord);
    inProgress.innerText = showWord.join("");
    checkIfWin();
 };

 const checkIfWin = function () {
    if (word.toUpperCase() === inProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class=-"highlight">You guessed the correct word! Congrats!</p>`;
    }
 };


