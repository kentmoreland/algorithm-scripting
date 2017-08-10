const chai = require('chai');
const smallestCommons = require('../smallest_common_multiple');

const expect = chai.expect;

describe('smallestCommons', () => {
  it('should be a function', () => {
    expect(smallestCommons).to.be.a('function');
  });
  it('should return the smallest common multiple', () => {
    expect(smallestCommons([1, 5])).to.equal(60);
  });
  it('should return the smallest common multiple', () => {
    expect(smallestCommons([5, 1])).to.equal(60);
  });
  it('should return the smallest common multiple', () => {
    expect(smallestCommons([5, 1])).to.equal(60);
  });
  it('should return the smallest common multiple', () => {
    expect(smallestCommons([1, 13])).to.equal(360360);
  });
  it('should return the smallest common multiple', () => {
    expect(smallestCommons([23, 18])).to.equal(6056820);
  });
});
