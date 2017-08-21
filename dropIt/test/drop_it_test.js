const dropElements = require('../drop_it');
const chai = require('chai');

const expect = chai.expect;

describe('dropElements', () => {
  it('should be a function', () => {
    expect(dropElements).to.be.a('function');
  });
  it('should drop elements until the element passes', () => {
    expect(dropElements([1, 2, 3, 4], n => n >= 3)).to.eql([3, 4]);
  });
  it('should drop elements until an element passes', () => {
    expect(dropElements([0, 1, 0, 1], n => n === 1)).to.eql([1, 0, 1]);
  });
  it('should drop elements until an element passes', () => {
    expect(dropElements([1, 2, 3], n => n > 0)).to.eql([1, 2, 3]);
  });
  it('should drop elements until an element passes', () => {
    expect(dropElements([1, 2, 3, 4], n => n > 5)).to.eql([]);
  });
  it('should drop elements until an element passes', () => {
    expect(dropElements([1, 2, 3, 7, 4], n => n > 3)).to.eql([7, 4]);
  });
  it('should drop elements until an element passes', () => {
    expect(dropElements([1, 2, 3, 9, 2], n => n > 2)).to.eql([3, 9, 2]);
  });
});
