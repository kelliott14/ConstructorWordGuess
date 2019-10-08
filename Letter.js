function Letter(letter){
    this.letter = letter;
    this.value = letter.length;
    this.guessed = false;
    this.display = function(){
        if(this.guessed){
            return letter
        }else{
            return "_"
        }
    }
    this.checkGuess = function(i){
        if(i == this.letter){
            this.guessed = true
        }else{
            this.guessed = false
        }
    }
}

var testLetter = new Letter("g");

console.log(testLetter);
console.log(testLetter.value)
console.log(testLetter.guessed)
console.log(testLetter.display())
console.log("testing with H -----------")
testLetter.checkGuess("h")
console.log(testLetter.guessed)
console.log(testLetter.display())
console.log("testing with G -----------")
testLetter.checkGuess("G")
console.log(testLetter.guessed)
console.log(testLetter.display())