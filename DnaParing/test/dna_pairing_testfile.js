var pairElement = require('../dna_pairing');
var chai = require('chai');
var expect = chai.expect;
var should = chai.should();


describe('pairElement', () => {
  it('should be a function', () => {
    pairElement.should.be.a('function');
  });

  it('should pair elements and pass case1', () => {
    expect(pairElement("ATCGA")).to.deep.equal([["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])
  });

  it('should pair elements and pass case2', () => {
    expect(pairElement("TTGAG")).to.deep.equal([["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]]);
  });

  it('should pair elements and pass case3', () => {
    expect(pairElement("CTCTA")).to.deep.equal([["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])
  })
});