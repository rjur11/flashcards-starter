const chai = require("chai");
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
        const turn = new Turn("dog", card) {
        expect(Turn.returnGuess).to.equal("dog");
        }
    });

});
