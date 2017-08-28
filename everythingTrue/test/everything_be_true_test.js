const truthCheck = require('../everything_be_true');
const chai = require('chai');

const expect = chai.expect;

describe('truthCheck', () => {
  it('should be a function', () => {
    expect(truthCheck).to.be.a('function');
  });
  it('should check if the predicate is truthy', () => {
    expect(truthCheck([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy', sex: 'male' }, { user: 'Laa-Laa', sex: 'female' }, { user: 'Po', sex: 'female' }], 'sex')).to.equal(true);
  });
  it('should check if the predicate is truthy 1', () => {
    expect(truthCheck([{ user: 'Tinky-Winky', sex: 'male' }, { user: 'Dipsy' }, { user: 'Laa-Laa', sex: 'female' }, { user: 'Po', sex: 'female' }], 'sex')).to.equal(false);
  });
  it('should check if the predicate is truthy 2', () => {
    expect(truthCheck([{ user: 'Tinky-Winky', sex: 'male', age: 0 }, { user: 'Dipsy', sex: 'male', age: 3 }, { user: 'Laa-Laa', sex: 'female', age: 5 }, { user: 'Po', sex: 'female' }, { user: 'Po', sex: 'female', age: 4 }], 'age')).to.equal(false);
  });
  it('should check if the predicate is truthy 3', () => {
    expect(truthCheck([{ name: 'Pete', onBoat: true }, { name: 'Repeat', onBoat: true }, { name: 'FastFoward', onBoat: null }], 'onBoat')).to.equal(false);
  });
  it('should check if the predicate is truthy 4', () => {
    expect(truthCheck([{ name: 'Pete', onBoat: true }, { name: 'Repeat', onBoat: true, alias: 'Repete' }, { name: 'FastFoward', onBoat: true }], 'onBoat')).to.equal(true);
  });
  it('should check if the predicate is truthy 5', () => {
    expect(truthCheck([{ single: 'yes' }], 'single')).to.equal(true);
  });
  it('should check if the predicate is truthy 6', () => {
    expect(truthCheck([{ single: 'double' }, { single: undefined }], 'single')).to.equal(false);
  });
  it('should check if the predicate is truthy 7', () => {
    expect(truthCheck([{ single: '' }, { single: 'double' }], 'single')).to.equal(false);
  });
  it('should check if the predicate is truthy 8', () => {
    expect(truthCheck([{ single: 'double' }, { single: NaN }], 'single')).to.equal(false);
  });
});
