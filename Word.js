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
}



var testWord = new Word("word")

testWord.letters();
console.log(testWord.wordArr)
testWord.wordDisplay()
console.log(testWord.display)
