const chai = require('chai');
const expect = chai.expect;
const booWho = require('../boo_who');

describe('booWho', () => {
  it('should exist', () => {
    expect(booWho).to.exist;
  });
  it('should return true for values which are boolean', () => {
    expect(booWho(true)).to.equal(true);
    expect(booWho(false)).to.equal(true);
  });
  it('should return false for values which are false', () => {
    expect(booWho([1, 2, 3])).to.equal(false);
    expect(booWho([].slice)).to.equal(false);
    expect(booWho({ 'a': 1 })).to.equal(false);
    expect(booWho(1)).to.equal(false);
    expect(booWho(NaN)).to.equal(false);
    expect(booWho('a')).to.equal(false);
    expect(booWho('true')).to.equal(false);
    expect(booWho('false')).to.equal(false);
  });
});