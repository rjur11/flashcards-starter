const chai = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const expect = chai.expect;

describe("Deck", function () {
  it("should be a function", function () {
    const deck = new Deck();
    expect(deck).to.be.a("function");
  });

  it("should be an instance of Deck", function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  });
});
