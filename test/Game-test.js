const chai = require("chai");
const expect = chai.expect;
const data = require("../src/data");
const prototypeQuestions = data.prototypeData;
const Deck = require("../src/Deck");
const Round = require("../src/Round");

const Game = require("../src/Game");

describe("Game", function () {
  let cards;
  let game;

  beforeEach(function () {
    cards = prototypeQuestions;
    game = new Game();
  });

  it("should be an instance of Game", function () {
    expect(game).to.be.an.instanceof(Game);
  });

  it("should keep track of the current round", function () {
    expect(game.currentRound).to.equal(undefined);
  });

  it("should be an instance of Round", function () {
    game.start();
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });

  it("should be an instance of Deck", function () {
    game.start();
    expect(game.currentRound.deck).to.be.an.instanceOf(Deck);
  });

  it("should put Cards in a Deck", function () {
    game.start();
    expect(game.currentRound.deck.cards).to.deep.equal(cards);
  });
});
