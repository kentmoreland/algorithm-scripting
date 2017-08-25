function convertBinaryStringToArrayOfBinaryNumbers(string) {
  return string.split(' ');
}

function changeBinaryStringToIntegerNumber(binaryNumber) {
  return parseInt(binaryNumber, 2);
}

function getCharacterFromInteger(integerToChange) {
  return String.fromCharCode(integerToChange);
}

function combineArrayIntoString(array) {
  return array.join('');
}

function getCharacterFromBinaryNumber(number) {
  const integer = changeBinaryStringToIntegerNumber(number);
  const letter = getCharacterFromInteger(integer);
  return letter;
}

function binaryAgent(str) {
  const binaryArray = convertBinaryStringToArrayOfBinaryNumbers(str);
  const characterArray = binaryArray.map(getCharacterFromBinaryNumber);
  const translatedString = combineArrayIntoString(characterArray);
  return translatedString;
}

module.exports = binaryAgent;
