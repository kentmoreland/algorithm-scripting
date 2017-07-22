var basePairs = {A: 'T', C: 'G', T: 'A', G: 'C'};

String.prototype.arrayed = function arrayed() {
  return this.split('');
}

function pairElement(str) {
 return str.arrayed().map(base => [base, basePairs[base]])
}

console.log(pairElement("GCG"));

module.exports = pairElement;