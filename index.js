var Word = require("./Word");
var inquirer = require("inquirer");

//testing
var newWord = new Word("test");
// console.log(newWord.word)
// console.log(newWord.letters())
// console.log(newWord.wordDisplay())

//start game
var rounds = 0;
newWord.letters();
indexWordDisplay();
userGuess();


function indexWordDisplay(){
    newWord.wordDisplay();
    console.log("Guess this word: " + newWord.display);
}

function userGuess(){

    if (rounds < 5){
        inquirer.prompt([
            {
                message: "Pick a letter",
                name: "guess",
                type: "input"
            }
        ]).then(function(answer){
            
            newWord.guess(answer.guess);
            indexWordDisplay();
            rounds++
           
            var re = new RegExp(answer.guess, "g")
            if(!newWord.display.match(re)){
                console.log("Incorrect guess")
                userGuess(); 
            }else{
                console.log("Correct guess!")
                userGuess(); 
            }






            

            
            
        });
        
    }
}