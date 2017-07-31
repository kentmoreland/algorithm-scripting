const convertHTML = require('../convert_html_entities');
const chai = require('chai');

const expect = chai.expect;


describe('convertHTML', () => {
  it('should exist', () => {
    expect(convertHTML).to.be.a('function');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML('Dolce & Gabbana')).to.equal('Dolce &amp; Gabbana');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML('Hamburgers < Pizza < Tacos')).to.equal('Hamburgers &lt; Pizza &lt; Tacos');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML('Sixty > twelve')).to.eq('Sixty &gt; twelve');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML('Stuff in "quotation marks"')).to.equal('Stuff in &quot;quotation marks&quot;');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML("Shindler's List")).to.equal('Shindler&apos;s List');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML("<>")).to.equal('&lt;&gt;');
  });

  it('should convert HTML properly', () => {
    expect(convertHTML("abc")).to.equal('abc');
  });

});
