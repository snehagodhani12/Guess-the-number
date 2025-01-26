let secretNumber = Math.floor(Math.random() * 100);
let attempts = 0;
 
// secretNumber: This generates a random integer between 1 and 100 (inclusive). Math.random() generates a random floating-point number between 0 and 1. Multiplying it by 100 gives a range from 0 to just below 100. Math.floor() is used to round down to the nearest whole number, and adding 1 ensures the range is between 1 and 100.
// attempts: This variable keeps track of the number of guesses the user has made, initialized to 0.

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('reset');

// These lines grab HTML elements by their IDs and store references to them. These elements will be manipulated to provide the user interface:
// guessInput: The input field where the user types their guess.
// submitButton: The button the user clicks to submit their guess.
// feedback: A paragraph or text area where feedback (like "Too high!", "Too low!", or "Correct!") will be displayed.
// attemptsDisplay: A location where the number of attempts made is displayed.
// resetButton: A button to restart the game once the user has guessed the correct number.

submitButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);

//     When the user clicks the "submit" button, the click event listener is triggered. The code inside the event listener runs:
// parseInt(guessInput.value): Retrieves the value the user typed into the guessInput field and converts it into an integer using parseInt().

    if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        feedback.textContent = "Enter a number between 1 and 100!";
        feedback.style.color = "red";
    } else {
        attempts++;
        attemptsDisplay.textContent = `Attempts: ${attempts}`;
        if (userGuess === secretNumber) {
            feedback.textContent = `Correct! The number was ${secretNumber}.`;
            feedback.style.color = "green";
            submitButton.disabled = true;
            resetButton.style.display = 'inline-block';
        } else {
            feedback.textContent = userGuess > secretNumber ? "Too high!" : "Too low!";
            feedback.style.color = "red";
        }
    }
});

// Input Validation: If the user enters a value that isn't between 1 and 100, or isn't a valid number (isNaN() checks if the value is not a number), an error message appears in the feedback area. The message is styled with a red color.
// Valid Guess: If the guess is valid, the attempt count is incremented by 1 and displayed.
// Correct Guess: If the user's guess matches the secretNumber, feedback saying "Correct!" is displayed, the color is set to green, and the submit button is disabled (to prevent further guesses). Additionally, the reset button is made visible (resetButton.style.display = 'inline-block';).
// Incorrect Guess: If the guess is not correct, the feedback will either say "Too high!" or "Too low!", depending on whether the user's guess is greater than or less than the secret number.

resetButton.addEventListener('click', () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsDisplay.textContent = `Attempts: 0`;
    feedback.textContent = '';
    guessInput.value = '';
    submitButton.disabled = false;
    resetButton.style.display = 'none';
});

// When the user clicks the "Reset" button:
// A new random secretNumber is generated.
// The number of attempts is reset to 0 and displayed.
// The feedback and the guess input field are cleared.
// The "Submit" button is re-enabled, and the "Reset" button is hidden again (resetButton.style.display = 'none';).