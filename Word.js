var Letter = require("./Letter")

function Word(word){
    this.word = word;
    this.wordArr = [];
    this.letters = function(){
        for (var i= 0; i < word.length; i++){
            var newLetter = new Letter(word.charAt(i));
            this.wordArr.push(newLetter)
        }
        return this.wordArr
    }
    this.wordDisplay = function(){
        this.display = this.wordArr.map((item) =>{
            return item.letterDisplay()
        }).join(" ")
        return this.display
    }
    this.guess = function(i){
        this.wordArr.forEach(function(item){
            if (!item.guessed){
                item.checkGuess(i);
            }
        })
        this.wordDisplay();
    }
}

module.exports = Word;



// var testWord = new Word("word")
// console.log("33: " + testWord.word)
// console.log("34: " + testWord.wordArr)
// console.log(testWord.letters())
// console.log("36: " + testWord.wordDisplay())
// testWord.guess("d")
// console.log("38: " + testWord.wordDisplay())
// testWord.guess("r")
// console.log("40: " + testWord.wordDisplay())
