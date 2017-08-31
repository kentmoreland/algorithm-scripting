const telephoneCheck = require('../validate_telephone_numbers');
const chai = require('chai');

const expect = chai.expect;

describe('telephoneCheck', () => {
  it('should be a function', () => {
    expect(telephoneCheck).to.be.a('function');
  });
  it('should return a boolean', () => {
    expect(telephoneCheck('555-555-5555')).to.be.a('boolean');
  });
  it('should validate US telephone numbers 1', () => {
    expect(telephoneCheck('1 555-555-5555')).to.equal(true);
  });
  it('should validate US telephone numbers 2', () => {
    expect(telephoneCheck('1 (555) 555-5555')).to.equal(true);
  });
  it('should validate US telephone numbers 3', () => {
    expect(telephoneCheck('5555555555')).to.equal(true);
  });
  it('should validate US telephone numbers 4', () => {
    expect(telephoneCheck('555-555-5555')).to.equal(true);
  });
  it('should validate US telephone numbers 5', () => {
    expect(telephoneCheck('(555)555-5555')).to.equal(true);
  });
  it('should validate US telephone numbers 6', () => {
    expect(telephoneCheck('1(555)555-5555')).to.equal(true);
  });
  it('should validate US telephone numbers 7', () => {
    expect(telephoneCheck('555-5555')).to.equal(false);
  });
  it('should validate US telephone numbers 8', () => {
    expect(telephoneCheck('5555555')).to.equal(false);
  });
  it('should validate US telephone numbers 9', () => {
    expect(telephoneCheck('1 555)555-5555')).to.equal(false);
  });
  it('should validate US telephone numbers 10', () => {
    expect(telephoneCheck('1 456 789 4444')).to.equal(true);
  });
  it('should validate US telephone numbers 11', () => {
    expect(telephoneCheck('123**&!!asdf#')).to.equal(false);
  });
  it('should validate US telephone numbers 12', () => {
    expect(telephoneCheck('55555555')).to.equal(false);
  });
  it('should validate US telephone numbers 13', () => {
    expect(telephoneCheck('(6505552368)')).to.equal(false);
  });
  it('should validate US telephone numbers 14', () => {
    expect(telephoneCheck('2 (757) 622-7382')).to.equal(false);
  });
  it('should validate US telephone numbers 15', () => {
    expect(telephoneCheck('0 (757) 622-7382')).to.equal(false);
  });
  it('should validate US telephone numbers 16', () => {
    expect(telephoneCheck('-1 (757) 622-7382')).to.equal(false);
  });
  it('should validate US telephone numbers 17', () => {
    expect(telephoneCheck('2 757 622-7382')).to.equal(false);
  });
  it('should validate US telephone numbers 18', () => {
    expect(telephoneCheck('10 (757) 622-7382')).to.equal(false);
  });
  it('should validate US telephone numbers 19', () => {
    expect(telephoneCheck('27576227382')).to.equal(false);
  });
  it('should validate US telephone numbers 20', () => {
    expect(telephoneCheck('(275)76227382')).to.equal(false);
  });
  it('should validate US telephone numbers 21', () => {
    expect(telephoneCheck('2(757)6227382')).to.equal(false);
  });
  it('should validate US telephone numbers 22', () => {
    expect(telephoneCheck('555)-555-5555')).to.equal(false);
  });
  it('should validate US telephone numbers 23', () => {
    expect(telephoneCheck('(555-555-5555')).to.equal(false);
  });
  it('should validate US telephone numbers 24', () => {
    expect(telephoneCheck('(555)5(55?)-5555')).to.equal(false);
  });
});
