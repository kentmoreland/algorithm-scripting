function convertSentenceToArray(sentence) {
  return sentence.split(' ');
}

function convertWordToArray(word) {
  return word.split('');
}

function getIndexOfValueInArray(array, value) {
  return array.indexOf(value);
}

function letterIsUpperCase(letter) {
  return letter === letter.toUpperCase();
}

function capitalizeFirstLetter(string) {
  var arrayed = convertWordToArray(string);
  arrayed[0] = arrayed[0].toUpperCase();
  return arrayed.join('');
}

function firstLetterInWordIsCaps(word) {
  return letterIsUpperCase(word[0]);
}

function myReplace(str, before, after) {
  var arrayed = convertSentenceToArray(str);
  var wordIndex = getIndexOfValueInArray(arrayed, before);


  if(firstLetterInWordIsCaps(arrayed[wordIndex])) {
    arrayed[wordIndex] = capitalizeFirstLetter(after);
    return arrayed.join(' ');
  } else {
     arrayed[wordIndex] = after;
     return arrayed.join(' ');
  }
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));

