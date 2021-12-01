class Round {
  constructor(deck) {
    this.deck = deck;
    this.guess = guess;
    this.currentCard = deck.cards[0];
  }
  returnCurrentCard() {
    return this.currentCard;
  }
}
module.exports = Round;
