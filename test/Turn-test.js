const chai = require('chai').expect;
const expect = chai.expect;
const Turn = require('../src/Turn');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(Turn).to.be.an.instanceof(Turn);
  }); 





});