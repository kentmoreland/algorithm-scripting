const findElement = require('../finders_keepers');
const chai = require('chai');

const expect = chai.expect;

describe('findElement', () => {
  it('should be a function', () => {
    expect(findElement).to.be.a('function');
  });
  it('should find the element which passes the test', () => {
    expect(findElement([1, 3, 5, 8, 9, 10], num => num % 2 === 0)).to.equal(8);
  });
  it('should find the element which passes the test', () => {
    expect(findElement([1, 3, 5, 9], num => num % 2 === 0)).to.equal(undefined);
  });
});
