const Stringy = require('./stringy')
String.prototype.getCharCodeFromLetter = function getCharCode() {
  return this.charCodeAt();
}

function fearNotLetter(str) {
  str = new Stringy(str);
  while(str.currentIsNotLastIndex()) {
    if(str.NextCharacterisNotTarget()){
      return str.getTargetLetter();
    } else {
      str.incrementCurrentIndex();
    }
  }
  return undefined;
}


module.exports =  fearNotLetter;