const fearNotLetter  = require('../missing_letters');
const chai = require('chai')
expect = chai.expect;


describe('fear Not Letter', () => {
  it('should be a function', () => {
    expect(fearNotLetter).to.exist;
  });

  it('should return the correct letter if it is found', () => {
    expect(fearNotLetter('abce')).to.equal('d');
    expect(fearNotLetter('abcdefghjklmno')).to.equal('i');
  });

  it('should return undefined if the letter is not missing', () => {
    expect(fearNotLetter('bcd')).to.equal(undefined);
    expect(fearNotLetter('yz')).to.equal(undefined);
  });
});