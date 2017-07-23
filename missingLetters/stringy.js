class Stringy {
  constructor(string) {
    this.string = string;
    this.currentIndex = 0;
    this.lastIndex = string.length - 1;
  }

  getCurrentCharCode() {
     let currentLetter = this.string[this.currentIndex];
     return currentLetter.getCharCodeFromLetter();
  }

  getNextCharCode() {
    let nextLetter = this.string[this.currentIndex + 1];
    return nextLetter.getCharCodeFromLetter();
  }

  NextCharacterisNotTarget() {
    return this.getTargetCharCode() !== this.getNextCharCode()
  }

  getTargetCharCode() {
    let currentCharCode = this.getCurrentCharCode();
    return currentCharCode + 1;
  }

  getTargetLetter() {
    let targetCharCode = this.getTargetCharCode();
    return String.fromCharCode(targetCharCode);
  }

  incrementCurrentIndex(){
    return this.currentIndex += 1;
  }

  currentIsNotLastIndex() {
    return this.currentIndex !== this.lastIndex;
  }
}


module.exports = Stringy;