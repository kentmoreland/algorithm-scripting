const uniteUnique = require('../sorted_union');
const chai = require('chai');
const expect = chai.expect;

describe('uniteUnique', () => {
  it ('should exist', () => {
    expect(uniteUnique).to.exist;
  });

  it('should return a sorted array of unique values', () => {
    expect(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])).to.eql([1, 3, 2, 5, 4]);
  });

  it('should return a sorted array of unique values', () => {
    expect(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])).to.eql([1, 3, 2, [5], [4]]);

  });

  it('should return a sorted array of unique values', () => {

    expect(uniteUnique([1, 2, 3], [5, 2, 1])).to.eql([1, 2, 3, 5]).to.eql([1, 2, 3, 5]);
  });

  it('should return a sorted array of unique values', () => {

    expect(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])).to.eql([1, 2, 3, 5, 4, 6, 7, 8]);
  });
});