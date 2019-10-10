var Word = require("./Word");
var inquirer = require("inquirer");

var rounds;
var newWord;
var guessedLetters = [];
var availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//testing
//var newWord = new Word("test");
// console.log(newWord.word)
// console.log(newWord.letters())
// console.log(newWord.wordDisplay())

startGame("test");


//start game function
function startGame(word){
    newWord = new Word(word);
    rounds = 0;
    guessedLetters = [];
    newWord.letters();
    indexWordDisplay();
    userGuess();
}

function indexWordDisplay(){
    newWord.wordDisplay();
    console.log("Guess this word: " + newWord.display + "\n");
}

function userGuess(){

    if (rounds < 10){
        inquirer.prompt([
            {
                message: "Pick a letter",
                name: "guess",
                type: "input"
            }
        ]).then(function(answer){

            if (!answer.guess){
                console.log("...you forgot to pick a letter, type a letter THEN press enter...")
                userGuess();
            }else{
                
                var validGuess = answer.guess.toLowerCase();
                
                var alreadyGuessed = guessedLetters.find(function(element){
                    return element == validGuess
                });
                
                if (alreadyGuessed){
                    console.log("...you've already guessed that letter, try a different one!")
                    userGuess();
                }else{
                    var validLetter = availableLetters.find(function(element){
                        return element == validGuess
                    })
                    
                    if (!validLetter){
                        console.log("...that's not a letter, try again!");
                        userGuess();
                    }else{

                        guessedLetters.push(answer.guess);
                        
                        newWord.guess(validGuess);
                        rounds++
                        
                        var re = new RegExp(validGuess, "g")
                        
                        if(!newWord.display.match(/_/g)){
                            console.log("\nYou guessed it!\n")
                            indexWordDisplay();
                            playAgain();
                            
                        }else if(!newWord.display.match(re)){
                            console.log("\n------------------------------------\nIncorrect guess, try again...\n")
                            indexWordDisplay();
                            userGuess(); 
                            
                        }else{
                            console.log("\n------------------------------------\nCorrect guess, keep going!\n")
                            indexWordDisplay();
                            userGuess(); 
                        }
                    }
                    
                }
            }
        });
        
    }else{
        console.log("\n... you didn't guess it.\nThe word was: " + newWord.word + "\nBit too tricky, try again!\n");
        playAgain();
    }

    function playAgain(){
        inquirer.prompt([
            {
                message: "Play again?",
                name: "confirm",
                type: "confirm"
            }
        ]).then(function(answer){
            if(answer.confirm){
                console.log("\n\n...loading another round...\n\n")
                startGame("second");
            }else{
                console.log("\nok bye!\n")
            }
        })
    }
}