var Letter = require("./Letter")

function Word(word){
    this.word = word;
    this.display;
    this.wordArr = [];
    this.letters = function(){
        for (var i= 0; i < word.length; i++){
            var newLetter = new Letter(word.charAt(i));
            this.wordArr.push(newLetter)
        }
    }
    this.wordDisplay = function(){
        this.display = this.wordArr.map((item) =>{
            return item.letterDisplay()
        }).join(" ")
    }
    this.guess = function(i){
        this.wordArr.forEach(function(item){
            item.checkGuess(i);
        })
    }
}

module.exports = Word;




// var testWord = new Word("word")

// testWord.letters();
// console.log(testWord.wordArr)
// testWord.wordDisplay()
// console.log(testWord.display)

// testWord.guess("d");
// testWord.wordDisplay()
// console.log(testWord.display)