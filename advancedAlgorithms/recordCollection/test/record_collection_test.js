const updateRecords = require('../record_collection').updateRecords;
const collection = require('../collection');
const chai = require('chai');

const expect = chai.expect;

describe('updateRecords', () => {
  it('should be a function', () => {
    expect(updateRecords).to.be.a('function');
  });
  it('should have a collection', () => {
    expect(collection).to.be.a('object');
  });
  it('should update the record collection 1', () => {
    updateRecords('5439', 'artist', 'ABBA');
    expect(collection['5439'].artist).to.equal('ABBA');
  });
  it('should update the record collection 2', () => {
    updateRecords('5439', 'tracks', 'Take a Chance on Me');
    expect(collection['5439'].tracks[collection['5439'].tracks.length - 1]).to.equal('Take a Chance on Me');
  });
  it('should update the record collection 3', () => {
    updateRecords('2548', 'artist', '');
    expect(collection['2548'].artist).to.equal(undefined);
  });
  it('should update the record collection 4', () => {
    updateRecords('1245', 'tracks', 'Addicted to Love');
    expect(collection['1245'].tracks[collection['1245'].tracks.length - 1]).to.equal('Addicted to Love');
  });
  it('should update the record collection 5', () => {
    updateRecords('2468', 'tracks', 'Free');
    expect(collection['2468'].tracks[0]).to.equal('1999');
  });
  it('should update the record collection 6', () => {
    updateRecords('2548', 'tracks', '');
    expect(collection['2548'].tracks).to.equal(undefined);
  });
});
