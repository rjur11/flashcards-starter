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
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it("should be able to take turns", function () {
    expect(round.turns).to.equal(0);
    let turn1 = round.takeTurn("sea otter");
    let turn2 = round.takeTurn("spleen");
    expect(round.turns).to.equal(2);
  });

  it("should be able to return correct guess feedback", function () {
    expect(round.turns).to.equal(0);
    let turn1 = round.takeTurn("sea otter");
    let turn2 = round.takeTurn("gallbladder");
    expect(round.turns).to.equal(2);
    expect(turn1).to.equal("correct!");
    expect(turn2).to.equal("correct!");
  });

  it("should be able to return incorrect guess feedback", function () {
    expect(round.turns).to.equal(0);
    let turn1 = round.takeTurn("pug");
    let turn2 = round.takeTurn("spleen");
    expect(round.turns).to.equal(2);
    expect(turn1).to.equal("incorrect!");
    expect(turn2).to.equal("incorrect!");
  });

  it("should store incorrect guesses in incorrectGuesses array", function () {
    let turn1 = round.takeTurn("pug");
    expect(round.incorrectGuesses).to.deep.equal([1]);
    let turn2 = round.takeTurn("spleen");
    expect(round.incorrectGuesses).to.deep.equal([1, 14]);
  });

  it("should calculate and return percentage of correct guesses", function () {
    let turn1 = round.takeTurn("pug");
    let turn2 = round.takeTurn("gallbladder");
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
  it("should print round over message", function () {
    let logged = [];
    console.log = (input) => {
      logged.push(input);
    };
    let turn1 = round.takeTurn("pug");
    let turn2 = round.takeTurn("gallbladder");
    round.endRound();
    expect(logged).to.deep.equal([
      "** Round over! ** You answered 50% of the questions correctly!",
    ]);
  });
});
