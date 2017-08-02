const spinalCase = require('../spinal_tap_case');
const chai = require('chai');

const expect = chai.expect;

describe('spinalCase', () => {
  it('should be a function', () => {
    expect(spinalCase).to.be.a('function');
  });
  it('should convert a string to spinal case', () => {
    expect(spinalCase('this Is Spinal Tap')).to.equal('this-is-spinal-tap');
  });
  it('should convert a string to spinal case', () => {
    expect(spinalCase('thisIsSpinalTap')).to.equal('this-is-spinal-tap');
  });
  it('should convert a string to spinal case', () => {
    expect(spinalCase('The_Andy_Griffith_Show')).to.equal('the-andy-griffith-show');
  });
  it('should convert a string to spinal case', () => {
    expect(spinalCase('Teletubbies say Eh-oh')).to.equal('teletubbies-say-eh-oh');
  });
  it('should convert a string to spinal case', () => {
    expect(spinalCase('AllThe-small Things')).to.equal('all-the-small-things');
  });
});
