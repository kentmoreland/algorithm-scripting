
class Letter {
  constructor(letter, LetterIndex, fromString) {
    this.string = fromString;
    this.letter = letter;
    this.index = LetterIndex;
  }

  isPreceededByWhiteSpace() {
    return this.string[this.index - 1] !== ' ';
  }

  isNotFirstLetter() {
    return this.index !== 0;
  }

  isNotUnderscore() {
    return this.letter !== '_';
  }

  makeLowerCase() {
    return this.letter.toLowerCase();
  }
}

function letterBeginsWord(letter) {
  return letter.isPreceededByWhiteSpace() &&
      letter.isNotFirstLetter() &&
      letter.isNotUnderscore();
}

function AddDashAndLowerCase(letter) {
  return `-${letter.makeLowerCase()}`;
}

function lowerCase(letter) {
  return letter.makeLowerCase();
}

function replaceWithLowerCase(letter, index, str) {
  const letterly = new Letter(letter, index, str);
  return letterBeginsWord(letterly) ?
    AddDashAndLowerCase(letterly) :
    lowerCase(letterly);
}

function spinalCase(str) {
  return str
    .replace(/[A-Z]/g, replaceWithLowerCase)
    .replace(/\s+/g, '-')
    .replace(/_/g, '');
}


module.exports = spinalCase;
