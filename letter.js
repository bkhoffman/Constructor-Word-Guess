function Letter(letter){
  this.letter = letter;
  this.guessedYet = false;
  this.revelChar = function(){
    if(this.guessedYet = false){
      return "_"
    }else{
      return this.letter
    }
  };
  this.guessChecker = function(userGuess){
    if(userGuess === this.letter){
      this.guessedYet = true;
    }
  };
}

module.exports = Letter;