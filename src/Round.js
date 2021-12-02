const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardIndex = 0;
    this.turns = 0;
    this.incorrectGuesses = [];
  }
  returnCurrentCard() {
    return this.deck.cards[this.cardIndex];
  }
  takeTurn(guess) {
    this.turns++;
    let newTurn = new Turn(guess, this.returnCurrentCard());
    if (!newTurn.evaluateGuess()) {
      this.incorrectGuesses.push(this.returnCurrentCard().id);
    }
    this.cardIndex++;
    return newTurn.giveFeedback();
  }
}
module.exports = Round;
