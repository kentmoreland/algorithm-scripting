const sumPrimes = require('../sum_all_primes');
const chai = require('chai');

const expect = chai.expect;

describe('sumPrimes', () => {
  it('should be a function', () => {
    expect(sumPrimes).to.be.a('function');
  });
  it('should return the correct sum of primes', () => {
    expect(sumPrimes(10)).to.equal(17);
  });
  it('should return the correct sum of primes', () => {
    expect(sumPrimes(977)).to.equal(73156);
  });
});
