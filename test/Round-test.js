const chai = require("chai");
const Card = require("../src/Card");
const Deck = require("../src/Deck");
const Round = require("../src/Round");
const expect = chai.expect;

describe("Round", function () {
  it("should be a function", function () {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of Round", function () {
    const round = new Round();
    expect(round).to.be.an.instanceof(Round);
  });
});
