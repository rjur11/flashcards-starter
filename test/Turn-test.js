const chai = require("chai");
const Card = require("../src/Card");
const expect = chai.expect;
const Turn = require("../src/Turn");

describe("Turn", function () {
  it("should be a function", function () {
    expect(Turn).to.be.a("function");
  });

  it("should be an instance of Turn", function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it("should return a guess", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.returnGuess()).to.equal("pug");
  });

  it("should return the card", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.returnCard()).to.equal(card);
  });

  it("should return a boolean indicating if the user's guess matches the correct answer on the card", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("sea otter", card);
    expect(turn.evaluateGuess()).to.equal(true);
  });

  it("should return a boolean indicating if the user's guess does not match the correct answer on the card", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it("should return 'correct!' if guess is correct", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("sea otter", card);
    expect(turn.giveFeedback()).to.equal("correct!");
  });

  it("should return 'incorrect!' if guess is incorrect", function () {
    const card = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const turn = new Turn("pug", card);
    expect(turn.giveFeedback()).to.equal("incorrect!");
  });
});
