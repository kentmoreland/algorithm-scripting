const chai = require('chai');
const sumFibs = require('../sum_all_odd_Fibonacci_numbers');

const expect = chai.expect;


describe('sumFibs', () => {
  it('should be a function', () => {
    expect(sumFibs).to.be.a('function');
  });
  it('should sum odd fibs', () => {
    expect(sumFibs(1000)).to.equal(1785);
  });
  it('should sum odd fibs', () => {
    expect(sumFibs(4000000)).to.equal(4613732);
  });
  it('should sum odd fibs', () => {
    expect(sumFibs(4)).to.equal(5);
  });
  it('should sum odd fibs', () => {
    expect(sumFibs(75024)).to.equal(60696);
  });
  it('should sum odd fibs', () => {
    expect(sumFibs(75025)).to.equal(135721);
  });
});
