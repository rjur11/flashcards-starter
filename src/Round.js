const Turn = require("../src/Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.cardIndex = 0;
    this.turns = 0;
  }
  returnCurrentCard() {
    return this.deck.cards[this.cardIndex];
  }
  takeTurn(guess) {
    this.turns++;
    var newTurn = new Turn(guess, this.returnCurrentCard());
    this.currentCard;
  }
}
module.exports = Round;
