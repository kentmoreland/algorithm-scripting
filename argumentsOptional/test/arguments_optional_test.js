const addTogether = require('../arguments_optional');
const chai = require('chai');

const expect = chai.expect;

describe('addTogether', () => {
  it('should be a function', () => {
    expect(addTogether).to.be.a('function');
  });
  it('should add arguments together 1', () => {
    expect(addTogether(2, 3)).to.equal(5);
  });
  it('should add arguments together 2', () => {
    expect(addTogether(2)(3)).to.equal(5);
  });
  it('should add arguments together 3', () => {
    expect(addTogether('http://bit.ly/IqT6zt')).to.equal(undefined);
  });
  it('should add arguments together 4', () => {
    expect(addTogether(2, '3')).to.equal(undefined);
  });
  it('should add arguments together 5', () => {
    expect(addTogether(2)([3])).to.equal(undefined);
  });
});
