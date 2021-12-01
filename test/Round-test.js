const chai = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const expect = chai.expect;

describe("Round", function () {
  let round;
  let card1;
  let card2;
  let card3;
  let deck;
  beforeEach(function createDeck() {
    card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    expect(round).to.be.an.instanceof(Round);
  });

  it("should return the current card being played", function () {
    expect(round.returnCurrentCard).to.equal(Deck[0]);
  });

  it("should take a turn", function () {
    let turn = new Turn(guess);
    expect(turn).to.be.an.instanceOf(Turn);
    expect(round.turns);
  });
});
