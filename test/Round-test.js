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
  it("should start with a deck", function(){
    const card1 = new Card(
        1,
        "What is Robbie's favorite animal",
        ["sea otter", "pug", "capybara"],
        "sea otter"
      );
      const card2 = new Card(
        14,
        "What organ is Khalid missing?",
        ["spleen", "appendix", "gallbladder"],
        "gallbladder"
      );
      const card3 = new Card(
        12,
        "What is Travis's middle name?",
        ["Lex", "William", "Fitzgerald"],
        "Fitzgerald"
      );
  
      const deck = new Deck([card1, card2, card3]);
      const round = new Round(deck);
      expect()
  }  
  })
  it("should return the current card being played", function () {
    //currentCard === first card in the deck at start of round
    const card1 = new Card(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = new Card(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const card3 = new Card(
      12,
      "What is Travis's middle name?",
      ["Lex", "William", "Fitzgerald"],
      "Fitzgerald"
    );

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard).to.equal(Deck[0]);
  });
});
