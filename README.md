# ConstructorWordGuess
Boot Camp - Week 11 - Homework - Constructors

## Usage
Constructor Word Guess uses node.js, inquirer and random-words npms.

The game will provide the user the word that needs to be guessed, then ask the user to guess a letter. If the letter guessed appears in the word, the letter will display. If not, the user will be prompted to guess again. After 10 incorrect guesses, the game is over and prompt the user to play again or exit.

If the word is guessed, the game is over and will prompt the user to play again or exit.

## Validations
The game will validate letters guessed to ensure:
- a letter has been selected
- the character selected is a letter
- the letter has not already been selected
The answers are also not case sensitive
