const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;
const Turn = require("../src/Turn");

describe("Turn", function () {
  let turn;
  let card;
  beforeEach(function () {
    card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    turn = new Turn("pug", card);
  });
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should return a guess", function () {
    expect(turn.returnGuess()).to.equal("pug");
  });

  it("should return the card", function () {
    expect(turn.returnCard()).to.equal(card);
  });

  it("should return a boolean indicating if the user's guess matches the correct answer on the card", function () {
    turn = new Turn("sea otter", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should return a boolean indicating if the user's guess does not match the correct answer on the card", function () {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should return 'correct!' if guess is correct", function () {
    turn = new Turn("sea otter", card);
    expect(turn.giveFeedback()).to.equal("correct!");
  });

  it("should return 'incorrect!' if guess is incorrect", function () {
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
