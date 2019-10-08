function Letter(letter){
    this.letter = letter;
    this.value = letter.length;
    this.guessed = false;
    this.letterDisplay = function(){
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

module.exports = Letter;