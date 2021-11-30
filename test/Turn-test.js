const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;
const Turn = require("../src/Turn");

describe("Turn", function () {
  it("should be a function", function () {
    const turn = new Turn();
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should return a guess", function () {
    const turn = new Turn("dog", card);
    expect(Turn.returnGuess).to.equal("dog");
  });

  it("should return the card", function () {
    const card = new Card();
    expect(Turn.returnCard).to.equal(Card);
  });

  it("should return a boolean indicating if the user's guess matches the correct answer on the card", function () {
    const turn = new Turn(guess, card);
    expect(Turn.guess).to.equal(Card.correctAnswer);
  });

  it("should return 'incorrect!' if guess is incorrect", function () {
    const turn = new Turn(guess, card);
    expect(Turn.guess).to.not.equal(Card.correctAnswer, "incorrect!");
  });

  it("should return 'correct!' if guess is incorrect", function () {
    const turn = new Turn(guess, card);
    expect(Turn.guess).to.equal(Card.correctAnswer, "correct!");
  });
});
