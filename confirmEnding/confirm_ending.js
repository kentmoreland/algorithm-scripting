function getLastLetter(string) {
  return string.substr(string.length - 1, string.length - 1);
}

function getLastWord(string) {
  var splitString = string.split(' ');
  return splitString[splitString.length - 1];
}

function checkMultipleWords(string) {
  return string.split(' ').length > 1;
}

function checkWithinWord(string, target) {
  var lastWord = getLastWord(string);
  return lastWord.indexOf(target) >= 0;
}

function confirmEnding(str, target) {
  return checkMultipleWords(str) ?
    checkWithinWord(str, target) :
    target === getLastLetter(str);
}


confirmEnding("Bastian", "n");