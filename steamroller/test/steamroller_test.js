const steamrollArray = require('../steamroller');
const chai = require('chai');

const expect = chai.expect;


describe('steamrollArray', () => {
  it('should be a function', () => {
    expect(steamrollArray).to.be.a('function');
  });
  it('should flatten nested arrays', () => {
    expect(steamrollArray([[['a']], [['b']]])).to.eql(['a', 'b']);
  });
  it('should flatten nested arrays', () => {
    expect(steamrollArray([1, [], [3, [[4]]]])).to.eql([1, 3, 4]);
  });
  it('should flatten nested arrays', () => {
    expect(steamrollArray([1, {}, [3, [[4]]]])).to.eql([1, {}, 3, 4]);
  });
});
